import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import "../styles/global.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
    </div>
  );
};

export default CartItem;
