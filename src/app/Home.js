import React from 'react';
import PhotoGrid from './layout/PhotoGrid';
import { flamelinkInstance } from '../global.js';

// Styles
import '../assets/styles/scss/home.scss';

// Header Section Images
import initials from '../assets/images/gg-logo-nopadding.svg';
import fullName from '../assets/images/full-name-logo-nopadding.svg';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [] };

        flamelinkInstance.content.get('images')
            .then(images => {
                this.setState({ images: images });
            })
            .catch(error => console.log('something bad happened :-(\n', error));
    }

    render() {
            return this.state.images.length !== 0 ? (
                <div className="home-container">
                    <div className="home-header-container">
                        <img src={initials} className="initials-logo" alt="Initials Logo" />
                        <img src={fullName} className="full-name-logo" alt="Full Name Logo" />
                    </div>
                    <PhotoGrid images={this.state.images} />
                </div>
            ) : <div>Loading images...</div>;
    }
}

export default Home;
