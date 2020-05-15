import React from "react";
import { Container, Tabs, Tab } from "native-base";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Authentication = () => {
  return (
    <Container>
      <Tabs tabBarUnderlineStyle={{ backgroundColor: "rgb(65,100,173)" }}>
        <Tab
          heading="Login"
          tabStyle={{ backgroundColor: "white" }}
          activeTabStyle={{ backgroundColor: "white" }}
          textStyle={{ color: "grey" }}
          activeTextStyle={{ color: "rgb(65,100,173)" }}
        >
          <LoginForm />
        </Tab>
        <Tab
          heading="Register"
          tabStyle={{ backgroundColor: "white" }}
          activeTabStyle={{ backgroundColor: "white" }}
          textStyle={{ color: "grey" }}
          activeTextStyle={{ color: "rgb(65,100,173)" }}
        >
          <RegisterForm />
        </Tab>
      </Tabs>
    </Container>
  );
};

// const SAuthentication = styled``;

export default Authentication;
