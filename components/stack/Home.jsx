import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import SearchBox from "../SearchBox";
import Header from "../Header";
import Carousel from "../carousel/Carousel";
import ProductContainer from "../product/ProductContainer";

const Ad = (props) => {
  const { color } = props;
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: color,
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10,
      }}
    ></View>
  );
};

const items = [
  <Ad color="red" />,
  <Ad color="blue" />,
  <Ad color="purple" />,
  <Ad color="grey" />,
  <Ad color="pink" />,
];

const Home = () => {
  return (
    <View>
      <Header logo="NamCycles" />
      <Carousel items={items} />
      {/* <SearchBox /> */}
      <ProductContainer />
    </View>
  );
};

export default Home;
