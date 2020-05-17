import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { KeyboardAvoidingView } from "react-native";
import { UserContext } from "../../context/userProvider";
import { useNavigation } from "@react-navigation/native";

const LoginForm = (props) => {
  const { ...rest } = props;

  const { onLogin } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);

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

  const { navigate } = useNavigation();

  const handleSubmit = async (values) => {
    const { username, password } = values;
    setIsLoading(true);
    const response = await onLogin(username, password);
    setIsLoading(false);

    if (response && response.status === 200) {
      // Redirect
      navigate("AdminTemplate");
    }
  };

  const handleFakeSubmit = async (values) => {
    const { username, password } = values;
    setIsLoading(true);
    const response = await onLogin(username, password);
    setIsLoading(false);

    if (response && response.status === 200) {
      // Redirect
      // navigate("AdminTemplate");
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
                loading={isLoading}
                disabled={isLoading}
                onPress={handleSubmit}
              />
              <Button
                title="Sign In With Admin"
                buttonStyle={{
                  backgroundColor: "rgb(244, 68, 68 )",
                }}
                titleStyle={{ color: "black" }}
                containerStyle={{
                  marginTop: 30,
                  marginHorizontal: 30,
                }}
                raised
                loading={isLoading}
                disabled={isLoading}
                onPress={() => {
                  handleFakeSubmit({ username: "admin1", password: "123456" });
                }}
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
