import React from 'react';
import { NavLink } from 'react-router-dom';

// import style assets here
import '../../assets/styles/scss/header.scss';

class Header extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <div className="header-container">
                    <div className="nav-elt">
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-elt">
                        <NavLink to='/about'>
                            About
                        </NavLink>
                    </div>
                    <div className="nav-elt">
                        <NavLink to='/graphic-design'>
                            Graphic Design
                        </NavLink>
                    </div>
                    <div className="nav-elt">
                        <NavLink to='/fine-arts'>
                            Fine Arts
                        </NavLink>
                    </div>
                    <div className="nav-elt">
                        <a href="https://www.instagram.com/free2be_g/">
                            Instagram
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Header;
