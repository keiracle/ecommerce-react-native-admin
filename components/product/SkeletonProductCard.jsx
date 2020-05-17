import React from "react";
import SkeletonContent from "react-native-skeleton-content";
import styled from "styled-components/native";

const SkeletonProductCard = (props) => {
  const { style } = props;

  const firstLayout = [
    {
      width: 70,
      height: 70,
      borderRadius: 5,
    },
  ];
  const secondLayout = [
    {
      width: 150,
      height: 20,
      marginBottom: 10,
    },
    {
      width: 280,
      height: 40,
    },
  ];

  return (
    <SSkeletonProductCard style={style}>
      <SkeletonContent
        containerStyl18e={{
          width: 75,
          flexDirection: "row",
        }}
        isLoading={true}
        layout={firstLayout}
      />
      <SkeletonContent
        containerStyle={{ width: 300 }}
        isLoading={true}
        layout={secondLayout}
      />
    </SSkeletonProductCard>
  );
};

const SSkeletonProductCard = styled.View`
  height: 80px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: 5px;
  /* background-color: ${({ theme }) => theme.color.primaryWhite}; */
  border-radius: 5px;
`;

export default SkeletonProductCard;
