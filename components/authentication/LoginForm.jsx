import React from "react";
import styled from "styled-components/native";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { KeyboardAvoidingView } from "react-native";
import { login } from "../../services/authService";

const LoginForm = (props) => {
  const { ...rest } = props;

  const initialValues = { username: "", password: "" };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, "Username must have more than 4 character")
      .required("Username is required"),
    password: yup
      .string()
      .min(5, "Password must have more than 4 character")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      await login(username, password);
    } catch (error) {
      console.log(error);
    }
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
          <KeyboardAvoidingView
            behavior="height"
            style={{ height: "100%", width: "100%" }}
          >
            <SForm>
              <Input
                label="Enter Your Username"
                placeholder="johnwick@username.com"
                leftIcon={<Icon name="user-alt" style={{ color: "grey" }} />}
                leftIconContainerStyle={{ marginRight: 10 }}
                containerStyle={{ marginTop: 10 }}
                inputStyle={{ fontSize: 16 }}
                value={values.username}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                errorMessage={
                  errors.username && touched.username ? errors.username : null
                }
              />
              <Input
                label="Enter Your Password"
                placeholder="Password"
                secureTextEntry
                leftIcon={<Icon name="lock" style={{ color: "grey" }} />}
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
              <Button
                title="Sign In"
                buttonStyle={{
                  backgroundColor: "rgb(38, 212, 135)",
                }}
                titleStyle={{ color: "black" }}
                containerStyle={{
                  marginTop: 30,
                  marginHorizontal: 30,
                }}
                raised
                onPress={handleSubmit}
              />
            </SForm>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </SLoginForm>
  );
};

const SLoginForm = styled.View`
  flex-direction: column;
  height: 75%;
  padding: 0px 30px 0px 30px;
  flex-direction: column;
  align-items: flex-start;
`;

const SForm = styled.View`
  position: relative;
  width: 100%;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  padding: 50px 10px 50px 10px;
`;

export default LoginForm;
