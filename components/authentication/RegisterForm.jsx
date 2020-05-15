import React from "react";
import styled from "styled-components/native";
import { Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

const RegisterForm = (props) => {
  const { ...rest } = props;

  const initialValues = {
    username: "",
    fullname: "",
    address: "",
    telephone: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, "Username must have more than 4 character")
      .required("Username is required"),
    password: yup
      .string()
      .min(5, "Password must have more than 4 character")
      .required("Password is required"),
    fullname: yup
      .string()
      .min(5, "Fullname must have more than 4 character")
      .required("Fullname is required"),
    address: yup
      .string()
      .min(5, "Address must have more than 4 character")
      .required("Address is required"),
    telephone: yup
      .string()
      .min(5, "Telephone must have more than 4 number")
      .required("Telephone is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <SLoginForm {...rest}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <SForm
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,

              elevation: 1,
            }}
          >
            <Input
              placeholder="Enter your username"
              leftIconContainerStyle={{ marginRight: 10 }}
              inputStyle={{ fontSize: 16 }}
              value={values.username}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              errorMessage={
                errors.username && touched.username ? errors.username : null
              }
            />
            <Input
              placeholder="Enter your password"
              secureTextEntry
              leftIconContainerStyle={{ marginRight: 10 }}
              inputStyle={{ fontSize: 16 }}
              containerStyle={{ marginTop: 10 }}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              errorMessage={
                errors.password && touched.password ? errors.password : null
              }
            />
            <Input
              placeholder="Enter your fullname"
              leftIconContainerStyle={{ marginRight: 10 }}
              inputStyle={{ fontSize: 16 }}
              containerStyle={{ marginTop: 10 }}
              value={values.fullname}
              onChangeText={handleChange("fullname")}
              onBlur={handleBlur("fullname")}
              errorMessage={
                errors.fullname && touched.fullname ? errors.fullname : null
              }
            />
            <Input
              placeholder="Enter your address"
              leftIconContainerStyle={{ marginRight: 10 }}
              inputStyle={{ fontSize: 16 }}
              containerStyle={{ marginTop: 10 }}
              value={values.address}
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              errorMessage={
                errors.address && touched.address ? errors.address : null
              }
            />
            <Input
              placeholder="Enter your telephone"
              leftIconContainerStyle={{ marginRight: 10 }}
              inputStyle={{ fontSize: 16 }}
              containerStyle={{ marginTop: 10 }}
              value={values.telephone}
              onChangeText={handleChange("telephone")}
              onBlur={handleBlur("telephone")}
              errorMessage={
                errors.telephone && touched.telephone ? errors.telephone : null
              }
              keyboardType="number-pad"
            />
            <Button
              title="Sign Up"
              buttonStyle={{
                backgroundColor: "rgb(38, 212, 135)",
              }}
              titleStyle={{ color: "black" }}
              containerStyle={{
                marginTop: 30,
                marginHorizontal: 10,
              }}
              raised
              onPress={handleSubmit}
            />
          </SForm>
        )}
      </Formik>
    </SLoginForm>
  );
};

const SLoginForm = styled.View`
  height: auto;
  padding-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SForm = styled.View`
  width: 90%;
  padding: 20px 10px;
`;

export default RegisterForm;
