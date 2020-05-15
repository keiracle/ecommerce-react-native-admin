import React, { useState, useEffect } from "react";

const ProductsContext = React.createContext();

const ProductsProvider = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // async function getProductsFromServer() {
    //   let { data } = await getProducts();
    //   console.log("Fetch products from server");
    //   setProducts(data);
    // }

    // getProductsFromServer();
    setProducts(fakeProducts);
  }, []);

  const findProductById = id => {
    return products.find(product => product.id === id);
  };

  return (
    <ProductsContext.Provider value={{ products, findProductById }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

const Consumer = ProductsContext.Consumer;

export { ProductsContext, ProductsProvider };

const fakeProducts = [
  {
    id: 1,
    name: "Bike",
    category: "bike",
    price: 1000000,
    promotionPrice: 500000,
    image: "",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim!",
    viewcount: 0
  },
  {
    id: 2,
    name: "Bike",
    category: "bike",
    price: 10000,
    promotionPrice: 5000,
    image: "",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim!",
    viewcount: 0
  },
  {
    id: 3,
    name: "Bike",
    category: "bike",
    price: 10000,
    promotionPrice: 5000,
    image: "",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim!",
    viewcount: 0
  },
  {
    id: 4,
    name: "Bike",
    category: "bike",
    price: 10000,
    promotionPrice: 5000,
    image: "",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim!",
    viewcount: 0
  },
  {
    id: 5,
    name: "Bike",
    category: "bike",
    price: 10000,
    promotionPrice: 5000,
    image: "",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim!",
    viewcount: 0
  },
  {
    id: 6,
    name: "Bike",
    category: "bike",
    price: 10000,
    promotionPrice: 5000,
    image: "",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim!",
    viewcount: 0
  },
  {
    id: 7,
    name: "Bike",
    category: "bike",
    price: 10000,
    promotionPrice: 5000,
    image: "",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim!",
    viewcount: 0
  }
];
