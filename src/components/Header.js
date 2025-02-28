import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({totalQuantity})</Link>
    </nav>
  );
};

export default Header;
