import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Input } from "react-native-elements";
import styled from "styled-components/native";
import { KeyboardAvoidingView, Alert } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Text, Button } from "native-base";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";

let data = [
  { id: "1", value: "Bicycles" },
  { id: "2", value: "Tools" },
  { id: "3", value: "Accessory" },
  { id: "4", value: "Stuff" },
  { id: "5", value: "Don" },
];

const validationSchema = yup.object().shape({
  productName: yup
    .string()
    .min(3, "Name length at least 3 characters")
    .required(),
  descriptions: yup
    .string()
    .min(1, "Detail length at least 1 characters")
    .required(),
  price: yup.number().min(0).required(),
  promotionPrice: yup.number().min(0).required(),
});

const CustomForm = (props) => {
  const { initialValues = {}, submitLabel, onSubmit } = props;

  const [url, setUrl] = useState(initialValues.urlImage);

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyA0f17nQXy_2IcIKdY-gqvxdZcQos4Tc4s",
      authDomain: "### FIREBASE AUTH DOMAIN ###",
      projectId: "cycles-3fb97",
      storageBucket: "gs://cycles-3fb97.appspot.com",
    });
  }

  useEffect(() => {}, []);

  const handleSubmit = async (values, { setFieldError }) => {
    if (parseInt(values.price) < parseInt(values.promotionPrice)) {
      setFieldError("promotionPrice", "Must lower than price");
      returnl;
    }

    onSubmit({
      ...values,
      urlImage: url,
      category: { categoryId: values.category },
    });
  };

  const handleChooseImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        uploadImage(result.uri)
          .then(() => Alert.alert("Success"))
          .catch((error) => Alert.alert(error));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const imageName = Date.now();
    const link = `https://firebasestorage.googleapis.com/v0/b/cycles-3fb97.appspot.com/o/${imageName}?alt=media`;
    setUrl(link);
    var ref = firebase.storage().ref().child(imageName.toString());
    return ref.put(blob);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
          <SForm>
            <Input
              label="Product name"
              placeholder="abc"
              leftIconContainerStyle={{ marginRight: 10 }}
              containerStyle={{ marginTop: 10 }}
              inputStyle={{ fontSize: 16 }}
              value={values.productName}
              onChangeText={handleChange("productName")}
              onBlur={handleBlur("productName")}
              errorMessage={
                errors.productName && touched.productName
                  ? errors.productName
                  : null
              }
            />
            <Input
              label="Descriptions"
              placeholder="detalis"
              leftIconContainerStyle={{ marginRight: 10 }}
              containerStyle={{ marginTop: 10 }}
              inputStyle={{ fontSize: 16 }}
              value={values.descriptions}
              onChangeText={handleChange("descriptions")}
              onBlur={handleBlur("descriptions")}
              errorMessage={
                errors.descriptions && touched.descriptions
                  ? errors.descriptions
                  : null
              }
              multiline
              numberOfLines={3}
            />
            <Input
              label="Price"
              leftIconContainerStyle={{ marginRight: 10 }}
              containerStyle={{ marginTop: 10 }}
              inputStyle={{ fontSize: 16 }}
              value={values.price}
              onChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
              errorMessage={errors.price && touched.price ? errors.price : null}
              keyboardType="numeric"
              maxLength={9}
            />
            <Input
              label="Promotion price"
              leftIconContainerStyle={{ marginRight: 10 }}
              containerStyle={{ marginTop: 10 }}
              inputStyle={{ fontSize: 16 }}
              value={values.promotionPrice}
              onChangeText={handleChange("promotionPrice")}
              onBlur={handleBlur("promotionPrice")}
              errorMessage={
                errors.promotionPrice && touched.promotionPrice
                  ? errors.promotionPrice
                  : null
              }
              keyboardType="numeric"
              maxLength={9}
            />
            <Dropdown
              label="Category"
              data={data}
              value={values.category}
              valueExtractor={(item) => item.id}
              labelExtractor={(item) => item.value}
              onChangeText={handleChange("category")}
            />
            <Button onPress={handleChooseImage} block full>
              <Text>Choose photo</Text>
            </Button>
            <Button full style={{ marginTop: 10 }} onPress={handleSubmit}>
              <Text>{submitLabel}</Text>
            </Button>
          </SForm>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

const SForm = styled.View`
  position: relative;
  width: 100%;
  flex-direction: column;
  background-color: white;
  padding: 0;
`;

export default CustomForm;
