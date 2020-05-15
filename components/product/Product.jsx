import React, { useContext } from "react";
import { View, Text, Image, Button } from "react-native";
import styled from "styled-components/native";
import { numberWithDot } from "../../utilities";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Product = props => {
  const { product } = props;

  const { id, name, price, salePrice } = product;

  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigate("Detail", { slug: id })}
    >
      <SProduct>
        <SWrapperImage>
          <SImage source={require("../../assets/bicycle.jpeg")} />
        </SWrapperImage>
        <View>
          <SName numberOfLines={2}>{name}</SName>
        </View>
        <SPrice numberOfLines={1}>{numberWithDot(price)} &#273;</SPrice>
      </SProduct>
    </TouchableOpacity>
  );
};

const SProduct = styled.View`
  border: 1px solid red;
  width: 100px;
  height: 150px;
`;

const SWrapperImage = styled.View`
  width: 100px;
  height: 100px;
  padding: 20px 0 0 0;
`;

const SImage = styled.Image`
  width: 90px;
  height: 60px;
`;

const SName = styled.Text`
  position: relative;
  max-height: 40px;
  width: 100%;
  font-size: ${({ theme }) => theme.font.small};
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0.1px;
  text-align: left;
  overflow: hidden;
  margin: 0;
`;

const SPrice = styled.Text`
  font-size: ${({ theme }) => theme.font.small};
  font-weight: bold;
`;

export default Product;
