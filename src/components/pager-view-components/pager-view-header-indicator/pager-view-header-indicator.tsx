import React from 'react';
import { Animated } from 'react-native';

import { DEVICE_WIDTH } from '../../../constants';

type IndicatorProp = {
  onPageScrollOffset: Animated.Value;
  onPageScrollPosition: Animated.Value;
  size: number;
  color: string;
};

export const Indicator = ({
  onPageScrollOffset,
  onPageScrollPosition,
  size,
  color,
}: IndicatorProp) => {
  const inputRange = [0, size];

  const translateX = Animated.add(onPageScrollOffset, onPageScrollPosition).interpolate({
    inputRange,
    outputRange: [0, size * (DEVICE_WIDTH / size)],
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 2,
        width: DEVICE_WIDTH / size,
        left: 0,
        backgroundColor: color,
        bottom: 0,
        transform: [
          {
            translateX: translateX,
          },
        ],
      }}
    />
  );
};
