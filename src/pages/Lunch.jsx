import React, { useEffect } from "react";
import "./Lunch.css";
import currImg from "../assets/Avocado Sourdough.jpg";
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png";

function Lunch() {
  const lunch = [
    {
      id: 51,
      name: "FLAME GRILLED STEAK",
      description:
        "Coriander potatoes, seasonal vegetables, mushroom, sauce, choice of Scotch or Eye fillet",
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
      description:
        "Linguine, slow cooked wagyu bolognese, sumac, parmesan & parsley",
      price: 25,
    },
    {
      id: 55,
      name: "HEALTHY & LEAN PLATE",
      description: "Brown rice, broccoli, carrot with harissa mayo",
      price: 19,
    },
    {
      id: 56,
      name: "STEAK & CHIPS KID FRIENDLY",
      description: null,
      price: 19,
    },
    {
      id: 57,
      name: "BOLOGNESE KID FRIENDLY",
      description: null,
      price: 18,
    },
    {
      id: 58,
      name: "PANCAKES KID FRIENDLY",
      description: null,
      price: 18,
    },
    {
      id: 59,
      name: "placeholder",
      description: null,
      price: 0,
    },
  ];

  const sides = [
    {
      id: 60,
      name: "ARABIC CHICKEN CAESAR",
      description:
        "Grilled chicken, baby cos lettuce, beef rashers, hard-boiled egg, crispy pita, shanklish & ranch dressing",
      price: 24,
    },
    {
      id: 61,
      name: "PEAS, KALE, LENTIL & HALLOUMI SALAD",
      description:
        "Mint, fried chickpeas, hazelnut dukkah",
      price: 22,
    },
    {
      id: 62,
      name: "LEVANT'S TABBOULEH",
      description:
        "GF options available. Parsley, tomato, spring onion, mint, cucumber, Turkish burghul and our secret house dressing",
      price: 15,
    },
    {
      id: 63,
      name: "HAND CUT CHIPS",
      description:
        "With rosemary salt, toum, harissa mayo",
      price: 10,
    },
    {
      id: 64,
      name: "SWEET POTATO CHIPS",
      description:
        "With sumac, toum aioli",
      price: 11,
    },
    {
      id: 65,
      name: "SEASONAL GREENS",
      description:
        "With almonds, lemon & olive oil",
      price: 11,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {lunch.map((lunch) =>
          lunch.name !== "placeholder" ? (
            <Item
              currImg={currImg}
              key={lunch.id}
              name={lunch.name}
              price={lunch.price}
              description={lunch.description}
            />
          ) : (
            <Item
              currImg={null}
              key={lunch.id}
              name={""}
              price={""}
              description={lunch.description}
            />
          )
        )}
        <div className="extra-section">
          <div className="extra-top">
            <h1 className="extra-header">Extra Sides</h1>
          </div>
          <ul className="extra-item-list">
            <li className="extra-item">Avocado</li>
            <p className="extra-description">+4</p>
            <li className="extra-item">Grilled chicken</li>
            <p className="extra-description">+6</p>
            <li className="extra-item">House cured salmon</li>
            <p className="extra-description">+9</p>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <h2 className="section-header">Sides & Extras</h2>
      <div className="section-category">
        {sides.map((drink) => (
          <Item
            currImg={currImg}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
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

export default Lunch;
