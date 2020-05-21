import React from "react";
import styled from "styled-components/native";
import AdminCard from "./AdminCard";
import ListProduct from "./ListProduct";

const ProductPage = () => {
  return (
    <SAdminTemplate>
      <AdminCard />
      <ListProduct />
    </SAdminTemplate>
  );
};

const SAdminTemplate = styled.View`
  width: 100%;
  height: 80%;
`;

export default ProductPage;
