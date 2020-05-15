import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Home from "./Home";
import WrapperDetail from "../detail/WrapperDetail";
import InteractiveButton from "../navigateBar/InteractiveButton";
import Tabs from "./Tabs";
import CartIconWithBadge from "../navigateBar/CartIconWithBadge";

const MainStack = createStackNavigator();

function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || "Feed";

  switch (routeName) {
    case "Feed":
      return "News feed";
    case "Profile":
      return "My profile";
    case "Account":
      return "My account";
  }
}

const getHeaderOptions = ({ route }) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";

  switch (routeName) {
    case "Home":
      return { headerTitle: "Home" };
    case "User":
      return {
        headerTitle: "Personal",
        headerRight: () => <CartIconWithBadge style={{ marginRight: 30 }} />,
      };
  }
};

const Main = (props) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Tabs"
        component={Tabs}
        options={getHeaderOptions}
      />
      <MainStack.Screen
        name="Detail"
        component={WrapperDetail}
        options={{
          headerTitle: "",
          headerRight: () => <InteractiveButton />,
        }}
      />
    </MainStack.Navigator>
  );
};

export default Main;
