import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/global.css";

// ✅ Import images properly if using `src/assets/`
import { default as aloeImage, default as lilyImage, default as snakeImage } from "../assets/item.jpg";

// ✅ Categorized products into three groups
const products = [
  { id: 1, name: "Aloe Vera", price: 10, image: aloeImage, category: "Succulents" },
  { id: 2, name: "Snake Plant", price: 15, image: snakeImage, category: "Air Purifying" },
  { id: 3, name: "Peace Lily", price: 20, image: lilyImage, category: "Flowering Plants" },
];

// ✅ Group products by category
const groupedProducts = products.reduce((acc, product) => {
  acc[product.category] = acc[product.category] || [];
  acc[product.category].push(product);
  return acc;
}, {});

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="products-container">
      <h2>Our Houseplants</h2>
      
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="product-list">
            {items.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => dispatch(addToCart(product))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
