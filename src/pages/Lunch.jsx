import React from 'react'
import './Lunch.css'
import currImg from "../assets/Avocado Sourdough.jpg";
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png"

function Lunch() {
  const lunch = [
    {
      id: 51,
      name: "FLAME GRILLED STEAK",
      description: "Coriander potatoes, seasonal vegetables, mushroom, sauce, choice of Scotch or Eye fillet",
      price: 48,
    },
    {
      id: 52,
      name: "CRISPY LFC CHICKEN BURGER",
      description: "Slaw, pickles, harissa mayo with chips",
      price: 19,
    },
    {
      id: 53,
      name: "GRILLED WILD PRAWNS",
      description: "Muhammarra, herb salad & toasted pita bread",
      price: 32,
    },
    {
      id: 54,
      name: "ZIAD'S WAGYU BOLOGNESE",
      description: "Linguine, slow cooked wagyu bolognese, sumac, parmesan & parsley",
      price: 25,
    },
    {
      id: 55,
      name: "HEALTHY & LEAN PLATE",
      description: "Brown rice, broccoli, carrot with harissa mayo",
      price: 19,
    },
    {
      id: 55,
      name: "HEALTHY & LEAN PLATE2",
      description: "Brown rice, broccoli, carrot with harissa mayo",
      price: 19,
    },
    {
      id: 55,
      name: "HEALTHY & LEAN PLATE3",
      description: "Brown rice, broccoli, carrot with harissa mayo",
      price: 19,
    },
  ];

  return (
    <div className="drink-section">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className="section-header">Lunch</h2>
      <h3 className="section-options">11:00AM - 3:30PM</h3>
      <h3 className="section-options">Dine | Take-away</h3>
      <div className="section-category">
        {lunch.map((drink) => (
          <Item
            currImg={currImg}
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
          <p className="extra-description">+4</p>
        </div>
        <ul className="extra-item-list">
          <li className="extra-item">Avocado</li>
          <li className="extra-item">Spinach</li>
          <li className="extra-item">Grilled Halloumi</li>
          <li className="extra-item">Mushrooms</li>
          <li className="extra-item">House made beans</li>
        </ul>
      </div>
      <div className="extra-section">
        <div className="extra-top">
          <h1 className="extra-header no-show">Extra Sides</h1>
          <p className="extra-description">+6</p>
        </div>
        <ul className="extra-item-list">
          <li className="extra-item">Pulled lamb</li>
          <li className="extra-item">Beef rashers</li>
          <li className="extra-item">Bastourma</li>
          <li className="extra-item">Smoked Turkey</li>
        </ul>
      </div>
      <div className="extra-section">
        <div className="extra-top">
          <h1 className="extra-header no-show">Extra Sides</h1>
          <p className="extra-description">+9</p>
        </div>
        <ul className="extra-item-list">
          <li className="extra-item">House cured salmon</li>
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

export default Lunch