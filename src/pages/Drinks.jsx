import React from "react";
import "./Drinks.css";
import currImg from "../assets/Avocado Sourdough.jpg";
import Item from "../components/Item";

function Drinks() {
  const specialtyTeas = [
    {
      id: 1,
      name: "JORDANIAN SAGE",
      description: "Shai bil maremiah. Ceylon black tea with sage",
      price: {
        takeaway: 4,
        dineIn: 9,
      },
    },
    {
      id: 2,
      name: "LEBANESE CINNAMON",
      description:
        "Shai bil Kirfi. Ceylon black tea with cinnamon and a hint of rose",
      price: {
        takeaway: 4,
        dineIn: 9,
      },
    },
    {
      id: 3,
      name: "MORROCAN MINT",
      description: "Atai bil Na'na'. Gunpowder green tea with refreshing mint ",
      price: {
        takeaway: 4,
        dineIn: 9,
      },
    },
    {
      id: 4,
      name: "IRAQI DRIED LIME",
      description:
        "Chai Numi Basra. Tisane tea featuring exotic bitter dried limes",
      price: {
        takeaway: 4,
        dineIn: 9,
      },
    },
    {
      id: 5,
      name: "SYRIAN ANISEED",
      description: "Shai bil yansoon. Ceylon black tea with aniseed",
      price: {
        takeaway: 4,
        dineIn: 9,
      },
    },
    {
      id: 6,
      name: "PERSIAN CARDAMOM",
      description:
        "Shai bil Kirfi. Ceylon black tea with cinnamon and a hint of rose",
      price: {
        takeaway: 4,
        dineIn: 9,
      },
    },
  ];

  const hotBrewed = [
    {
      id: 7,
      name: "PALESTINIAN MINT",
      description: "Shai bil Na'na'. Ceylon black tea with mint",
      price: {
        takeaway: 4,
        dineIn: 9,
        iced: 7,
      },
    },
    {
      id: 8,
      name: "EGYPTIAN HIBISCUS",
      description: "Karkady. Caffeine free hibsicus leaf",
      price: {
        takeaway: 4,
        dineIn: 9,
        iced: 7,
      },
    },
    {
      id: 9,
      name: "TURKISH APPLE",
      description:
        "Elma Chai. Caffeine free with real apple, cinnamon and cloves",
      price: {
        takeaway: 4,
        dineIn: 9,
        iced: 7,
      },
    },
  ];

  const hot = [
    {
      id: 10,
      name: "ESPRESSO",
      description: null,
      price: {
        reg: 3.5,
        lrg: 4,
      },
    },
    {
      id: 11,
      name: "MACCHIATO",
      description: null,
      price: {
        reg: 3.5,
        lrg: 4,
      },
    },
    {
      id: 12,
      name: "PICCOLO",
      description: null,
      price: 4,
    },
    {
      id: 13,
      name: "CAPPUCINO",
      description: null,
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 14,
      name: "LATTE",
      description: null,
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 15,
      name: "FLAT WHITE",
      description: null,
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 16,
      name: "LONG BLACK",
      description: null,
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 17,
      name: "CHAI",
      description: null,
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 18,
      name: "DIRTY CHAI",
      description: null,
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 19,
      name: "SPICY CHAI",
      description: null,
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 20,
      name: "BELGIAN MOCHA",
      description: null,
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 21,
      name: "BELGIAN HOT CHOCOLATE",
      description: "Lorem ipsum dolor, sit amet ",
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
  ];

  const levantineCoffee = [
    {
      id: 22,
      name: "ARABIC",
      description: "Made by the Brik on hot sand",
      price: 7,
    },
    {
      id: 23,
      name: "ARABIC WITH CARDAMOM",
      description: "Made by the Brik on hot sand",
      price: 7,
    },
    {
      id: 24,
      name: "TURKISH WITH MASTICA",
      description: "Made by the Brik on hot sand",
      price: 8,
    },
  ];

  const cold = [
    {
      id: 25,
      name: "ICED LONG BLACK",
      description: null,
      price: 5,
    },
    {
      id: 26,
      name: "ICED LATTE",
      description: null,
      price: 6,
    },
    {
      id: 27,
      name: "ICED CHOCOLATE",
      description: null,
      price: 6,
    },
  ];

  const milkshakes = [
    {
      id: 27,
      name: "RASPBERRY",
      description: null,
      price: 7.5,
    },
    {
      id: 28,
      name: "CHOCOLATE",
      description: null,
      price: 7.5,
    },
    {
      id: 29,
      name: "CARAMEL",
      description: null,
      price: 7.5,
    },
  ];

  const smoothies = [
    {
      id: 30,
      name: "ORANGE & ALMOND",
      description: "Orange, banana, almond milk, almond butter, vanilla",
      price: 9,
    },
    {
      id: 31,
      name: "COCONUT",
      description:
        "Coconut water, coconut milk, coconut sorbet, yoghurt, pineapple",
      price: 9,
    },
    {
      id: 32,
      name: "BERRY",
      description: "Mixed berries, milk, strawberry sorbet, honey, chia seeds",
      price: 9,
    },
    {
      id: 33,
      name: "MOUSSE SMOOTHIE",
      description: "Avocado, cocoa, milk, honey, chocolate",
      price: 9,
    },
  ];

  const frappe = [
    {
      id: 34,
      name: "PECAN & DATE",
      description: "Date, maple pecan, milk, molasses, whipped cream",
      price: 10,
    },
    {
      id: 35,
      name: "LOTUS",
      description:
        "Biscoff, milk, vanilla ice cream, lotus cookies, whipped cream",
      price: 10,
    },
    {
      id: 36,
      name: "COFFEE",
      description: "Espresso, milk, ice cream, whipped cream",
      price: 10,
    },
    {
      id: 37,
      name: "COOKIES & CREAM",
      description:
        "Oreo, vanilla ice cream, cacao, milk, cookies, whipped cream",
      price: 10,
    },
  ];

  const juices = [
    {
      id: 38,
      name: "CITRUS BANG",
      description: "Orange, lemon, lime, ginger",
      price: 7.5,
    },
    {
      id: 39,
      name: "WAM",
      description: "Watermelon, apple, mint",
      price: 7.5,
    },
    {
      id: 39,
      name: "GREEN MACHINE",
      description: "Celery, green apple, spinach cucumber, lemon",
      price: 7.5,
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
      <h2 className="section-header">SPECIALTY TEAS</h2>
      <h3 className="section-options">Dine | Take-away</h3>
      <div className="section-category">
        {specialtyTeas.map((drink) => (
          <Item
            currImg={currImg}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <h2 className="section-header">Hot Brewed or Over Ice</h2>
      <h3 className="section-options">Dine In | Take-away | Iced</h3>
      <div className="section-category">
        {hotBrewed.map((drink) => (
          <Item
            currImg={currImg}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <h2 className="section-header">Hot Drinks</h2>
      <h3 className="section-options">Reg | Lrg</h3>
      <div className="section-category">
        {hot.map((drink) => (
          <Item
            currImg={currImg}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <h2 className="section-header">Cold Drinks</h2>
      <h3 className="section-options">Reg | Lrg</h3>
      <div className="section-category">
        {cold.map((drink) => (
          <Item
            currImg={currImg}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <h2 className="section-header">Milkshakes</h2>
      <div className="section-category">
        {milkshakes.map((drink) => (
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
        <h1>Alternative Milks</h1>
        <ul className="extra-item-list">
          <li className="extra-item">Soy</li>
          <li className="extra-item">Almond</li>
          <li className="extra-item">Macadamia</li>
          <li className="extra-item">Oat</li>
          <li className="extra-item">Lactose Free</li>
        </ul>
      </div>
    </div>
  );
}

export default Drinks;
