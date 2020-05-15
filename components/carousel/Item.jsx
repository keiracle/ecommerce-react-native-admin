import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Item = props => {
  const { item } = props;

  return <SItem>{item}</SItem>;
};

const SItem = styled.View`
  flex: 1;
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

export default Item;
