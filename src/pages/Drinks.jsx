import React, { useEffect } from "react";
import "./Drinks.css";
import { specialtyTeas } from "../data";
import { hotBrewed } from "../data";
import { hot } from "../data"
import { postDecaf } from "../data"
import { levantCocktails } from "../data"
import { levantineCoffee } from "../data"
import { milkshakes } from "../data"
import { cold } from "../data"
import { shots } from "../data"
import { smoothies } from "../data"
import { frappe } from "../data"
import { juices } from "../data"
import { softDrinks } from "../data"
import { drinkCategories } from "../data"
import teas from "../assets/drinks/tea.jpg";
import coffee from "../assets/drinks/coffee.jpg";
import levantineCoffeeImg from "../assets/drinks/levantineCoffee.jpg";
import coldbrew from "../assets/drinks/coldbrew.jpg";
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png";

function Drinks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="drink-section">
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
