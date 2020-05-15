import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import Dot from "./Dot";
import Item from "./Item";

const Carousel = props => {
  const { type = "slide", itemsPerInteval = 1, items = [] } = props;

  const ref = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  // useEffect(() => {
  //   let autoScroll = null;

  //   if (!isTouch) {
  //     autoScroll = setTimeout(() => {
  //       ref.current.scrollTo({
  //         x: (width / intervals) * (interval === intervals ? 0 : interval),
  //         y: 0,
  //         animated: true
  //       });
  //     }, 500);
  //   }

  //   return () => {
  //     clearTimeout(autoScroll);
  //   };
  // }, [interval, isTouch]);

  let dots = [];
  for (let i = 1; i <= intervals; i++) {
    dots.push(<Dot key={i} active={i === interval} />);
  }

  const init = width => {
    setWidth(width);
    setIntervals(Math.ceil(items.length / itemsPerInteval));
  };

  const getInterval = offset => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i - 1) {
        return i;
      }
    }
    return i;
  };

  const handleContentSizeChange = (w, h) => {
    init(w);
  };

  const handleScroll = ({ nativeEvent }) => {
    setInterval(getInterval(nativeEvent.contentOffset.x));
  };

  const handleTouchStart = () => {
    setIsTouch(true);
  };

  const handleTouchEnd = () => {
    setIsTouch(false);
  };

  return (
    <SCarousel>
      <ScrollView
        ref={ref}
        horizontal
        contentContainerStyle={{ width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
        onContentSizeChange={handleContentSizeChange}
        onScroll={handleScroll}
        // onTouchStart={handleTouchStart}
        // onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ScrollView>
      <SDots>{dots}</SDots>
    </SCarousel>
  );
};

const SCarousel = styled.View`
  width: 100%;
  height: 100px;
`;

const SDots = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

export default Carousel;
