import React from "react";
import PhotoGrid from "./layout/PhotoGrid";
import LoadingImages from "./layout/LoadingImages";
import { flamelinkInstance } from "../global.js";

// Styles
import "../assets/styles/scss/home.scss";

// Images
import initials from "../assets/images/gg-logo-nopadding.svg";
import fullName from "../assets/images/full-name-logo-nopadding.svg";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [], homeText: null, };

        flamelinkInstance.content.get("home")
            .then(data => {
                this.setState({ homeText: data.homeText });
            })
            .catch(error =>
                console.log("something bad happened :-(\n", error)
            );

        // TODO: this will eventually need to be the schema
        // where you store the home images
        flamelinkInstance.content.get("images")
            .then(images => {
                this.setState({ images: images });
            })
            .catch(error => console.log("something bad happened :-(\n", error));
    }

    render() {
        return (
            <div>
                <div className="home-header-container">
                    <img src={ initials } className="initials-logo" alt="Initials Logo" />
                    <img src={ fullName } className="full-name-logo" alt="Full Name Logo" />
                </div>
                <div className="home-text-container">
                    <div className="home-text">
                        {this.state.homeText}
                    </div>
                </div>
                {/* {this.state.images.length !== 0 ?
                    <PhotoGrid images={ this.state.images } /> : <LoadingImages />} */}
            </div>
        );
    }
}

export default Home;
