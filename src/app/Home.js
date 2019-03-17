import React from 'react';

// import style assets here
import '../assets/styles/scss/home.scss';

// import image assets here
import monoprintCrowd from '../assets/images/monoprint-crowd.JPG';

// create photo list mirrored off the code below

// think about creating some sort of error telling the user to refresh
// page if the photos don't load or don't load properly

const Home = () => (
    <div className="home-container">
        <div className="grid">
            <div className="cell">
                <img src={monoprintCrowd} className='responsive-image lozad' alt='greendetail' />
                <div className="subtitle">
                    Boaties
                </div>
            </div>
            <div className="cell">
                <img src={monoprintCrowd} className="responsive-image lozad" />
                <div className="subtitle">
                    Glass Triangle
                </div>
            </div>
            <div className="cell">
                <img src={monoprintCrowd} className="responsive-image lozad" />
                <div className="subtitle">
                    Linez m8
                </div>
            </div>
            <div className="cell">
                <img src={monoprintCrowd} className="responsive-image lozad" />
                <div className="subtitle">
                    Imposing houses
                </div>
            </div>
            <div className="cell">
                <img src={monoprintCrowd} className="responsive-image lozad" />
                <div className="subtitle">
                    Mirror
                </div>
            </div>
        </div>
    </div>
);

export default Home;
