import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Detail from "./Detail";

const WrapperDetail = props => {
  const [product, setProduct] = useState({});

  const { route } = props;

  // const { params } = useRoute();

  useEffect(() => {
    // Get product from server using params.slug
    setProduct({
      id: route.params.slug,
      name: "Bike",
      category: "bike",
      price: 10000,
      promotionPrice: 5000,
      image: "../../assets/bicycle.jpeg",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim!",
      viewcount: 0
    });
  }, []);

  return (
    <View>
      <Detail product={product} />
    </View>
  );
};

export default WrapperDetail;
