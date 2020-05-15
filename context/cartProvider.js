import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "./productsProvider";
import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";

const CartContext = React.createContext();

const CartProvider = props => {
  const [cart, setCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const { findProductById } = useContext(ProductsContext);

  useEffect(() => {
    const getItemFromStorage = async () => {
      let result = await getItemAsync("cart");
      if (result) setCart(JSON.parse(result));
      setCart([]);
    };

    getItemFromStorage();
  }, []);

  useEffect(() => {
    const setCartToStorage = async () => {
      await deleteItemAsync("cart");
      await setItemAsync("cart", JSON.stringify(cart));
    };

    let totalPrice = 0;
    cart.forEach(item => {
      const { price, promotionPrice, quantity } = item;
      totalPrice +=
        promotionPrice === 0 ? price * quantity : promotionPrice * quantity;
      console.log("Cart", promotionPrice);
    });

    setCartToStorage();
    setTotalPrice(totalPrice);
  }, [cart]);

  const getTotalQuantity = () => {
    let result = 0;
    cart.forEach(item => {
      result += item.quantity;
    });
    return result;
  };

  const handleAddToCart = (id, quantity = 1) => {
    const tempCart = [...cart];

    let product = tempCart.find(item => item.id === id);

    if (product) {
      product.quantity = quantity;
      setCart(tempCart);
    } else {
      product = { ...findProductById(id) };
      product.quantity = quantity;
      setCart([...tempCart, product]);
    }
  };

  const handleRemoveItem = id => {
    let tempCart = [...cart];
    tempCart = tempCart.filter(item => item.id !== id);
    setCart(tempCart);
  };

  const handleRemoveAllItem = () => {
    setCart([]);
  };

  const handleOrder = () => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        getTotalQuantity,
        onAddToCart: handleAddToCart,
        onRemoveItem: handleRemoveItem,
        onRemoveAllItem: handleRemoveAllItem,
        onOrder: handleOrder
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
