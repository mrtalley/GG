import React from 'react';
import { flamelinkInstance } from "../global.js";

// Images
import fullName from "../assets/images/full-name-logo-nopadding.svg";

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

        this.loadCMSData();
    }

    async loadCMSData() {
        await flamelinkInstance.content.get("about")
            .then(data => {
                this.setState({
                    aboutImage: data.imageLink,
                    aboutText: data.aboutText,
                    email: data.email
                });
            })
            .catch(error => console.log("something bad happened :-(\n", error));
    }

    render() {
        return (
            <div className='about-container'>
                <img className='gretchen-image' src={ this.state.aboutImage } alt='sexy-gg' />
                <div className='gg-logo-container'>
                    <img className='gg-logo' src={ fullName } alt='Gretchen Gambill' />
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
