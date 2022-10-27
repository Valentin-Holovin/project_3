import { Center, IIconProps, Text } from 'native-base';
import React from 'react';
import { Pressable } from 'react-native';

import { colors } from '../../../theme';

type Props = {
  title: string;
  Icon: (props: IIconProps) => JSX.Element;
  onPress: () => void;
  isActive: boolean;
  backgroundColor: string;
};

export const PagerViewHeaderItem = ({ Icon, title, onPress, isActive, backgroundColor }: Props) => (
  <Pressable
    onPress={onPress}
    style={{
      flex: 1,
    }}
  >
    <Center bg={backgroundColor} flex={1}>
      <Icon size={5} color={isActive ? colors.primary[700] : colors.primary[600]} />
      <Text>{title}</Text>
    </Center>
  </Pressable>
);
