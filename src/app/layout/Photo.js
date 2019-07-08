import React from 'react';

import '../../assets/styles/scss/layout/photo.scss';

class Photo extends React.Component {
    render() {
        return (
            <div className='cell'>
                <img src={ this.props.src } className='responsive-image lozad' alt={ this.props.alt } />
                <div className='subtitle'>
                    { this.props.subtitle.toUpperCase() }
                </div>
                <div className='materials'>
                    { this.props.materials.toLowerCase() }
                </div>
            </div>
        );
    }
}

export default Photo;
