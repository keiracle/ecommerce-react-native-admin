import React from "react";
import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import { numberWithDot } from "../../utilities";

const DetailInfo = props => {
  const { name, price = 0, promotionPrice = 0 } = props;

  const getPromotionPercent = (price, promotionPrice) => {
    return Math.round(((price - promotionPrice) / price) * 100);
  };

  const Price = () => {
    if (promotionPrice === 0) {
      return (
        <SWrapperPrice>
          <SPrice>{numberWithDot(price)} &#273;</SPrice>
        </SWrapperPrice>
      );
    }

    return (
      <SWrapperPrice>
        <SPrice>{numberWithDot(promotionPrice)} &#273;</SPrice>
        <SOldPrice>{numberWithDot(price)} &#273;</SOldPrice>
        <SPercent>-{getPromotionPercent(price, promotionPrice)}%</SPercent>
      </SWrapperPrice>
    );
  };

  return (
    <SDetailInfo>
      <SName ellipsizeMode="tail" numberOfLines={2}>
        {name}
      </SName>
      <Price />
    </SDetailInfo>
  );
};

const SDetailInfo = styled.View``;

const SName = styled.Text`
  position: relative;
  max-height: 40px;
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0.1px;
  text-align: left;
  overflow: hidden;
  margin: 0;
`;

const SWrapperPrice = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SPrice = styled.Text`
  font-weight: bold;
  /* font-size: ${({ theme }) => theme.font.huge}; */
  font-size: 28px;
`;

const SOldPrice = styled.Text`
  font-size: ${({ theme }) => theme.font.medium};
  text-decoration: line-through;
  color: ${({ theme }) => theme.color.primaryGrey};
  margin-left: 10px;
`;

const SPercent = styled.Text`
  font-size: ${({ theme }) => theme.font.medium};
  margin-left: 10px;
`;

export default DetailInfo;
