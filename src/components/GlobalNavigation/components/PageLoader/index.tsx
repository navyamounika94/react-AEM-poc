import React from 'react';

import LoaderGif from '../../images/loading-sprite.gif';

const PageLoader = () => {
    return(
        <div className="text-center pg-loader">
            <img src={LoaderGif} className="rounded" />
        </div>
    );
};

export default PageLoader;
