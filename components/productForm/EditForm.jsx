import React, { useContext } from "react";
import CustomForm from "./CustomForm";
import { Toast } from "native-base";
import { ProductsContext } from "../../context/productsProvider";

const EditForm = ({ cbOnSubmit, product }) => {
  const {
    productId,
    productName,
    price,
    promotionPrice,
    urlImage,
    descriptions,
    category,
    viewcount,
    delFlag,
  } = product;

  const { onEditProduct } = useContext(ProductsContext);

  const initialValues = {
    productName,
    price: price.toString(),
    promotionPrice: promotionPrice.toString(),
    urlImage,
    descriptions,
    category: category.categoryId,
    viewcount,
    delFlag,
  };

  const handleSubmit = async (product) => {
    const editedProduct = { ...product };
    editedProduct.productId = productId;

    const response = await onEditProduct(editedProduct);
    if (response && (response.status === 200 || response.status === 201)) {
      Toast.show({
        text: "Product Edited!",
        buttonText: "Okay",
      });
    }
    cbOnSubmit();
  };

  React.useEffect(() => {}, []);

  return (
    <CustomForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      submitLabel="Edit Product"
    />
  );
};

export default EditForm;
