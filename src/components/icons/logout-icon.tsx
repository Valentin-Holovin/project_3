import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const LogoutIcon = (props: IIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      d='M5.375 21h8.25c.365 0 .714-.136.972-.377s.403-.568.403-.909v-1.928h-1.375v1.928h-8.25V4.286h8.25v1.928H15V4.286c0-.341-.145-.668-.403-.909A1.426 1.426 0 0013.625 3h-8.25c-.365 0-.714.136-.972.377A1.246 1.246 0 004 4.286v15.428c0 .341.145.668.403.909s.607.377.972.377z'
      fill='#303030'
    />
    <Path
      d='M15.057 15.057l2.391-2.39H8v-1.334h9.448l-2.39-2.39L16 8l4 4-4 4-.943-.943z'
      fill='#303030'
    />
  </Icon>
);
