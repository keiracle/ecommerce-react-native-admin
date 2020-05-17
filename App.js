// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text } from "react-native";
// import styled, { ThemeProvider } from "styled-components/native";
// import { ProductsProvider } from "./context/productsProvider";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { CartProvider } from "./context/cartProvider";
// import "react-native-gesture-handler";
// import Icon from "react-native-vector-icons/AntDesign";
// import Authentication from "./components/authentication/Authentication";
// import * as Font from "expo-font";
// import { Ionicons } from "@expo/vector-icons";
// import { Root } from "native-base";
// import { UserProvider } from "./context/userProvider";
// import AdminTemplate from "./components/adminTemplate/AdminTemplate";

// const theme = {
//   color: {
//     primaryWhite: "rgb(255,255,255)",
//     primaryBlack: "rgb(0,0,0)",
//     primaryGreen: "rgb(38, 212, 135)",
//     primaryGrey: "rgb(190, 190, 190)",
//     primaryPink: "#f7287b",
//     primaryRed: "rgb(220,9,78)",
//     primaryBlue: "rgb(65,100,173)",
//     primaryOrange: "rgb(255, 87, 51)",
//   },
//   font: {
//     small: "12px",
//     medium: "16px",
//     large: "24px",
//     huge: "32px",
//   },
// };

// const RootStack = createStackNavigator();

// export default function App(props) {
//   const [user, setUser] = useState({ token: "" });

//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     const getReady = async () => {
//       await Font.loadAsync({
//         Roboto: require("native-base/Fonts/Roboto.ttf"),
//         Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
//         ...Ionicons.font,
//       });
//       setIsReady(true);
//     };

//     getReady();
//   }, []);

//   if (!isReady) return <Text>App is getting ready ....</Text>;

//   return (
//     <UserProvider>
//       <ProductsProvider>
//         <CartProvider>
//           <ThemeProvider theme={theme}>
//             <Root>
//               <NavigationContainer>
//                 <RootStack.Navigator mode="modal">
//                   {user.token === "" ? (
//                     <RootStack.Screen
//                       name="Authentication"
//                       component={Authentication}
//                       options={{
//                         headerLeft: (props) => (
//                           <Icon name="close" size={25} {...props} />
//                         ),
//                         headerLeftContainerStyle: { marginLeft: 15 },
//                         headerTitleAlign: "center",
//                         headerShown: false,
//                       }}
//                     />
//                   ) : (
//                     <RootStack.Screen
//                       name="AdminTemplate"
//                       component={AdminTemplate}
//                       options={{
//                         headerLeft: null,
//                         headerLeftContainerStyle: { marginLeft: 15 },
//                         headerTitleAlign: "center",
//                         headerShown: true,
//                       }}
//                     />
//                   )}
//                 </RootStack.Navigator>
//               </NavigationContainer>
//             </Root>
//           </ThemeProvider>
//         </CartProvider>
//       </ProductsProvider>
//     </UserProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // paddingTop: 50
//     // flex: 1,
//     // backgroundColor: "#fff",
//     // alignItems: "center",
//     // justifyContent: "center"
//   },
// });

// const SApp = styled.View`
//   flex: 1;
//   align-items: center;
// `;

import React from "react";
import { StyleSheet } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { ProductsProvider } from "./context/productsProvider";
import { CartProvider } from "./context/cartProvider";
import { UserProvider } from "./context/userProvider";
import "react-native-gesture-handler";
import Application from "./Application";

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

export default function App(props) {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <Application />
          </ThemeProvider>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
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
