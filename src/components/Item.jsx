import { useState } from "react";
import "./Item.css";

function Item({ name, description, price, currImg }) {
  function display() {
    if (name === "") {
      return "none";
    } else {
      return "1px solid lightgray";
    }
  }

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={openModal} className="item" style={{ border: display() }}>
        <img
          className="item-img"
          src={currImg}
          alt=""
          onLoad={handleImageLoad}
        />

        {isLoading && name !== "" && (
          <div
            className="skeleton-box"
            style={{ width: "40%", height: "100%" }}
          ></div>
        )}

        <div className="item-right">
          <h1>{name}</h1>
          {description && <p className="item-description">{description}</p>}
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

      <div>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img className="modal-img" src={currImg} alt="" />
              <div className="modal-right">
                <h1 className="modal-title">{name}</h1>
                {description && (
                  <p className="modal-description">{description}</p>
                )}
                <div className="modal-price-section">
                  <p className="modal-price">
                    {price.reg || price.dineIn ? (
                      <>{price.reg || price.dineIn}</>
                    ) : (
                      <>{price}</>
                    )}

                    {(price.lrg || price.takeaway) && (
                      <>&nbsp;|&nbsp;{price.lrg || price.takeaway}</>
                    )}
                    {price.iced && <>&nbsp;|&nbsp;{price.iced}</>}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Item;
