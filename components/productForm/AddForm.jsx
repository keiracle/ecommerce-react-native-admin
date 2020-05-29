import React from "react";
import { saveProduct } from "../../services/productService";
import CustomForm from "./CustomForm";
import { Toast } from "native-base";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsProvider";

const initialValues = {
  productName: "",
  price: 0,
  promotionPrice: 0,
  urlImage: "",
  descriptions: "",
  category: "",
  viewcount: 0,
  delFlag: 0,
};

const AddForm = ({ cbOnSubmit }) => {
  const { onAddProduct } = useContext(ProductsContext);

  const handleSubmit = async (product) => {
    const response = await onAddProduct(product);
    if (response && (response.status === 200 || response.status === 201)) {
      Toast.show({
        text: "Product Added!",
        buttonText: "Okay",
      });
    }
    cbOnSubmit();
  };

  return (
    <CustomForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      submitLabel="Create Product"
    />
  );
};

export default AddForm;
