import { Text as SitecoreText } from '@sitecore-jss/sitecore-jss-react';
import { TextProps } from '@sitecore-jss/sitecore-jss-react/types/components/Text';
import React from 'react';
import Disclaimer from '../Disclaimer';

interface OwnProps extends TextProps {
    sitecoreContext: 'normal' | 'edit';
}

type Props = OwnProps;

/**
 * A custom RTF component that works similarly to a JSS RTF,
 * except we capture all embedded anchor tags, and render them as
 * RouterLinks.
 */
class Text extends React.Component<Props, {}> {
    public static defaultProps = {
        sitecoreContext: 'normal'
    };
    /**
     * Searches for [D-XXXX] strings in text-nodes and replaces them with Disclaimer Popup elements.
     */
    public disclaimerTransform = (data: string): string | JSX.Element => {
        const disclaimerRegex = /(.*)\[D-([A-Z0-9,]+)\](.*)/;
        const match: RegExpMatchArray | null = data.match(disclaimerRegex);
        if (match) {
            const before: string = match[1];
            const after: string = match[3];

            return (
                <>
                {this.disclaimerTransform(before)}
                <Disclaimer code={match[2]} />
                {this.disclaimerTransform(after)}
                </>
            );
        }

        return data;
    }

    public render() {
        if (this.props.sitecoreContext === 'edit') {
            return <SitecoreText {...this.props}/>;
        }

        const value = (this.props.field && !!this.props.field.value) ? this.props.field.value : '';
        const text = this.disclaimerTransform(value);

        if (this.props.tag) {
            return React.createElement(
                this.props.tag,
                {
                    ...this.props
                },
                text
            );
        } else {
            return text;
        }
    }
}

export default Text;