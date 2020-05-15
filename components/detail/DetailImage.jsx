import React from "react";
import styled from "styled-components/native";
import { View, Text, Image } from "react-native";

const DetailImage = props => {
  const { image } = props;

  return (
    <SDetailImage>
      <SImage source={require("../../assets/bicycle.jpeg")} />
    </SDetailImage>
  );
};

const SDetailImage = styled.View`
  width: 100%;
  height: 300px;
`;

const SImage = styled.Image`
  width: 350px;
  height: 250px;
  margin: auto;
`;

export default DetailImage;
