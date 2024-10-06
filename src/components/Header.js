import React from 'react';
import '../common/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* Replace the text with the logo */}
        <img src="/logo-withoutbg.png" alt="Gopalachari Gold Shop Logo" className="logo" />
        <h1>Gopalachari Gold Shop</h1>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li>Home</li>
            <li>Ornaments</li>
            <li>Pricing</li>
            <li>Offers</li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
