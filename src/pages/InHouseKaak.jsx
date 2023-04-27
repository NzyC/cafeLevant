import React, { useEffect } from "react";
import "./Dessert.css";
import currImg from "../assets/breakfast/Avocado Sourdough.jpg";
import lebKaak from "../assets/in-house-kaak/lebanese-kaak.jpg"
import levantKaak from "../assets/in-house-kaak/levant-kaak.jpg"
import aussieKaak from "../assets/in-house-kaak/aussie-kaak.jpg"
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png";

function InHouseKaak() {
  const kaak = [
    {
      id: 69,
      name: "LEBANESE",
      description: "Shanklish, muhammara, tomato, onion, cucumber, tarragon, olive oil",
      price: 15,
      img: lebKaak
    },
    {
      id: 70,
      name: "AUSSIE",
      description: "Mulloon Creek organic egg, beef rashers, cheese & smokey BBQ sauce",
      price: 16,
      img: aussieKaak
    },
    {
      id: 71,
      name: "TURKISH",
      description: "Sujuk, capsicum, rocket, tomato and harissa. Add Egg +4",
      price: 16,
      img: lebKaak
    },
    {
      id: 73,
      name: "LEVANT",
      description: "Mulloon Creek organic egg, tomato, bastourma, halloumi & fresh avocado",
      price: 16,
      img: levantKaak
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
              currImg={lunch.img}
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
