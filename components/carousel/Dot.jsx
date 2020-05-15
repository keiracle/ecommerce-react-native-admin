import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Dot = props => {
  const { active = false } = props;

  return <SDot active={active} />;
};

const SDot = styled.View`
  width: 14px;
  height: 2px;
  background-color: ${({ active }) => (active ? "#fff" : "#C3C3C3")};
  margin: 0 2px;
`;

export default Dot;
