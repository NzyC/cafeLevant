import "./Item.css";

function Item({ name, description, price, currImg }) {

  function display() {
    if ((name === "")) {
      return "none";
    } else {
      return '1px solid lightgray'
    }
  }

  return (
    <div className="item" style={{ border: display()}}>
      <img className="item-img" src={currImg} alt="" />
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
  );
}

export default Item;
