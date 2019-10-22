import React from 'react';

import { flamelinkInstance, analytics } from '../global.js';

// Styles
import '../assets/styles/scss/home.scss';

// Images
import initials from '../assets/images/gg-logo-nopadding.svg';
import fullName from '../assets/images/full-name-logo-nopadding.svg';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            homeText: ''
        };
    }

    async loadCMSContent() {
        flamelinkInstance.content.get('home')
            .then(data => {
                this.setState({ homeText: data.homeText });
            })
            .catch(error =>
                console.log('Error loading home CMS content\n', error)
            );
    }

    componentDidMount() {
        this.loadCMSContent();
        analytics.logEvent('Home page');
    }

    render() {
        const { homeText } = this.state;
        return (
            <div>
                <div className='home-header-container'>
                    <img src={initials} className='initials-logo' alt='GG Logo' />
                    <img src={fullName} className='full-name-logo' alt='Gretchen Gambill Signature' />
                </div>
                <div className='home-text-container'>
                    <div className='home-text'>
                        { homeText }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
