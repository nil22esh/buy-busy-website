import React from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "./ProductCard";
import { useProducts } from "../contexts/ProductsContext";
import { RiseLoader } from "react-spinners";

function HomePage() {
  const { products, productsLoading, setSearchTerm } = useProducts();

  return (
    <div>
      {productsLoading ? (
        <div className="spinner-container">
          <RiseLoader color="#26a4df" size={20} />
        </div>
      ) : (
        <>
          <Sidebar />
          <div className="p-container">
            <h1 className="h1">Welcome to Our Store!</h1>
            <input
              type="text"
              className="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search our products here"
            />
            <hr />
            <div className="product-card-container">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  ProductId={product.id}
                  ProductName={product.name}
                  ProductImage={product.image}
                  ProductPrice={product.price}
                  ProductCategory={product.category}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
