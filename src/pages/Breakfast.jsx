import React from 'react'
import './Breakfast.css'
import currImg from "../assets/Avocado Sourdough.jpg";
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png"

function Breakfast() {
  const breakfast = [
    {
      id: 41,
      name: "ROSE WATER CHIA PUDDING & HOUSE GRANOLA",
      description: "Jersey milk, mango, strawberries, coconut served with labneh honey ice cream, GF option available",
      price: 16,
    },
    {
      id: 42,
      name: "ASHTA ATAYEF PANCAKES",
      description: "Levantine clotted cream, caramelised banana, fresh berries, maple syrup served with pistachio ice cream",
      price: 22,
    },
    {
      id: 43,
      name: "ORGANIC ACAI BOWL",
      description: "Strawberries, banana, granola, toasted coconut. Add Watermelon, Peanut butter, Nutella, Biscoff, Honey, GF Granola",
      price: 14,
    },
    {
      id: 44,
      name: "AVOCADO SOURDOUGH",
      description: "63C organic egg, Persian feta, pickled fennel, radish, lemon, thyme, pomegranate",
      price: 16,
    },
    {
      id: 45,
      name: "ANCIENT GRAINS MJADARA BOWL",
      description: "Pulled lamb, 63C organic egg, avocado, fermented pickles, mint, caramelised onion, toasted almonds, hollandaise",
      price: 26,
    },
    {
      id: 46,
      name: "KAFTA & HALLOUMI ARAYES SAJ ROLLS",
      description: "Charred capsicum, tarator, coriander topped with tomato & onion salsa",
      price: 28,
    },
    {
      id: 47,
      name: "PASTURED ORGANIC EGGS & TOAST",
      description: "Eggs your way (fried/scrambled/ poached) served with sourdough",
      price: 13,
    },
    {
      id: 48,
      name: "LEVANT OMELETTE",
      description: "Organic eggs, slow cooked wild mushroom, mozzarella, spinach with beef rashers & sourdough",
      price: 24,
    },
    {
      id: 49,
      name: "PAN FRIED BUTTER PASTRY WITH SUJUK & HOUSE-MADE BEANS",
      description: "In house special butter pan fried pastry, tomato, sujuk, mint, peas, rocket & fetta",
      price: 21,
    },
    {
      id: 50,
      name: "THE SULTAN'S BREAKFAST (2 PEOPLE)",
      description: "Sujuk, scrambled/fried eggs, labneh, house made beans, grilled halloumi, tomato, cucumber, za'atar, our pickles & olives, sourdough, warm kaāk with a pot of tea",
      price: 56,
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
      <h2 className="section-header">Breakfast</h2>
      <h3 className="section-options">Dine | Take-away</h3>
      <div className="section-category">
        {breakfast.map((drink) => (
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

export default Breakfast