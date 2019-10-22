import React from 'react';

import { flamelinkInstance, analytics } from '../global.js';

// Images
import fullName from '../assets/images/full-name-logo-nopadding.svg';

// Scss
import '../assets/styles/scss/about.scss';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutImage: null,
            aboutText: null,
            email: null,
        };
    }

    async loadAboutData() {
        flamelinkInstance.content.get('about')
            .then(data => {
                this.setState({
                    aboutImage: data.imageLink,
                    aboutText: data.aboutText,
                    email: data.email
                });
            })
            .catch(error => console.log('Error loading About CMS content\n', error));
    }

    componentDidMount() {
        this.loadAboutData();
        analytics.logEvent('About page');
    }

    render() {
        return (
            <div className='about-container'>
                <img className='gretchen-image' src={ this.state.aboutImage } alt='Gretchen Gambill Portrait' />
                <div className='gg-logo-container'>
                    <img className='gg-logo' src={ fullName } alt='Gretchen Gambill Signature' />
                </div>
                <div className='about-text'>
                    { this.state.aboutText }
                </div>
                <div className='about-contact'>
                    <div className='about-contact-heading'>
                        Contact <br />
                    </div>
                    { this.state.email }
                    <br /><br />
                    <div className='about-contact-heading'>
                        Etsy <br />
                    </div>
                    <a href='https://www.etsy.com/shop/GAMBILLART' target='_blank' rel='noopener noreferrer'>https://www.etsy.com/shop/GAMBILLART</a>
                </div>
            </div>
        );
    }
}

export default About;
