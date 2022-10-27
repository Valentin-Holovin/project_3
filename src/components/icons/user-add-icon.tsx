import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const UserAddIcon = (props: IIconProps) => (
  <Icon viewBox='0 0 16 16' {...props}>
    <Path
      d='M12.666 5.333h-1.333v2h-2v1.334h2v2h1.333v-2h2V7.333h-2v-2zm-10 0A2.607 2.607 0 005.333 8 2.607 2.607 0 008 5.333a2.607 2.607 0 00-2.667-2.666 2.607 2.607 0 00-2.667 2.666zm4 0a1.273 1.273 0 01-1.333 1.334A1.273 1.273 0 014 5.333 1.273 1.273 0 015.333 4a1.273 1.273 0 011.333 1.333zm-4 6.667a2 2 0 012-2H6a2 2 0 012 2v.667h1.333V12A3.333 3.333 0 006 8.667H4.666A3.333 3.333 0 001.333 12v.667h1.333V12z'
      fill='#AFAFAF'
    />
  </Icon>
);
