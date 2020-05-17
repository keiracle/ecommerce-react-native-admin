import React, { useState, useEffect } from "react";
import { getProducts, removeProduct } from "../services/productService";

const ProductsContext = React.createContext();

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsFromServer = async () => {
      try {
        let { data } = await getProducts();
        setProducts(data);
        // console.log(data);
      } catch (error) {
        console.log("Products : ", error);
      }
    };

    getProductsFromServer();
  }, []);

  const findProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  // Optimisstic update
  const handleRemoveProduct = async (id) => {
    const prevState = [...products];
    let tempProducts = [...products];
    tempProducts = tempProducts.filter((product) => product.productId !== id);

    setProducts([...tempProducts]);

    // Call server
    // const response = await removeProduct();
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        findProductById,
        onRemoveProduct: handleRemoveProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
