import React from "react";
import styled from "styled-components/native";
import { Avatar, Card } from "react-native-elements";

const AdminCard = () => {
  return (
    <SAdminCard
      wrapperStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      containerStyle={{ marginBottom: 10 }}
    >
      <Avatar rounded icon={{ name: "home" }} size="large" />
      <SInfo>
        <SText>Lorem ipsum.</SText>
      </SInfo>
    </SAdminCard>
  );
};

const SAdminCard = styled(Card)`
  background-color: ${({ theme }) => theme.color.primaryWhite};
`;

const SInfo = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SText = styled.Text`
  font-size: ${({ theme }) => theme.font.medium};
`;

export default AdminCard;
