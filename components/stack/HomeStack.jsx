import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../detail/Detail";
import Home from "./Home";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Details" component={Detail} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
