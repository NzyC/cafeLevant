import React, { useEffect } from "react";
import "./Lunch.css";
import currImg from "../assets/breakfast/Avocado Sourdough.jpg";
import roastedCauliflower from "../assets/lunch/roasted-cauliflower.jpg"
import quinoua from "../assets/lunch/grilled-quinoua.jpg"
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png";
import healthyPlate from "../assets/lunch/healthy-plate-min.jpg"
import beefBurger from "../assets/lunch/beef-burger-min.jpg"
import levantBurger from "../assets/lunch/levant-double-chicken-min.jpg"
import eggsToast from "../assets/breakfast/eggs-on-toast.jpg"
import cheeseBurger from "../assets/lunch/cheeseburger-meal.jpg"
import pancakes from "../assets/lunch/pancakes.jpg"
import seasonalGreens from "../assets/lunch/seasonal-greens.jpg"
import mushroomSauce from "../assets/lunch/mushroom-sauce.jpg"
import fries from "../assets/lunch/fries.jpg"

function Lunch() {
  const lunch = [
    {
      id: 51,
      name: "TRADITIONAL BEEF BURGER",
      description:
        "Premium beef pattie, crispy beef rashers, american cheese, lettuce, tomato, onion, beetroot, pickles, levant burger sauce, chips",
      price: 23,
      img: beefBurger
    },
    {
      id: 52,
      name: "LEVANT DOUBLE CHICKEN BURGER",
      description: "Grilled marinated chicken breast fillets, slaw, cheese, mayo, chips",
      price: 23,
      img: levantBurger
    },
    {
      id: 53,
      name: "CLASSIC CHICKEN FUNGHI",
      description: "house crumbed chicken breast, hand cut chips, chef's mushroom sauce",
      price: 26,
      img: levantBurger
    },
    {
      id: 54,
      name: "HEALTHY LEAN PLATE",
      description:
        "brown rice, seasonal vege, dill chilli mayo, ADD grilled chicken +6 grilled salmon +9",
      price: 21,
      img: healthyPlate
    },
    {
      id: 56,
      name: "GRILLED CHICKEN AND QUINOA",
      description: "marinated chicken breast, lentils, avocado, cucumber, parsley, peas, lemon, EVOO",
      price: 27,
      img: quinoua
    },
    {
      id: 57,
      name: "ROASTED CAULIFLOWER",
      description: "carrot, kale, barley, dukkah, pomegranate tarator ADD organic egg +4 grilled chicken +6 grilled salmon +9",
      price: 22,
      img: roastedCauliflower
    },
  ];

  const sides = [
    {
      id: 60,
      name: "HAND CUT STYLE CHIPS",
      description:
        "rosemary salt, toum, harissa mayo",
      price: 10,
      img: fries
    },
    {
      id: 61,
      name: "SWEET POTATO CHIPS",
      description: "sumac, toum aioli",
      price: 11,
      img: fries
    },
    {
      id: 62,
      name: "SEASONAL GREENS",
      description:
        "almonds, lemon & olive oil",
      price: 11,
      img: seasonalGreens
    },
    {
      id: 63,
      name: "MUSHROOM SAUCE",
      description: null,
      price: 4,
      img: mushroomSauce
    }
  ];

  const kids = [
    {
      id: 88,
      name: "EGG ON TOAST",
      description: "Mulloon Creek egg made your way with sourdough",
      price: 12,
      img: eggsToast
    },
    {
      id: 89,
      name: "PANCAKES",
      description: "nutella, berries, banana, ice cream, maple syrup",
      price: 12,
      img: pancakes
    },
    {
      id: 90,
      name: "CHEESEBURGER MEAL",
      description: "soft milk bun, premium beef pattie, american cheese, pickles, tomato sauce, onion, ,mustard, handcut chips",
      price: 12,
      img: cheeseBurger
    },
    {
      id: 91,
      name: "CRUMBED CHICKEN STRIPS, CHIPS",
      description: null,
      price: 12,
      img: cheeseBurger
    },
  ]

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
      {/* <h3 className="section-options">11:00AM - 3:30PM</h3> */}
      <h3 className="section-options">Dine | Take-away</h3>
      <div className="section-category">
        {lunch.map((drink) => (
          <Item
            currImg={drink.img}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>
      <h2 className="section-header">Kids</h2>
      <h3 className="section-options">Dine | Take-away</h3>
      <div className="section-category">
        {kids.map((drink) => (
          <Item
            currImg={drink.img}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>
      <h2 className="section-header">Sides & Extras</h2>
      <div className="section-category">
        {sides.map((drink) => (
          <Item
            currImg={drink.img}
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
