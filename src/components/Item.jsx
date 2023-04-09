import React, { useState } from "react";
import "./Item.css";

function Item({ name, description, price, currImg }) {
  return (
    <div className="item">
      <img className="item-img" src={currImg} alt="" />
      <div className="item-right">
        <h1>{name.length > 20 ? name.slice(0, 20) + "..." : name}</h1>
        {description &&
          // (description.split("").length >= 40 ? (
          //   <p className="item-description">
          //     {description.split("").slice(0, 40)}...
          //   </p>
          // ) : (
            <p className="item-description">{description}</p>
          // ))}
        }
        <div className="item-price-section">
          {price.reg || price.dineIn ? (
            <p className="item-price">{price.reg || price.dineIn}</p>
          ) : (
            <p className="item-price">{price}</p>
          )}

          {(price.lrg || price.takeaway) && (
            <p className="item-price">
              &nbsp;|&nbsp;{price.lrg || price.takeaway}
            </p>
          )}
          {price.iced && (
            <p className="item-price">&nbsp;|&nbsp;{price.iced}</p>
          )}
        </div>
      </div>
      <div className="pop-up"></div>
    </div>
  );
}

export default Item;
