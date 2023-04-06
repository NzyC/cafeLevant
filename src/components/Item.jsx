import React from "react";
import "./Item.css";

function Item({ name, description, price, currImg }) {
  return (
    <div className="item">
      <img className="item-img" src={currImg} alt="" />
      <div className="item-right">
        <h1>{name}</h1>
        {description && <p className="item-description">{description}</p>}
        <div className="item-price-section">
          {price.reg || price.dineIn ? (
            <p className="item-price">{(price.reg || price.dineIn)}</p>
          ) : (
            <p className="item-price">{price}</p>
          )}

          {(price.lrg || price.takeaway) && (
            <p className="item-price">&nbsp;|&nbsp;{price.lrg || price.takeaway}</p>
          )}
          {price.iced && <p className="item-price">&nbsp;|&nbsp;{price.iced}</p>}
        </div>
      </div>
    </div>
  );
}

export default Item;
