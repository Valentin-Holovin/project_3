import React from 'react';
import { Animated } from 'react-native';

type Props = {
  startValue: string | number;
  endValue: string | number;
};

export const useGetAnimatedValue = ({ startValue, endValue }: Props) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const animatedToStartValue = React.useCallback(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }, []);

  const animatedToEndValue = React.useCallback(() => {
    Animated.spring(animatedValue, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, []);

  const value = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [startValue, endValue] as number[] | string[],
  });

  return {
    value,
    animatedToStartValue,
    animatedToEndValue,
  };
};
