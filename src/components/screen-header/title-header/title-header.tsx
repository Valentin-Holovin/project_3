import { Center, Text } from 'native-base';
import React from 'react';

export interface ITitleHeader {
  title: string;
  type: 'Title';
}

export const TitleHeader = ({ title }: ITitleHeader) => (
  <Center flex={1} mr='40px'>
    <Text fontSize='2xl' fontWeight={700}>
      {title}
    </Text>
  </Center>
);
