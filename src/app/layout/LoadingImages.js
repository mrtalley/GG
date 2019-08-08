import React from "react";

// Scss
import '../../assets/styles/scss/layout/loading.scss';
import '../../assets/styles/scss/reusable/spinner.scss';

// Components
import Spinner from '../reusable/spinner';

class LoadingImages extends React.Component {
    render() {
        return (
            <div className='loading'>
                <Spinner />
                Loading images...
            </div>
        );
    }
}

export default LoadingImages;
