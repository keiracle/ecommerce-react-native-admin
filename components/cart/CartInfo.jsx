import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/EvilIcons";
import { numberWithDot } from "../../utilities";
import NumericInput from "react-native-numeric-input";
import { CartContext } from "../../context/cartProvider";
import { Text } from "react-native";
import { Button } from "react-native-elements";

const CartInfo = ({ product, mini }) => {
  const { id, name, price, promotionPrice } = product;

  const [quantity, setQuantity] = useState(product.quantity);

  const { onAddToCart, onRemoveItem } = useContext(CartContext);

  const handleQuantityChange = value => {
    setQuantity(value);
    onAddToCart(id, value);
  };

  return (
    <SCartInfo>
      <SWrapperName>
        <SName ellipsizeMode="middle" numberOfLines={2}>
          {name}
        </SName>
        {!mini && (
          <Button
            type="outline"
            icon={<SIcon name="close" size={15} />}
            containerStyle={{ marginRight: 10 }}
            onPress={() => onRemoveItem(id)}
            raised
          />
        )}
      </SWrapperName>
      <SPrice>
        {numberWithDot(promotionPrice !== 0 ? promotionPrice : price)} &#273;
      </SPrice>
      {promotionPrice !== 0 && (
        <SOldPrice>{numberWithDot(price)} &#273;</SOldPrice>
      )}
      {!mini && (
        <NumericInput
          value={quantity}
          minValue={1}
          step={1}
          onChange={handleQuantityChange}
          rounded
          iconSize={20}
          totalWidth={100}
          totalHeight={30}
        />
      )}
    </SCartInfo>
  );
};

const SCartInfo = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 10px 0;
`;

const SWrapperName = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const SName = styled.Text`
  position: relative;
  flex: 1;
  font-size: ${({ theme }) => theme.font.medium};
  max-height: 50px;
  overflow: hidden;
  text-align: left;
  margin: 0;
  line-height: 25px;
`;

const SIcon = styled(Icon)``;

const SPrice = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.primaryRed};
  margin-top: 5px;
`;

const SOldPrice = styled.Text`
  font-size: ${({ theme }) => theme.font.medium};
  text-decoration: line-through;
  color: ${({ theme }) => theme.color.primaryGrey};
  margin: 5px 0;
`;

export default CartInfo;
