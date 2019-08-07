import React from "react";
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
            </div>
        );
    }
}

export default Home;
