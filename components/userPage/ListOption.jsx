import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const list = [
  {
    title: "Orders management",
    leftIcon: <Icon name="wpforms" style={{ fontSize: 25, color: "grey" }} />,
    rightIcon: (
      <Icon name="angle-right" style={{ fontSize: 25, color: "grey" }} />
    ),
  },
  {
    title: "Orders management",
    leftIcon: <Icon name="wpforms" style={{ fontSize: 25, color: "grey" }} />,
    rightIcon: (
      <Icon name="angle-right" style={{ fontSize: 25, color: "grey" }} />
    ),
  },
  {
    title: "Orders management",
    leftIcon: <Icon name="wpforms" style={{ fontSize: 25, color: "grey" }} />,
    rightIcon: (
      <Icon name="angle-right" style={{ fontSize: 25, color: "grey" }} />
    ),
  },
  {
    title: "Orders management",
    leftIcon: <Icon name="wpforms" style={{ fontSize: 25, color: "grey" }} />,
    rightIcon: (
      <Icon name="angle-right" style={{ fontSize: 25, color: "grey" }} />
    ),
  },
];

const ListOption = (props) => {
  const { ...rest } = props;

  return (
    <View {...rest}>
      {list.map((item, index) => (
        <ListItem
          key={index}
          Component={TouchableOpacity}
          activeOpacity={0.5}
          title={item.title}
          leftIcon={item.leftIcon}
          rightIcon={item.rightIcon}
          bottomDivider
        />
      ))}
    </View>
  );
};

export default ListOption;
