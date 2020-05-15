import React from "react";
import styled from "styled-components/native";
import CartImage from "./CartImage";
import CartInfo from "./CartInfo";
import _ from "lodash";

const CartItem = props => {
  const { product, mini = false, ...rest } = props;

  const { id, name, price, promotionPrice, image } = product;

  if (_.isEmpty(product)) return <SCartItem></SCartItem>;

  return (
    <SCartItem {...rest}>
      <CartImage />
      <CartInfo product={product} mini={mini} />
    </SCartItem>
  );
};

const SCartItem = styled.View`
  width: 100%;
  flex-direction: row;
  max-height: 300px;
  align-items: flex-start;
  justify-content: center;
  margin: 1px 0;
  background-color: ${({ theme }) => theme.color.primaryWhite};
`;

export default CartItem;
