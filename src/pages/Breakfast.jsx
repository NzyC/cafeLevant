import React, { useEffect } from "react";
import "./Breakfast.css";
import avocadoSourdough from "../assets/breakfast/Avocado Sourdough.jpg";
import acaiBowl from "../assets/breakfast/acai-bowl.jpg";
import atayefPancakes from "../assets/breakfast/ashta-pancakes.jpg";
import levanteOmelete from "../assets/breakfast/levant-omelette.jpg";
import lambEggs from "../assets/breakfast/lamb-eggs.jpg"
import eggsBenny from "../assets/breakfast/eggs-bennedict.jpg"
import chilliEggs from "../assets/breakfast/chilli-eggs.jpg"
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png";
import eggsOnToast from "../assets/breakfast/eggs-on-toast.jpg"
import sultanBoard from "../assets/breakfast/sultan-board.jpg"
import cheeseCroissant from "../assets/breakfast/cheese-croissant.jpg"
import fruitToast from "../assets/breakfast/fruit-toast.jpg"

function Breakfast() {
  const breakfast = [
    {
      id: 41,
      name: "EGGS BENEDICT",
      description:
        "Mulloon Creek organic poached egg, spinach, smoked salmon, sourdough, hollandaise sauce",
      price: 24,
      img: eggsBenny
    },
    {
      id: 42,
      name: "ASHTA ATAYEF PANCAKES",
      description:
        "Levantine clotted cream, caramelised banana, fresh berries, maple syrup served with pistachio ice cream",
      price: 22,
      img: atayefPancakes,
    },
    {
      id: 43,
      name: "ORGANIC ACAI BOWL",
      description:
        "Strawberries, banana, granola. Add Watermelon, Peanut butter, Nutella, Biscoff, Honey, GF Granola +2",
      price: 15,
      img: acaiBowl,
    },
    {
      id: 44,
      name: "AVOCADO SOURDOUGH",
      description:
        "Mulloon Creek organic poached egg, Persian feta, pickled fennel, radish",
      price: 21,
      img: avocadoSourdough,
    },
    {
      id: 45,
      name: "LAMB EGGS",
      description:
        "2 Mulloon Creek organic fried eggs, lamb kafta, sumac onion, roasted capsicum with labneh, tomato, cucumber, pita bread",
      price: 24,
      img: lambEggs
    },
    {
      id: 46,
      name: "CHILLI MUSHROOMS",
      description:
        "2 Mulloon Creek organic poached eggs, tea smoked labneh, burnt butter, dukkah",
      price: 24,
      img: chilliEggs
    },
    {
      id: 47,
      name: "ORGANIC EGGS & TOAST",
      description:
        "eggs your way (fried/scrambled/ poached) served with sourdough, add extra sides to make your ultimate big brekky",
      price: 15,
      img: eggsOnToast
    },
    {
      id: 48,
      name: "LEVANT OMELETTE",
      description:
        "Organic eggs, slow cooked wild mushroom, mozzarella, spinach with beef rashers & sourdough",
      price: 24,
      img: levanteOmelete,
    },
    {
      id: 50,
      name: "THE SULTAN'S BREAKFAST (2 PEOPLE)",
      description:
        "Sujuk, scrambled/fried eggs, labneh, house made beans, grilled halloumi, tomato, cucumber, za'atar, our pickles & olives, sourdough, warm kaāk with a pot of tea",
      price: 64,
      img: sultanBoard
    },
    {
      id: 49,
      name: "FRUIT TOAST",
      description: null,
      price: 6,
      img: fruitToast
    },
    {
      id: 85,
      name: "CHEESE KAAK TOASTIE (LEBANESE STYLE PITA POCKET)",
      description: null,
      price: 7,
      img: avocadoSourdough
    },
    {
      id: 86,
      name: "BASTURMA + CHEESE CROISSANT",
      description: null,
      price: 9,
      img: cheeseCroissant
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
