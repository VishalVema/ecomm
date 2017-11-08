"use strict";
import React from 'react';
import { Link } from 'react-router-dom'
import './styles/header.scss'

class Header extends React.Component {
  render () {
    const logoName = this.props.logo;

    return (

        <div className="valign-wrapper">

          <nav>
            <div className="nav-wrapper  yellow darken-2">
              <a href="/" className="brand-logo">{logoName}</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="list">Hello</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="list">Hello</a></li>

              </ul>
            </div>
          </nav>
        </div>

    );
  }
}

export {Header};
