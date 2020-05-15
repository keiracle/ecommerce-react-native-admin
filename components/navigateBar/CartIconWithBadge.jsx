import React, { useContext } from "react";
import { View } from "react-native";
import { CartContext } from "../../context/cartProvider";
import * as Feather from "react-native-vector-icons/Feather";
import { Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const CartIconWithBadge = (props) => {
  const { containerStyle, badgeStyle, style } = props;

  const { cart, getTotalQuantity } = useContext(CartContext);

  const { navigate } = useNavigation();

  return (
    <View style={style}>
      <Feather.default
        name="shopping-cart"
        size={25}
        onPress={() => navigate("Cart")}
      />
      <Badge
        status="primary"
        value={getTotalQuantity() >= 100 ? `99+` : getTotalQuantity()}
        containerStyle={{
          ...containerStyle,
          position: "absolute",
          top: -10,
          right: -16,
          width: 30,
        }}
        badgeStyle={{ ...badgeStyle, backgroundColor: "rgb(255, 87, 51)" }}
      />
    </View>
  );
};

export default CartIconWithBadge;
