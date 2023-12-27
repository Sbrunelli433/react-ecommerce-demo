import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, description } = cartItem;
  const { removeProductFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const removeProductHandler = () => removeProductFromCart(cartItem);
  const increaseQuantityHandler = () => addItemToCart(cartItem);
  const decreaseQuantitykHandler = () => removeItemFromCart(cartItem);
  

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name"> {name}</span>
      <span className="description">{description}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseQuantitykHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseQuantityHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeProductHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
