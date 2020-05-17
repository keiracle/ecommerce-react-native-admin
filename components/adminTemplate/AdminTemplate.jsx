import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import AdminCard from "./AdminCard";
import ListProduct from "./ListProduct";

const AdminTemplate = () => {
  const { navigate } = useNavigation();
  return (
    <SAdminTemplate>
      <AdminCard />
      <ListProduct />
    </SAdminTemplate>
  );
};

const SAdminTemplate = styled.View`
  width: 100%;
  height: 100%;
`;

export default AdminTemplate;
