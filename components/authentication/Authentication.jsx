import React from "react";
import styled from "styled-components/native";
import LoginForm from "./LoginForm";
import Svg, { ClipPath, Circle, Image } from "react-native-svg";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

const screenHeight = Math.round(Dimensions.get("window").height);

const Authentication = () => {
  return (
    <SAuthentication>
      <SImageWrapper>
        <Svg height={screenHeight} width={screenWidth}>
          <ClipPath id="clip">
            <Circle r={400} cx={screenWidth / 2} cy={-80} />
          </ClipPath>
          <Image
            href={require("../../assets/bg.jpg")}
            width={screenWidth}
            height={screenHeight}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />
        </Svg>
      </SImageWrapper>
      <LoginForm />
    </SAuthentication>
  );
};

const SAuthentication = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(226, 225, 231);
`;

const SImageWrapper = styled.View`
  flex: 1;
`;

export default Authentication;
