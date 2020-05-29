import React, { useState, useEffect } from "react";
import {
  getProducts,
  removeProduct,
  saveProduct,
} from "../services/productService";
import _ from "lodash";
import { useContext } from "react";
import { UserContext } from "./userProvider";

const ProductsContext = React.createContext();

const ProductsProvider = (props) => {
  const { user } = useContext(UserContext);

  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const getProductsFromServer = async (page) => {
      try {
        let { data } = await getProducts(page);

        if (data.length === 0) return;

        setProducts((prev) => _.unionWith(prev, data, _.isEqual));
      } catch (error) {
        console.log("Products : ", error);
      }
    };

    // If user exist then get product
    if (user.token.length !== 0) getProductsFromServer(page);
  }, [user, page]);

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

  const handleEditProduct = async (editedProduct) => {
    const prevState = [...products];
    let tempProducts = [...products];
    tempProducts = tempProducts.map((p) => {
      if (p.productId === editedProduct.productId) return editedProduct;
      return p;
    });

    setProducts([...tempProducts]);

    // Call server
    try {
      const response = await saveProduct(editedProduct);
      return response;
    } catch (error) {
      console.log(error);
      Toast.show({
        text: `Something wrong happened! ${error.message}`,
        buttonText: "Okay",
      });
      setProducts([...prevState]);
    }
  };

  const handleAddProduct = async (product) => {
    const prevState = [...products];
    let tempProducts = [...products];

    const tempProduct = { ...product };
    tempProduct.productId = products[products.length - 1].productId + 1;
    tempProducts.push({ ...tempProduct });

    setProducts([...tempProducts]);

    // Call server
    try {
      const response = await saveProduct(product);
      return response;
    } catch (error) {
      console.log(error);
      Toast.show({
        text: `Something wrong happened! ${error.message}`,
        buttonText: "Okay",
      });
      setProducts([...prevState]);
    }
  };

  const handlePageIncrement = () => {
    setPage(page + 1);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        findProductById,
        onRemoveProduct: handleRemoveProduct,
        onEditProduct: handleEditProduct,
        onAddProduct: handleAddProduct,
        onPageIncrement: handlePageIncrement,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
