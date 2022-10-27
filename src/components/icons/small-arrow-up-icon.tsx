import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const SmallArrowUpIcon = (props: IIconProps) => {
  return (
    <Icon viewBox='0 0 20 20' fill='none' {...props}>
      <Path
        d='M5.675 13.333h9.65c.897 0 1.345-1.034.713-1.636l-4.824-4.749a1.048 1.048 0 00-.712-.281 1.02 1.02 0 00-.709.281l-4.83 4.75c-.632.6-.185 1.635.712 1.635z'
        fill='#303030'
      />
    </Icon>
  );
};
