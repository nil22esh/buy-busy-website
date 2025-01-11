import React, { useState } from "react";
import "../App.css";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

function ProductCard({ ProductId, ProductName, ProductImage, ProductPrice }) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please sign in first!");
      return;
    }
    setIsAdding(true);
    addToCart({
      id: ProductId,
      name: ProductName,
      image: ProductImage,
      price: ProductPrice,
    });
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="card">
      <div className="product-image">
        <img src={ProductImage} alt={ProductName} />
      </div>
      <div className="product-info">
        <p>{ProductName}</p>
        <p>&#8377; {ProductPrice}</p>
        <button
          className="add-btn"
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
