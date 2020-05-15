import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Overlay, Button } from "react-native-elements";
import CartItem from "../cart/CartItem";
import { Text, Animated, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

const AddedToCart = props => {
  const { isAdd, product, onOut, ...rest } = props;

  useEffect(() => {}, []);

  const { navigate } = useNavigation();

  return (
    <Modal
      isVisible={isAdd}
      onBackdropPress={onOut}
      onBackButtonPress={onOut}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <SAddedToCart>
        <STitle>
          <Icon name="check" size={25} style={{ color: "rgb(28, 156, 58)" }} />
          <SText>Product is added to cart</SText>
          <Button
            type="clear"
            icon={<Icon name="close" size={30} />}
            onPress={onOut}
          />
        </STitle>
        <CartItem
          product={product}
          mini
          style={{
            paddingBottom: 10,
            borderStyle: "solid",
            borderBottomWidth: 0.5,
            borderBottomColor: "grey"
          }}
        />
        <Button
          type="solid"
          raised
          title="Check Cart"
          buttonStyle={{ backgroundColor: "rgb(220,9,78)" }}
          containerStyle={{
            width: "100%",
            marginTop: 15
          }}
          onPress={() => {
            navigate("Cart");
            onOut();
          }}
        />
      </SAddedToCart>
    </Modal>
  );
};

const SAddedToCart = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: "rgb(255,255,255)";
  padding: 10px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const STitle = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const SText = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.font.medium};
  align-self: center;
  /* color: ${({ theme }) => theme.color.primaryGreen} */
  color: rgb(28, 156, 58);
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export default AddedToCart;
