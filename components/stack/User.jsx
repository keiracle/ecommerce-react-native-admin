import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import ListOption from "../userPage/ListOption";
import { ListItem, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const User = (props) => {
  const { ...rest } = props;

  const { navigate } = useNavigation();

  return (
    <SUser {...rest}>
      <Text>User settings</Text>
      <ListItem
        Component={TouchableOpacity}
        activeOpacity={0.5}
        title="Welcome !"
        subtitle="Sign In / Sign Up"
        leftAvatar={<Avatar rounded title="" />}
        rightIcon={
          <Icon name="angle-right" style={{ fontSize: 25, color: "grey" }} />
        }
        containerStyle={{ marginBottom: 20 }}
        onPress={() => navigate("Authentication")}
      />
      <ListOption />
    </SUser>
  );
};

const SUser = styled.View``;

export default User;
