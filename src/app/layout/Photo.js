import React from 'react';
import LazyLoad from 'react-lazyload';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CSSTransition } from 'react-transition-group';

// Scss
import '../../assets/styles/scss/layout/photo.scss';

// Images
import Image from '../../assets/images/gg-logo-nopadding.svg';

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.keyCounter = 0;
    }
    render() {
        return (
            <div className='cell'>
                {/* <LazyLoad key={this.keyCounter} throttle={200} onClick={console.log('clicked ' + this.keyCounter)} className='lazyload'>
                    <CSSTransition
                        key={this.keyCounter++}
                        appear
                        // transitionName="fade"
                        timeout={500}
                        onEnter={() => console.log('entered')}
                    >
                        <img src={ this.props.src } className='responsive-image' alt={ this.props.alt } />
                        <img src={Image} />
                    </CSSTransition>
                </LazyLoad> */}
                <LazyLoadImage
                    src={this.props.src}
                    className='responsive-image'
                    effect='opacity'
                />
                <div className='subtitle'>
                    { this.props.subtitle }
                </div>
                <div className='materials'>
                    { this.props.materials }
                </div>
            </div>
        );
    }
}

export default Photo;
