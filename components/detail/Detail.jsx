import React, { useState, useContext, useRef } from "react";
import { View, Text } from "react-native";
import DetailImage from "./DetailImage";
import styled from "styled-components/native";
import DetailInfo from "./DetailInfo";
import { Button } from "react-native-elements";
import { CartContext } from "../../context/cartProvider";
import AddedToCart from "./AddedToCart";

const Detail = props => {
  const { product } = props;

  const { id, name, image, price, promotionPrice } = product;

  const { cart, onAddToCart } = useContext(CartContext);

  const [isAdd, setIsAdd] = useState(false);

  const handleAddToCart = () => {
    const tempProduct = cart.find(item => item.id === id);
    if (tempProduct) {
      onAddToCart(id, tempProduct.quantity + 1);
    } else {
      onAddToCart(id, 1);
    }
    setIsAdd(true);
  };

  const handleOut = () => {
    setIsAdd(false);
  };

  return (
    <SDetail>
      <AddedToCart isAdd={isAdd} product={product} onOut={handleOut} />
      <DetailImage image={image} />
      <DetailInfo name={name} price={price} promotionPrice={promotionPrice} />
      <Button
        type="solid"
        raised
        title="Add To Cart"
        buttonStyle={{ backgroundColor: "rgb(220,9,78)" }}
        containerStyle={{ marginTop: 10 }}
        onPress={handleAddToCart}
      />
    </SDetail>
  );
};

const SDetail = styled.View`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.primaryWhite};
`;

export default Detail;
