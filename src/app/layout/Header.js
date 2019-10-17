import React from "react";
import { NavLink } from "react-router-dom";

// import style assets here
import "../../assets/styles/scss/header.scss";

class Header extends React.Component {
    render() {
        return (
            <nav className="nav">
                <div className="header-container">
                    <div className="nav-elt">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-elt">
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </div>
                    <div className="nav-elt">
                        <NavLink to="/graphicdesign">
                            Graphic Design
                        </NavLink>
                    </div>
                    <div className="nav-elt">
                        <NavLink to="/fineart">
                            Fine Art
                        </NavLink>
                    </div>
                    <div className="nav-elt">
                        <NavLink to="/tattoos">
                            Tattoos
                        </NavLink>
                    </div>
                    {/* <div className="nav-elt">
                        <a target="_blank" href="https://www.etsy.com/shop/GAMBILLART" rel="noopener noreferrer">
                            Etsy
                        </a>
                    </div> */}
                </div>
            </nav>
        )
    }
}
export default Header;
