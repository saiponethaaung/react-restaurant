import React from 'react';
import { Link } from 'react-router-dom';
import { NamedRoutes } from '../routes';

export default class NavComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <aside id="sidebar">
        <figure className="sidebarLogo">
          <img src="/images/logo.png" className="logo" alt="Logo" title="Logo" />
        </figure>
        <nav>
          <ul className="sidebarMenu">
            <li>
              <Link to={NamedRoutes.home.url} className="menuLink">
                <span className="menuText">Home</span>
              </Link>
            </li>
            <li>
              <a href="/service" className="menuLink">
                <span className="menuText">Service</span>
              </a>
            </li>
            <li>
              <a href="/menu" className="menuLink">
                <span className="menuText">Menu</span>
              </a>
            </li>
            <li>
              <Link to={NamedRoutes.aboutus.url} className="menuLink">
                <span className="menuText">About</span>
              </Link>
            </li >
            <li>
              <a href="/contact" className="menuLink">
                <span className="menuText">Contact</span>
              </a>
            </li >
          </ul >
        </nav >
      </aside >
    );
  }
}