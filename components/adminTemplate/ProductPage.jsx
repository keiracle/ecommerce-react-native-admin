import React, { useState } from "react";
import styled from "styled-components/native";
import AdminCard from "./AdminCard";
import ListProduct from "./ListProduct";
import { Text, Button } from "native-base";
import { Overlay } from "react-native-elements";
import AddForm from "../productForm/AddForm";
import EditForm from "../productForm/EditForm";

const ProductPage = () => {
  const [visible, setVisible] = useState(false);

  const [visible2, setVisible2] = useState(false);

  const [product, setProduct] = useState({});

  const handleEditProduct = (product) => {
    setVisible2(true);
    setProduct(product);
  };

  return (
    <SAdminTemplate>
      <AdminCard />
      <Button
        small
        block
        style={{ width: 150, marginVertical: 5, marginLeft: 10 }}
        onPress={() => setVisible(true)}
      >
        <Text>Add Product</Text>
      </Button>
      <ListProduct onEditProduct={handleEditProduct} />
      <Overlay
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        overlayStyle={{ height: 550 }}
      >
        <AddForm cbOnSubmit={() => setVisible(false)} />
      </Overlay>
      <Overlay
        isVisible={visible2}
        onBackdropPress={() => setVisible2(false)}
        overlayStyle={{ height: 550 }}
      >
        <EditForm cbOnSubmit={() => setVisible2(false)} product={product} />
      </Overlay>
    </SAdminTemplate>
  );
};

const SAdminTemplate = styled.View`
  width: 100%;
  height: 80%;
`;

export default ProductPage;
