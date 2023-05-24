import React, { useEffect } from "react";
import "./Breakfast.css";
import { breakfast } from "../data";
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png";

function Breakfast() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="drink-section">
      <br />
      <br />
      <br />
      <h2 className="section-header">Breakfast</h2>
      {/* <h3 className="section-options">All Day 7:00AM - 3:30PM</h3> */}
      <h3 className="section-options">Dine | Take-away</h3>
      <div className="section-category">
        {breakfast.map((drink) => (
          <Item
            currImg={drink.img}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>
      <div className="extra-section">
        <div className="extra-top">
          <h1 className="extra-header">Extra Sides</h1>
        </div>
        <ul className="extra-item-list">
          <li className="extra-item">+2</li>
          <li className="extra-item">Avocado</li>
          <li className="extra-item">Levant baked beans</li>
          <li className="extra-item">Mushrooms</li>
          <li className="extra-item">Spinach</li>
          <li className="extra-item">Grilled tomato</li>
          <li className="extra-item">Labneh</li>
          <li className="extra-item">Organic egg</li>
          <li className="extra-item">Hash Brown (2)</li>
          <li className="extra-item">Tomato and cucumber</li>
          <br />
          <li className="extra-item">+6</li>
          <li className="extra-item">Beef rashers</li>
          <li className="extra-item">Basturma</li>
          <li className="extra-item">Grilled Halloumi</li>
          <li className="extra-item">Smoked salmon</li>
          <li className="extra-item">Sujuk</li>
          <li className="extra-item">Lebanese sausage</li>
          <br />
          <li className="extra-item"><strong>Bread</strong></li>
          <li className="extra-item">Plain Kaak +3</li>
          <li className="extra-item">Sourdough +2</li>
          <li className="extra-item">Pita +2</li>

        </ul>
      </div>

      <div className="footer">
        <div className="break"></div>
        <figure className="hulm-logo-wrapper">
          Powered by <img className="hulm-logo" src={HulmLogo} alt="" />
        </figure>
        <p className="hulm-logo-description">
          Convergence of culture, creativity and branding.
        </p>
        <a
          href="https://theright.fit/talent/hulm-studios"
          className="learn-more"
          target="_blank"
        >
          Learn More
        </a>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Breakfast;
