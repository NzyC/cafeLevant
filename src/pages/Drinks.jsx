import React, { useEffect } from "react";
import "./Drinks.css";
import teas from "../assets/drinks/tea.jpg";
import coffee from "../assets/drinks/coffee.jpg";
import levantineCoffeeImg from "../assets/drinks/levantineCoffee.jpg";
import coldbrew from "../assets/drinks/coldbrew.jpg";
import caramelLotus from "../assets/drinks/Caramel Lotus.jpg";
import coffeeFrappe from "../assets/drinks/Coffee Frappe.jpg";
import cookiesAndCream from "../assets/drinks/Cookies and Cream.jpg";
import milkshakesImg from "../assets/drinks/milkshakes.jpg";
import citrusBangandGreenMachine from "../assets/drinks/citrusbangandgreenmachine.jpg";
import tempCitrusBang from "../assets/drinks/temp citrus bang.jpg";
import berrySmoothie from "../assets/drinks/berry-smoothie.jpg";
import WAM from "../assets/drinks/WAM juice.jpg";
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png";
import tumericShot from "../assets/drinks/tumeric-shot.jpg";

function Drinks() {
  const specialtyTeas = [
    {
      id: 74,
      name: "AUSSIE CUPPA",
      description: "simply black tea.",
      price: {
        takeaway: 4,
        dineIn: 9,
      },
    },
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
        "Chayi ba Hel. Darjeeling, Earl grey and Ceylon black teas, spiced with aromatic cardamom and rose",
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
      description: "house blend, single origin +0.5",
      price: 4.5,
    },
    {
      id: 11,
      name: "MACCHIATO",
      description: "house blend, single origin +0.5",
      price: 4.5,
    },
    {
      id: 12,
      name: "PICCOLO",
      description: "house blend, single origin +0.5",
      price: 4.5,
    },
    {
      id: 13,
      name: "CAPPUCINO",
      description: "house blend, single origin +0.5",
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 14,
      name: "LATTE",
      description: "house blend, single origin +0.5",
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 15,
      name: "FLAT WHITE",
      description: "house blend, single origin +0.5",
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 16,
      name: "LONG BLACK",
      description: "house blend, single origin +0.5",
      price: {
        reg: 4,
        lrg: 4.5,
      },
    },
    {
      id: 17,
      name: "BELGIAN MOCHA",
      description: null,
      price: {
        reg: 5.5,
        lrg: 6,
      },
    },
    {
      id: 18,
      name: "BELGIAN HOT CHOCOLATE",
      description: null,
      price: {
        reg: 5.5,
        lrg: 6,
      },
    },
    {
      id: 19,
      name: "BELGIAN WHITE CHOCOLATE",
      description: null,
      price: {
        reg: 5.5,
        lrg: 6,
      },
    },
    {
      id: 20,
      name: "CHAI ADDICT CHAI LATTE",
      description: null,
      price: {
        reg: 5.5,
        lrg: 6,
      },
    },
    {
      id: 21,
      name: "MATCHA LATTE",
      description: null,
      price: {
        reg: 5.5,
        lrg: 6,
      },
    },
    {
      id: 77,
      name: "TURMERIC LATTE",
      description: null,
      price: {
        reg: 5.5,
        lrg: 6,
      },
    },
    {
      id: 78,
      name: "DIRTY CHAI",
      description: null,
      price: {
        reg: 5.5,
        lrg: 6,
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
      name: "LEVANT WITH MASTICA",
      description: "Made by the Brik on hot sand",
      price: 7,
    },
  ];

  const cold = [
    {
      id: 25,
      name: "ICED LONG BLACK",
      description: null,
      price: 7,
    },
    {
      id: 26,
      name: "ICED LATTE",
      description: null,
      price: 7,
    },
    {
      id: 27,
      name: "ICED CHOCOLATE",
      description: null,
      price: 7,
    },
    {
      id: 79,
      name: "ICED CHAI",
      description: null,
      price: 7,
    },
    {
      id: 80,
      name: "ICED MATCHA",
      description: null,
      price: 7,
    },
  ];

  const milkshakes = [
    {
      id: 27,
      name: "RASPBERRY",
      description: null,
      price: {
        reg: 8,
        lrg: 6,
      },
    },
    {
      id: 28,
      name: "CHOCOLATE",
      description: null,
      price: {
        reg: 8,
        lrg: 6,
      },
    },
    {
      id: 29,
      name: "CARAMEL",
      description: null,
      price: {
        reg: 8,
        lrg: 6,
      },
    },
  ];

  const smoothies = [
    {
      id: 30,
      name: "BANANA",
      description: "milk, banana, honey",
      price: 10,
    },
    {
      id: 31,
      name: "MANGO",
      description: "milk, mango, honey",
      price: 10,
    },
    {
      id: 32,
      name: "BERRY",
      description: "milk, mixed berries, banana, yoghurt, honey",
      price: 10,
    },
    {
      id: 33,
      name: "AVACADO",
      description:
        "milk, avocado, greens, raw cacoa, pics peanut butter, honey",
      price: 10,
    },
    {
      id: 81,
      name: "ACAI",
      description: "organic acai, guarana syrup, banana, cane sugar",
      price: 10,
    },
  ];

  const frappe = [
    {
      id: 34,
      name: "LEVANT DATE",
      description:
        "Milk, dates, date molasses, icecream, pecans, whipped cream",
      price: 10,
      img: cookiesAndCream,
    },
    {
      id: 35,
      name: "CARAMEL LOTUS",
      description: "Milk, bisco, ice cream, caramel, banana, whipped cream",
      price: 10,
      img: caramelLotus,
    },
    {
      id: 36,
      name: "COFFEE",
      description: "Milk, espresso, ice cream, whipped cream",
      price: 10,
      img: coffeeFrappe,
    },
    {
      id: 37,
      name: "COOKIES & CREAM",
      description: "Milk, Oreo cookies, vanilla ice cream, banana, cream",
      price: 10,
      img: cookiesAndCream,
    },
  ];

  const juices = [
    {
      id: 38,
      name: "CITRUS BANG",
      description: "Orange, lemon, lime, ginger",
      price: 7.5,
      img: tempCitrusBang,
    },
    {
      id: 39,
      name: "WAM",
      description: "Watermelon, apple, mint",
      price: 7.5,
      img: WAM,
    },
    {
      id: 40,
      name: "GREEN MACHINE",
      description: "Celery, green apple, spinach, cucumber, lemon",
      price: 7.5,
      img: citrusBangandGreenMachine,
    },
  ];

  const shots = [
    {
      id: 82,
      name: "TURMERIC SHOT",
      description:
        "tumeric, ginger, raw apple cider vinegar, lemon, black pepper",
      price: 8,
      img: tumericShot,
    },
    {
      id: 83,
      name: "GINGER SHOT",
      description: "ginger, lemon",
      price: 8,
      img: tumericShot,
    },
  ];

  const postDecaf = [
    {
      id: 84,
      name: "COLD DRIP",
      description: "takeaway +.1",
      price: 7,
      img: null,
    },
    {
      id: 85,
      name: "BATCH BREW",
      description: "upgrade to refillable +3.5",
      price: 6.5,
      img: null,
    },
  ];

  const levantCocktails = [
    {
      id: 86,
      name: "LEMON MINT CRUSH",
      description: "fresh lemon, mint, raw sugar syrup",
      price: 10,
      img: tempCitrusBang,
    },
    {
      id: 87,
      name: "RASPBERRY POMEGRANATE CRUSH",
      description: "pomegranate juice, raspberry syrup, lime",
      price: 10,
      img: tempCitrusBang,
    },
    {
      id: 88,
      name: "DIRTY V",
      description: "jalapeno salt rimmed, lime, V",
      price: 10,
      img: tempCitrusBang,
    },
  ];

  const softDrinks = [
    {
      id: 89,
      name: "FIJI WATER BOTTLE",
      description: null,
      price: 4.5,
      img: tempCitrusBang,
    },
    {
      id: 90,
      name: "SAN PELEGRINO SPARKLING",
      description: null,
      price: 4.5,
      img: tempCitrusBang,
    },
    {
      id: 91,
      name: "COKE",
      description: null,
      price: 4.5,
      img: tempCitrusBang,
    },
    {
      id: 90,
      name: "COKE NO SUGAR",
      description: null,
      price: 4.5,
      img: tempCitrusBang,
    },
    {
      id: 90,
      name: "V",
      description: null,
      price: 4.5,
      img: tempCitrusBang,
    },
    {
      id: 90,
      name: "V NO SUGAR",
      description: null,
      price: 4.5,
      img: tempCitrusBang,
    },
    {
      id: 90,
      name: "PUREZZA SPARKLING 750ML (DINE IN ONLY)",
      description: null,
      price: 5,
      img: tempCitrusBang,
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
      <h2 className="section-header">Specialty Teas</h2>
      <h3 className="section-options">Dine | Take-away</h3>
      <div className="section-category">
        {specialtyTeas.map((drink) => (
          <Item
            currImg={teas}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description.replace(/\n/g, <br />)}
          />
        ))}
      </div>

      <h2 className="section-header">Hot Brewed or Over Ice</h2>
      <h3 className="section-options">Dine In | Take-away | Iced</h3>
      <div className="section-category">
        {hotBrewed.map((drink) => (
          <Item
            currImg={teas}
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
            currImg={coffee}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <div className="extra-top">
        <h1 className="extra-header">Decaf</h1>
        <p className="extra-description">+0.5</p>
      </div>

      <div className="section-category">
        {postDecaf.map((drink) => (
          <Item
            currImg={coffee}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <div className="extra-top">
        <p className="extra-description">add cold sweetened froth +0.5</p>
      </div>

      <h2 className="section-header">Levantine Coffee</h2>
      <div className="section-category">
        {levantineCoffee.map((drink) => (
          <Item
            currImg={levantineCoffeeImg}
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
            currImg={coldbrew}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <h2 className="section-header">Milkshakes</h2>
      <h3 className="section-options">Reg | Kids</h3>
      <div className="section-category">
        {milkshakes.map((drink) => (
          <Item
            currImg={milkshakesImg}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <div className="extra-section">
        <div className="extra-top">
          <h1 className="extra-header">Alternative Milks</h1>
          <p className="extra-description">+0.5</p>
        </div>
        <ul className="extra-item-list">
          <li className="extra-item">Soy</li>
          <li className="extra-item">Almond</li>
          <li className="extra-item">Macadamia</li>
          <li className="extra-item">Oat</li>
          <li className="extra-item">Lactose Free</li>
        </ul>
      </div>

      <h2 className="section-header">Shots</h2>
      <div className="section-category">
        {shots.map((drink) => (
          <Item
            currImg={drink.img}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <h2 className="section-header">Smoothies</h2>
      <div className="section-category">
        {smoothies.map((drink) => (
          <Item
            currImg={berrySmoothie}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <div className="extra-section">
        <div className="extra-top">
          <h1 className="extra-header">Extras</h1>
          <p className="extra-description">+2</p>
        </div>
        <ul className="extra-item-list">
          <li className="extra-item">Oats & Chia</li>
          <li className="extra-item">Protein Powder</li>
        </ul>
      </div>

      <h2 className="section-header">Frappe's</h2>
      <div className="section-category">
        {frappe.map((drink) => (
          <Item
            currImg={drink.img}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <h2 className="section-header">Juices</h2>
      <div className="section-category">
        {juices.map((drink) => (
          <Item
            currImg={drink.img}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <h2 className="section-header">Levant Cocktails</h2>
      <div className="section-category">
        {levantCocktails.map((drink) => (
          <Item
            currImg={drink.img}
            key={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>

      <h2 className="section-header">Soft Drinks</h2>
      <div className="section-category">
        {softDrinks.map((drink) => (
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

export default Drinks;
