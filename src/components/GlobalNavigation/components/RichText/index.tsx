import { RichText } from '@sitecore-jss/sitecore-jss-react';
import get from 'lodash.get';
import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Disclaimer from '../Disclaimer';
import RouterLink from '../routerLink';
import { JSSRichText, SitecoreLink } from '../types';
import { Viewport } from '../Viewport';
import { Node, TagNode, TextNode } from './types';

interface OwnProps extends RouteComponentProps {
    sitecoreContext?: string;
    viewport?: Viewport;
    field: JSSRichText;

    // Called when a generated RouterLink is clicked
    onLinkClick?: (href: string, ref: React.RefObject<any>) => void;

    // Applied to the wrapping HTMLElement
    className?: string;
    tag?: string;

    // If given, truncates the text at a certain length adding 'readmore' and 'readless' spans
    lengthLimit?: number | {[v in Viewport]: number};
}

type Props = OwnProps;

/**
 * A custom RTF component that works similarly to a JSS RTF,
 * except we capture all embedded anchor tags, and render them as
 * RouterLinks.
 */
class RouterLinkedRichText extends React.Component<Props, any> {
    public state = {
        tooLong: false,
        truncate: true,
        wasTruncated: false,
    };

    /**
     * Convert an HTML Anchor tag into a redux-connected RouterLink component.
     *
     * @param node HTML Node element, passed from the html-react-parser library
     */
    public anchorTransform(node: TagNode) {
        const href: string = get(node, 'attribs.href', '');

        /**
         * In the Sitecore Rich Text editor, Content-Authors have 3 options for making a given link external:
         *  - Use a full URL
         *  - Use a relative URL and add the segment `data-external="true"` to the anchor tag's HTML
         *  - Use a relative URL and set any Target attribute on the element (sitecore-generated internal links never have target attributes)
         */
        const dataExternal: string | undefined = get(node, 'attribs.data-external');
        const target: string | undefined = get(node, 'attribs.target');

        const isInternal: boolean = (!!target || dataExternal === 'true') ? false : (href.startsWith('/'));

        // A mock Link datasource created from the data in our anchor tag.
        const routerLinkJss: SitecoreLink = {
            jss: {
                value: {
                    href,
                    linktype: isInternal ? 'internal' : 'external',
                }
            }
        };

        const linkRef: React.RefObject<any> = React.createRef();

        return (
            <RouterLink
                className={node.name === 'a' ? 'rich-text-anchor' : ''}
                field={routerLinkJss}

                onClick={() => {
                    if (this.props.onLinkClick) {
                        this.props.onLinkClick(href, linkRef);
                    }
                }}
            >
                {/* Continue to parse the anchor tag's children with react-html-parser */}
                {node.children.map((child: Node) => {
                    return convertNodeToElement(child);
                })}
            </RouterLink>
        );
    }

    /**
     * When text is truncated, expand the text and show 'readless'
     */
    public expand = () => {
        this.setState({
            truncate: false,
            wasTruncated: true
        });
    }

    /**
     * When text is expanded, collapse the text and show 'readmore'
     */
    public collapse = () => {
        this.setState({
            truncate: true,
            wasTruncated: false
        });
    }

    /**
     * Determine final length of a string AFTER disclaimer text has been substituted for single asterisks
     */
    public finalLength = (s: string) => {
        const disclaimerRegex = /(.*)\[D-([A-Z0-9,]+)\](.*)/;
        const match: RegExpMatchArray | null = s.match(disclaimerRegex);

        if (match) {
            return match[1].length + 1 + match[2].length;
        }
        return s.length;
    }

    /**
     * Searches for [D-XXXX] strings in text-nodes and replaces them with Disclaimer Popup elements.
     * Additionally, truncates the entire string based on a given length
     *
     * @param node Whole Text Node to parse and transform
     * @param lengthLimit Maximum size of the text. If the lengthLimit < length of text, then teh text is truncated.
     */
    public disclaimerTransform = (node: TextNode, lengthLimit: number = 99999): string | JSX.Element => {
        const disclaimerRegex = /(.*)\[D-([A-Z0-9,]+)\](.*)/;
        const match: RegExpMatchArray | null = node.data.match(disclaimerRegex);

        if (match) { // Means there is a [D-xxxx] code somewhere in the text. It needs to be replaced with a Disclaimer popup.

            const before: string = match[1]; // All the text before the [D-xxxx] code
            const after: string = match[3]; // All the text after the [D-xxxx] code

            // Len of teh before/after text AFTER the disclaimer replacement is performed
            const beforeLen = this.finalLength(before);
            const afterLen = this.finalLength(after);

            if (this.state.truncate && beforeLen > lengthLimit) {
                // The before text is too long. Truncate and display only the before text and '... Read more'
                return (
                    <>
                        {before.slice(0, lengthLimit - 3)}
                        <span className="richtext-read-more" onClick={this.expand}>...</span>
                    </>
                );
            }

            if (this.state.truncate && beforeLen + 1 + afterLen > lengthLimit) {
                // The Before text + After text is too long. Display all the before text, then truncate the after text
                return (
                    <>
                        {this.disclaimerTransform({type: 'text', data: before})}
                        <Disclaimer code={match[2]} />
                        {after.slice(0, lengthLimit - beforeLen - 3)}
                        <span className="richtext-read-more" onClick={this.expand}>...</span>
                    </>
                );
            }

            // The lengthLimit has not been exceeded
            const beforeNode: TextNode = {type: 'text', data: before};
            const afterNode: TextNode = {type: 'text', data: after};

            return (
                <>
                    {this.disclaimerTransform(beforeNode)}
                    <Disclaimer code={match[2]} />
                    {this.disclaimerTransform(afterNode)}
                </>
            );
        }

        if (this.state.truncate && node.data.length > lengthLimit) {
            // Text node exceeds lengthlimit
            return (
                <>
                    {node.data.slice(0, lengthLimit - 3)}
                    <span className="richtext-read-more" onClick={this.expand}>...</span>
                </>
            );
        } else {
            // Text node doesn't exceed length limit
            return node.data;
        }
    }

    // tslint:disable-next-line: cognitive-complexity
    public render() {

        /**
         * With this component, we have encountered issues involving SSR and React.Hydrate
         * When the server runs React.createElement, it sometimes fails to add the correct classNames on the wrapping node.
         *
         * To get around this, RichText fields are not rendered on the server-side. This forces a full
         * rerender of the comopnent during client-side hydration.
         */
        const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
        if (!canUseDOM) {
            return null;
        }

        /**
         * Another check on the client-side for Sitecore's experience-editor and preview modes.
         * In these modes, we simply use the Sitecore-provided RichText component (which integrates well with the Experience Editor).
         */
        if (this.props.sitecoreContext !== 'normal') {
            return (
                <RichText field={this.props.field} />
            );
        }

        let maxLength = 999999;
        if (this.props.lengthLimit && typeof this.props.lengthLimit === 'number') {
            maxLength = this.props.lengthLimit;
        }
        if (this.props.lengthLimit && this.props.lengthLimit[this.props.viewport ? this.props.viewport : 'DESKTOP']) {
            maxLength = this.props.lengthLimit[this.props.viewport ? this.props.viewport : 'DESKTOP'];
        }

        /**
         * For normal client-side views:
         * Using the react-html-parser library, we take the html string given to us by sitecore, and convert it into a React Element Tree.
         *
         * In the process, we transform all anchor tags into RouterLink components, which
         * adds additional Routing functionality and Analytics tagging.
         */
        const html = get(this.props, 'field.value', '');
        const tag = (this.props.tag) ? this.props.tag : 'div';
        return React.createElement(
            tag,
            {
                className: this.props.className,
            },
            [
                ReactHtmlParser(html, {
                    transform: (node: Node, index: number) => {
                        if (node.type === 'text') {
                            return this.disclaimerTransform(node, maxLength);
                        }
                        if (node.type === 'tag' && node.name === 'a') {
                            return this.anchorTransform(node);
                        }
                        return;
                    }
                }),

                this.state.wasTruncated ?
                    <>{' '}<span className="richtext-read-less" onClick={this.collapse}>&#60;</span></>
                    :
                null
            ]
        );
    }
}

export default withRouter(RouterLinkedRichText);