import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const ModeratoreRoleIcon = (props: IIconProps) => (
  <Icon viewBox='0 0 16 16' {...props}>
    <Path
      d='M13.526 5.527l-2.86 2.86-.866-.86-.94.946 1.8 1.8 3.813-3.8-.947-.946zm-10.86-.194A2.607 2.607 0 005.333 8 2.607 2.607 0 008 5.333a2.607 2.607 0 00-2.667-2.666 2.607 2.607 0 00-2.667 2.666zm4 0a1.273 1.273 0 01-1.333 1.334A1.273 1.273 0 014 5.333 1.273 1.273 0 015.333 4a1.273 1.273 0 011.333 1.333zm-4 6.667a2 2 0 012-2H6a2 2 0 012 2v.667h1.333V12A3.334 3.334 0 006 8.667H4.666A3.333 3.333 0 001.333 12v.667h1.333V12z'
      fill='#fff'
    />
  </Icon>
);
