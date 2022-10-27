import { Box } from 'native-base';
import React from 'react';

type GradientBoxProps = {
  gradient: {
    linearGradient: {
      colors: string[];
      start: number[];
      end: number[];
    };
  };
  children: React.ReactNode;
};

export const GradientBox = ({ gradient, children }: GradientBoxProps) => (
  <Box bg={gradient} flex={1}>
    {children}
  </Box>
);
