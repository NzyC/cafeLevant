import React, { useEffect } from "react";
import "./Dessert.css";
import currImg from "../assets/Avocado Sourdough.jpg";
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png";

function InHouseKaak() {
  const kaak = [
    {
      id: 69,
      name: "LEBANESE",
      description: "Shanklish, muhammara, tomato, onion, cucumber, tarragon, olive oil",
      price: 15,
    },
    {
      id: 70,
      name: "AUSSIE",
      description: "Egg, beef rashers, cheese & smokey BBQ sauce",
      price: 13,
    },
    {
      id: 71,
      name: "TURKISH",
      description: "Sujuk, capsicum, rocket, tomato and harissa mayo. Add Egg +3",
      price: 14,
    },
    {
      id: 72,
      name: "SYRIAN",
      description: "Toshka Syrian spiced beef, three cheeses, pickles served with ayran",
      price: 15,
    },
    {
      id: 73,
      name: "LEVANT",
      description: "Egg, tomato, bastourma, halloumi & fresh avocado",
      price: 15,
    },
    {
      id: 74,
      name: "placeholder",
      description: "",
      price: 15,
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
      <h2 className="section-header">In-House Kaak</h2>
      <div className="section-category">
      {kaak.map((lunch) =>
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

export default InHouseKaak;
