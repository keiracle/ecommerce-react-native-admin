import React, { useState, useEffect, useContext } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import Authentication from "./components/authentication/Authentication";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Root } from "native-base";
import { UserContext } from "./context/userProvider";
import Tabs from "./components/stack/Tabs";
import InteractiveButton from "./components/navigateBar/InteractiveButton";

const RootStack = createStackNavigator();

export default function Application(props) {
  const { user } = useContext(UserContext);

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
    <Root>
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          {user.token.length === 0 ? (
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
          ) : (
            <RootStack.Screen
              name="Tabs"
              component={Tabs}
              options={{
                headerTitle: "",
                headerRight: () => <InteractiveButton />,
              }}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </Root>
  );
}
