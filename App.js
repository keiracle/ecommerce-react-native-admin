import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { ProductsProvider } from "./context/productsProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CartProvider } from "./context/cartProvider";
import "react-native-gesture-handler";
import Main from "./components/stack/Main";
import Icon from "react-native-vector-icons/AntDesign";
import Cart from "./components/cart/Cart";
import Authentication from "./components/authentication/Authentication";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Tabs from "./components/stack/Tabs";

const theme = {
  color: {
    primaryWhite: "rgb(255,255,255)",
    primaryBlack: "rgb(0,0,0)",
    primaryGreen: "rgb(38, 212, 135)",
    primaryGrey: "rgb(190, 190, 190)",
    primaryPink: "#f7287b",
    primaryRed: "rgb(220,9,78)",
    primaryBlue: "rgb(65,100,173)",
    primaryOrange: "rgb(255, 87, 51)",
  },
  font: {
    small: "12px",
    medium: "16px",
    large: "24px",
    huge: "32px",
  },
};

const RootStack = createStackNavigator();

export default function App(props) {
  const [user, setUser] = useState({ username: "" });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const getReady = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      setIsReady(true);
    };

    getReady();
  }, []);

  if (!isReady) return <Text>App is getting ready ....</Text>;

  return (
    <ProductsProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <RootStack.Navigator mode="modal">
              {/* {user.username !== "" && (
                <>
                  <RootStack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                  />
                  <RootStack.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                      headerLeft: (props) => (
                        <Icon name="close" size={25} {...props} />
                      ),
                      headerLeftContainerStyle: { marginLeft: 15 },
                      headerTitleAlign: "center",
                    }}
                  />
                </>
              )} */}
              {user.username === "" && (
                <RootStack.Screen
                  name="Authentication"
                  component={Authentication}
                  options={{
                    headerLeft: (props) => (
                      <Icon name="close" size={25} {...props} />
                    ),
                    headerLeftContainerStyle: { marginLeft: 15 },
                    headerTitleAlign: "center",
                    headerShown: false,
                  }}
                />
              )}
            </RootStack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
});

const SApp = styled.View`
  flex: 1;
  align-items: center;
`;

                    headerLeft: (props) => (
                      <Icon name="close" size={25} {...props} />
                    ),
                    headerLeftContainerStyle: { marginLeft: 15 },
                    headerTitleAlign: "center",
                    headerShown: false,