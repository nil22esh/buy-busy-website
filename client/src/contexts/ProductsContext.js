import { collection, getDocs } from "firebase/firestore";
import React, { createContext, useState, useEffect, useContext } from "react";
import { db } from "../services/firebaseConfig";

export const ProductsContext = createContext();

export function useProducts() {
  return useContext(ProductsContext);
}

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(150000);

  const fetchProducts = async () => {
    setProductsLoading(true);
    setProductsError(false);
    try {
      const productsData = await getDocs(collection(db, "products"));
      const productsList = productsData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    } catch (error) {
      setProductsError(true);
    } finally {
      setProductsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(
      (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by name
    )
    .filter(
      (product) =>
        product.price <= Number(price) &&
        (categories.length === 0 || categories.includes(product.category))
    );

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        fetchProducts,
        productsLoading,
        productsError,
        searchTerm,
        setSearchTerm,
        categories,
        setCategories,
        price,
        setPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
