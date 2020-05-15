import React, { useContext, useState } from "react";
import { View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import styled from "styled-components/native";
import CartItem from "./CartItem";
import { CartContext } from "../../context/cartProvider";
import EmptyCart from "./EmptyCart";
import { numberWithDot } from "../../utilities";
import SuccessfullyOrderModal from "./SuccessfullyOrderModal";

const Cart = (props) => {
  const { navigation } = props;

  const {
    cart,
    totalPrice,
    getTotalQuantity,
    onRemoveAllItem,
    onOrder,
  } = useContext(CartContext);

  const [isPlaceOrder, setIsPlaceOrder] = useState(false);

  navigation.setOptions({ title: `Cart (${getTotalQuantity()})` });

  const handleOrder = async () => {
    // const response = await onOrder();
    setIsPlaceOrder(true);
    // ToastAndroid.show(`Successful place orders`, ToastAndroid.SHORT);
  };

  const handleConfirmPlacedOrder = () => {
    setIsPlaceOrder(false);
    onRemoveAllItem();
  };

  if (cart.length === 0)
    return (
      <SCart>
        <EmptyCart />
      </SCart>
    );

  return (
    <SCart>
      <SuccessfullyOrderModal
        isPlaceOrder={isPlaceOrder}
        onConfirmPlacedOrder={handleConfirmPlacedOrder}
      />
      <ScrollView>
        {cart.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </ScrollView>
      <STotalPrice>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SLabel>Total price :</SLabel>
          <STotal>{numberWithDot(totalPrice)} &#273;</STotal>
        </View>
        <Button
          containerStyle={{ width: "100%", marginTop: 10 }}
          title="Place order"
          raised
          loading={isPlaceOrder}
          disabled={isPlaceOrder}
          onPress={handleOrder}
        />
      </STotalPrice>
    </SCart>
  );
};

const SCart = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

const STotalPrice = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primaryWhite};
  margin: 10px 0 0 0;
  padding: 20px 10px;
`;

const SLabel = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.medium};
`;

const STotal = styled.Text`
  font-size: ${({ theme }) => theme.font.large};
  color: ${({ theme }) => theme.color.primaryRed};
`;

export default Cart;
