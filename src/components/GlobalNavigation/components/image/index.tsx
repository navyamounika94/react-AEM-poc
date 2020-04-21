import { Image as SitecoreImage } from '@sitecore-jss/sitecore-jss-react';
import { ImageProps } from '@sitecore-jss/sitecore-jss-react/types/components/Image'; // tslint:disable-line
import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { JSSImage } from '../types';

interface Props extends ImageProps {
    field: JSSImage;
    lazyLoad?: boolean; // If not defined, assumed to be true
}

class Image extends Component<Props, any> {
    public static defaultProps: Props = {
        field: {
            value: {
                src: '',
            }
        },
        lazyLoad: true,
    };

    public render() {
        const {field, lazyLoad, ...otherProps} = this.props;
        if (field.value) {
            if (field.value.style) {
                delete field.value.style;
            }
            if (field.value.height) {
                delete field.value.height;
            }
        }

        if (lazyLoad) {
            return(
                <LazyLoad
                    offset={150}
                >
                    <SitecoreImage {...otherProps} field={field} />
                </LazyLoad>
            );
        } else {
        return(
                <SitecoreImage {...otherProps} field={field} />
        );

        }


    }
}

export default Image;