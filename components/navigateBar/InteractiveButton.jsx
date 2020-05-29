import React, { useContext } from "react";
import * as AntDesign from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../context/userProvider";

const InteractiveButton = (props) => {
  const { onLogout } = useContext(UserContext);

  const { navigate } = useNavigation();

  return (
    <SInteractiveButton>
      <AntDesign.default name="logout" size={25} onPress={onLogout} />
    </SInteractiveButton>
  );
};

const SInteractiveButton = styled.View`
  flex-direction: row;
  width: 50px;
  justify-content: space-around;
`;

export default InteractiveButton;
