import React, { useState } from 'react';
import './Sidemenu.css';

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={handleMenuToggle}>
        Menu
      </button>
      <ul>
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;