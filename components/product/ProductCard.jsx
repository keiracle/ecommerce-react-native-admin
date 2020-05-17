import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native-elements";
import { ActivityIndicator, Text, View } from "react-native";
import { numberWithDot } from "../../utilities";

const ProductCard = (props) => {
  const { product } = props;

  const {
    productId,
    productName,
    promotionPrice,
    price,
    urlImage,
    viewcount,
    descriptions,
    delFlag,
  } = product;

  const Price = () => {
    if (promotionPrice !== 0)
      return (
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              textDecorationLine: "line-through",
              color: "grey",
              marginRight: 10,
            }}
          >
            {numberWithDot(price)}
          </Text>
          <Text style={{ color: "red" }}>{numberWithDot(promotionPrice)}</Text>
        </View>
      );

    return <Text style={{ color: "red" }}>{numberWithDot(price)}</Text>;
  };

  return (
    <SContainer>
      <SProductCard>
        <Image
          source={{ uri: urlImage }}
          style={{ width: 70, height: 70 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <SInfo>
          <SName numberOfLines={2}>{productName}</SName>
          <Price />
        </SInfo>
      </SProductCard>
    </SContainer>
  );
};

const SContainer = styled.View`
  padding: 5px 0px;
`;

const SProductCard = styled.View`
  height: 80px;
  background-color: ${({ theme }) => theme.color.primaryWhite};
  justify-content: center;
  border-radius: 5px;
  padding: 0 5px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const SName = styled.Text`
  position: relative;
  max-height: 40px;
  width: 250px;
  font-size: ${({ theme }) => theme.font.small};
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0.1px;
  text-align: left;
  overflow: hidden;
  margin-bottom: 5px;
`;

const SInfo = styled.View`
  margin-left: 10px;
  flex-direction: column;
`;

export default ProductCard;
