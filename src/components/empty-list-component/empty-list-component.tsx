import { Center, IIconProps, Text } from 'native-base';
import React from 'react';

type Props = {
  IconComponent: (props: IIconProps) => JSX.Element;
  iconSize: number | string;
  title: string;
  subTitle: string;
};

export const EmptyListComponent = ({ IconComponent, iconSize, title, subTitle }: Props) => (
  <Center flex={1}>
    <IconComponent size={iconSize} />
    <Text mt={10} mb={4} textAlign='center' variant='title'>
      {title}
    </Text>
    <Text textAlign='center' fontWeight='300'>
      {subTitle}
    </Text>
  </Center>
);
