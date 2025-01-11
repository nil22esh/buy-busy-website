import React, { useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import Purchase from "../components/Puchase";
import { toast } from "react-toastify";

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  useEffect(() => {
    if (cartItems.length === 0) {
      toast.info("Your cart is currently empty.");
    }
  }, [cartItems]);

  return (
    <>
      <div className="cart-main-container">
        <Purchase totalPrice={totalPrice} />
        <div className="cart-page">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginTop: "5%",
              }}
            >
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>₹ {item.price}</p>
                <div>
                  <button onClick={() => decreaseQuantity(item)}>➖</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>➕</button>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="remove-button"
                >
                  Remove From Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
