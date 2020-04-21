import React from 'react';
import searchJson from '../../GlobalNavigation/LdNavSearch.json';
import { SafePureComponent, SafePureComponentState } from '../components/SafePureComponent';
import ArrowIcon from '../images/Icon-Arrow-Large.svg';
import CloseIcon from '../images/icon-Close-60x60.png';
import { GlobalNavMetrics } from '../types';

// Props passed from parent component
interface OwnProps {
    contentQuery?: any;
    isDesktop: boolean;
    toggleSearchbar: () => void;
    toggleNav: () => void;
    dataMetrics?: GlobalNavMetrics;
    inputRef: React.RefObject<HTMLInputElement>;
}


type Props = OwnProps;

interface State extends SafePureComponentState {
    searchInput: string;
}

export class LdNavSearch extends SafePureComponent<Props, State> {
    public static defaultProps = {
        contentQuery: searchJson
    };
    public componentName = 'LdNavSearch'; // Component identifier for logging

    public state = {
        searchInput: '',
    };

    public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchInput: (e.target.value),
        });
    }

    public switchView = () => {
        if (this.props.isDesktop) {
            this.props.toggleSearchbar();
            this.setState({
                searchInput: ''
            });
        } else {
            this.props.toggleNav();
            this.setState({
                searchInput: ''
            });
        }
    }

    public onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.showSearchResults();
        }
    }

    /**
     * Parse the GQL Response for fields that we use
     *
     * @return { placeholderText: string, searchUrlRelativePath: string} | null
     */
    public getFields = () => {
        if (this.props.contentQuery && this.props.contentQuery.status === 'SUCCESS') {
            const content = this.props.contentQuery.response;

            if (content.item) { // In case of query failure, content.item returns null
                return {
                    placeholderText: content.item.children[0].placeholderText.jss.value,
                    searchUrlRelativePath: content.item.children[0].searchUrlRelativePath.jss.value
                };
            }
        }

        return null;
    }

    public showSearchResults = () => {
        const fields = this.getFields();
        if (fields) {
            // Example url: /lexusdrivers/search?searchKey=
            window.location.href = fields.searchUrlRelativePath + encodeURIComponent(this.state.searchInput);
        }
    }

    public safeRender() {
        const fields = this.getFields();
        if (!fields) {
            return null;
        }

        return (
                <form className="form-inline">
                    <input
                        autoFocus={true}
                        ref={this.props.inputRef}
                        type="text"
                        className="form-control navsearchInput"
                        placeholder={fields.placeholderText}
                        onChange={this.handleChange}
                        onKeyPress={this.onKeyPress}
                        value={this.state.searchInput}
                    />

                    <div className="rightArrowdiv" onClick={this.showSearchResults}>
                        <img src={ArrowIcon} className="rightArrowStyle" alt="Right Arrow" />
                    </div>

                    <img src={CloseIcon} alt="closeIcon" onClick={this.switchView} />

                </form>
        );
}
}

export default LdNavSearch;
