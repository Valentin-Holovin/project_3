import { Box } from 'native-base';
import React from 'react';
import { Animated } from 'react-native';

type Props = {
  backgroundColor: Animated.AnimatedInterpolation;
};

//TODO useless component

export const AnimatedBackground = ({ backgroundColor }: Props) => (
  <Box width={'100%'} height={'100%'} position={'absolute'} top={0} left={0} zIndex={-1}>
    <Animated.View
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
      }}
    />
    <Box flex={1} background='#D5EDD8' />
  </Box>
);
