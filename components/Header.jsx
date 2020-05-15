import React from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
  const { logo } = props;

  const { navigate } = useNavigation();

  return (
    <SHeader>
      <View>
        <SLogo>{logo}</SLogo>
      </View>
      <SSearchBox>
        <Input
          inputContainerStyle={styles.input}
          inputStyle={{ paddingTop: 0, marginLeft: 10, fontSize: 16 }}
          placeholder="What are you looking for ?"
          leftIcon={<Icon name="search" size={20} style={{ color: "grey" }} />}
        />
        <Button
          containerStyle={{
            width: 50,
            marginLeft: -20,
          }}
          type="clear"
          icon={
            <Icon name="shopping-cart" size={25} style={{ color: "white" }} />
          }
          onPress={() => navigate("Cart")}
        />
      </SSearchBox>
    </SHeader>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderRadius: 5,
    width: "95%",
  },
});

const SHeader = styled.View`
  width: 100%;
  height: 120px;
  padding-top: 36px;
  background-color: ${({ theme }) => theme.color.primaryPink};
  align-items: center;
  justify-content: center;
`;

const SLogo = styled.Text`
  color: ${({ theme }) => theme.color.primaryBlack};
  font-size: 16px;
`;

const SSearchBox = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 0 0 0;
`;

export default Header;
