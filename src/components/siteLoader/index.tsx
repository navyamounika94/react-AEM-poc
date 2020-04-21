import React from 'react';
import loaderJson from './loader.json';
import lottie from 'lottie-web'
require('./siteloader.scss');

export default class SiteLoader extends React.PureComponent {
    public loaderDiv: React.RefObject<HTMLDivElement>;

    public constructor(props: {}) {
        super(props);
        this.loaderDiv = React.createRef();
    }

    public componentDidMount() {
        if(this.loaderDiv){
        lottie.loadAnimation({
            animationData: loaderJson,
            autoplay: true,
            container: this.loaderDiv.current,
            loop: true,
            renderer: 'svg',
        });
    }
}

    public render() {
        return (
            <div className="site-loader-container site-loader-new">
            <div
                className="site-loader"
                ref={this.loaderDiv}
            />
            </div>
        );
    }
}