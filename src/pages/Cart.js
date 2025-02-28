import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
} from "../redux/cartSlice";
import "../styles/global.css";

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
