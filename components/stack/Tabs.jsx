import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import User from "./User";
import * as FontAwsome from "react-native-vector-icons/FontAwesome";
import * as AntDesign from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-elements";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, style }) => {
      let icon = null;

      if (route.name === "Home") {
        icon = focused ? (
          <AntDesign.default
            name="home"
            size={25}
            style={{ color: "rgb(38, 212, 135)" }}
          />
        ) : (
          <AntDesign.default name="home" size={25} />
        );
      }

      if (route.name === "User") {
        icon = focused ? (
          <FontAwsome.default
            name="user-o"
            size={25}
            style={{ color: "rgb(38, 212, 135)" }}
          />
        ) : (
          <FontAwsome.default name="user-o" size={25} />
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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};

export default Tabs;
