import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as FontAwsome from "react-native-vector-icons/FontAwesome";
import * as AntDesign from "react-native-vector-icons/AntDesign";
import * as Feather from "react-native-vector-icons/Feather";
import ProductPage from "../adminTemplate/ProductPage";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, style }) => {
      let icon = null;

      if (route.name === "Product") {
        icon = focused ? (
          <Feather.default
            name="package"
            size={22}
            style={{ color: "rgb(38, 212, 135)" }}
          />
        ) : (
          <Feather.default name="package" size={20} />
        );
      }

      if (route.name === "Order") {
        icon = focused ? (
          <Feather.default
            name="tag"
            size={22}
            style={{ color: "rgb(38, 212, 135)" }}
          />
        ) : (
          <Feather.default name="tag" size={20} />
        );
      }

      if (route.name === "Setting") {
        icon = focused ? (
          <Feather.default
            name="settings"
            size={22}
            style={{ color: "rgb(38, 212, 135)" }}
          />
        ) : (
          <Feather.default name="settings" size={20} />
        );
      }

      return icon;
    },
  });

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: "rgb(38, 212, 135)",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Product" component={ProductPage} />
      <Tab.Screen name="Order" component={ProductPage} />
      <Tab.Screen name="Setting" component={ProductPage} />
    </Tab.Navigator>
  );
};

export default Tabs;
