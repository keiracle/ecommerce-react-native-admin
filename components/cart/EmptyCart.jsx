import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";

const EmptyCart = () => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  }, []);

  return (
    <SEmptyCart>
      <LottieView
        style={{ width: 150, height: 150 }}
        ref={animation}
        source={require("../../assets/lotties/empty-cart.json")}
        hardwareAccelerationAndroid
        autoPlay
        loop
      />
      <SText>Your cart is currently empty</SText>
    </SEmptyCart>
  );
};

const SEmptyCart = styled.View`
  width: 100%;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SText = styled.Text`
  font-size: ${({ theme }) => theme.font.medium};
  margin-top: 10px;
`;

export default EmptyCart;
