import React from 'react';
import { NavLink } from 'react-router-dom';
import '../common/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo-withoutbg.png" alt="Gopalachari Gold Shop Logo" className="logo" />
        <h1>Gopalachari Gold Shop</h1>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" className="nav-link" activeClassName="active">
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className="nav-link" activeClassName="active">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/offers" className="nav-link" activeClassName="active">
                Offers
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
