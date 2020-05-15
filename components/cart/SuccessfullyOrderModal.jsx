import React from "react";
import { Button } from "react-native-elements";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import Modal from "react-native-modal";
import styled from "styled-components/native";

const SuccessfullyOrderModal = (props) => {
  const { isPlaceOrder, onConfirmPlacedOrder } = props;

  return (
    <Modal
      isVisible={isPlaceOrder}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      onBackButtonPress={onConfirmPlacedOrder}
      onBackdropPress={onConfirmPlacedOrder}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <SSuccessfullyOrderModal>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Successfully order !</Text>
          <LottieView
            source={require(`../../assets/lotties/checked.json`)}
            style={{
              width: 60,
              height: 60,
            }}
            hardwareAccelerationAndroid
            autoPlay
            loop={false}
          />
        </View>
        <Button
          title="Confirm"
          type="solid"
          raised
          onPress={onConfirmPlacedOrder}
        />
      </SSuccessfullyOrderModal>
    </Modal>
  );
};

const SSuccessfullyOrderModal = styled.View`
  width: auto;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primaryWhite};
  border-radius: 5px;
  padding: 0 15px 15px 15px;
`;

export default SuccessfullyOrderModal;
