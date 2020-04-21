import React, { Component } from 'react';
import { MapTo } from '@adobe/cq-react-editable-components';

require('./image.css')

const ImageEditConfig = {
    emptyLabel: 'ImageBanner',

    isEmpty: function (props) {
        return !props || !props.src || props.src.trim().length < 1;
    }

};

class ImageBanner extends Component {

    get caption() {
        if (this.props.title && this.props.title.length > 0) {
            return <span className="Image-caption">{this.props.title}</span>;
        }
        return null;
    }

    get content() {
        // return <image src={this.props.src} alt={this.props.alt} title={this.props.title} />
        // return <Image src='https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=500' title='hello' />
        return <img src={this.props.src} alt={this.props.alt}
            title={this.props.displayPopupTitle && this.props.title} />
    }

    render() {
        return (<div>
            {this.content}
            {this.caption}
        </div>);
    }
}
export default MapTo('TMNA/components/image')(ImageBanner, ImageEditConfig);
