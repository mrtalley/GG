import React from 'react';

// import style assets here
import '../assets/styles/scss/home.scss';

// import image assets here
import monoprintCrowd from '../assets/images/monoprint-crowd.JPG';

const Home = () => (
    <div class="home-container">
        <div class="grid">
            <div class="cell">
                <img data-src={monoprintCrowd} class='responsive-image lozad' alt='greendetail' />
                <div class="subtitle">
                    Boaties
                </div>
            </div>
            <div class="cell">
                <img data-src={monoprintCrowd} class="responsive-image lozad" />
                <div class="subtitle">
                    Glass Triangle
                </div>
            </div>
            <div class="cell">
                <img data-src={monoprintCrowd} class="responsive-image lozad" />
                <div class="subtitle">
                    Linez m8
                </div>
            </div>
            <div class="cell">
                <img data-src={monoprintCrowd} class="responsive-image lozad" />
                <div class="subtitle">
                    Imposing houses
                </div>
            </div>
            <div class="cell">
                <img data-src={monoprintCrowd} class="responsive-image lozad" />
                <div class="subtitle">
                    Mirror
                </div>
            </div>
        </div>
    </div>
);

export default Home;
