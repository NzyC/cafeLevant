import React, { useEffect } from "react";
import "./Dessert.css";
import currImg from "../assets/breakfast/Avocado Sourdough.jpg";
import Item from "../components/Item";
import HulmLogo from "../assets/hulmStudionsLogo.png";

function Dessert() {
  const dessert = [
    {
      id: 66,
      name: "ARABIC TIRAMISU",
      description: "Mascarpone, coco nibs, brewed cardamom coffee",
      price: 18,
    },
    {
      id: 67,
      name: "LEVANT STICKY DATE SUNDAY",
      description: "Vanilla gelato, caramelised pecan, date, date syrup cake",
      price: 15,
    },
    {
      id: 68,
      name: "GELATO",
      description: "Vanilla, pistachio, rose water, chocolate cinnamon, mango",
      price: 5,
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
      <h2 className="section-header">Dessert</h2>
      <h3 className="section-options">
        Selection of cakes and pastries available at display
      </h3>
      <div className="section-category">
        {dessert.map((drink) => (
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

export default Dessert;
