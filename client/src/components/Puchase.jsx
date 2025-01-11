import React from "react";
import "../App.css";
import { useCart } from "../contexts/CartContext"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Purchase = ({ totalPrice }) => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate(); // Initialize the navigate function

  const handleMakeOrder = () => {
    const order = {
      date: new Date().toISOString(),
      items: cartItems.map((item) => ({
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        totalPrice: item.price * item.quantity,
      })),
      totalPrice: cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    clearCart(); // Clear the cart after making the order

    // Navigate to the Orders page
    navigate("/orders");
  };

  return (
    <div className="purchase-container">
      <div className="total-price">
        <h2>Total Price:-</h2>
        <p>&#8377; {totalPrice}/-</p>
      </div>
      <button className="make-order-btn" onClick={handleMakeOrder}>
        Make Order
      </button>
    </div>
  );
};

export default Purchase;
