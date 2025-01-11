import React from "react";
import { useProducts } from "../contexts/ProductsContext";

function Sidebar() {
  const {
    setSearchTerm,
    fetchProducts,
    setPrice,
    setCategories,
    price,
    categories,
  } = useProducts();

  const updatePrice = (value) => {
    setPrice(value);
  };

  const handleCategoryChange = (category) => {
    setCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const applyFilters = () => {
    fetchProducts();
    setSearchTerm(price);
    console.log("Applied Filters:", { price, categories });
  };

  return (
    <div className="sidebar">
      <h2>Filter</h2>
      <p className="price-text">
        Price: <span>{price}</span>
      </p>
      <input
        type="range"
        className="slider"
        min="0"
        max="200000"
        value={price}
        onChange={(e) => updatePrice(e.target.value)}
      />

      <div className="category">
        <h2>Category</h2>
        {["Men's", "Women's", "Jewelry", "Electronics", "Furniture"].map(
          (category) => (
            <label key={category}>
              <input
                type="checkbox"
                onChange={() => handleCategoryChange(category)}
                checked={categories.includes(category)}
              />
              {category}
            </label>
          )
        )}
      </div>

      <button className="apply-btn" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
}

export default Sidebar;
