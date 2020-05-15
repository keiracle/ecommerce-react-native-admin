import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

const CartImage = ({ image }) => {
  return (
    <SCartImage>
      <SImage source={require("../../assets/bicycle.jpeg")} />
    </SCartImage>
  );
};

const SCartImage = styled.View``;

const SImage = styled.Image`
  width: 150px;
  height: 100px;
`;

export default CartImage;
