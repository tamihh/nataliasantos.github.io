import React from 'react'
import { Link } from 'react-router';

import 'sass/helpers/variables.scss'
import 'sass/components/header.scss'

class Header extends React.Component {

  renderNavItem() {
    let navItemName;

    switch(window.location.pathname) {
    case "/about":
        navItemName = <Link to="/" className="nav-item">Work</Link>;
        break;
    case "/":
        navItemName = <Link to="/about" className="nav-item">About</Link>;
        break;
    default:
        navItemName = <Link to="/" className="nav-item">Back</Link>;

    }

    return navItemName;
  }

  render() {
    return (
        <header className="header">
            <Link to="/" className="logo">Natalia Santos <span className="logo-subtitle">Art Director</span></Link> 
            <nav className="nav">
                {this.renderNavItem()}
            </nav>
        </header>
    );
  }
}

export default Header
