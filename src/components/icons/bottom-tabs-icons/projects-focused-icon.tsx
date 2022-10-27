import { Icon } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

import { IBottomTabsIconProps } from '../../../types/navigations';

export const ProjectsFocusedIcon = (props: IBottomTabsIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6 3.6A2.4 2.4 0 003.6 6v12A2.4 2.4 0 006 20.4h12a2.4 2.4 0 002.4-2.4V6A2.4 2.4 0 0018 3.6H6zm.352 2.751A1.2 1.2 0 006 7.2v2.4a1.2 1.2 0 001.2 1.2h2.4a1.2 1.2 0 001.2-1.2V7.2A1.2 1.2 0 009.6 6H7.2a1.2 1.2 0 00-.848.351zm0 7.2A1.2 1.2 0 006 14.4v2.4A1.2 1.2 0 007.2 18h2.4a1.2 1.2 0 001.2-1.2v-2.4a1.2 1.2 0 00-1.2-1.2H7.2a1.2 1.2 0 00-.848.352zm7.2-7.2a1.2 1.2 0 00-.352.849v2.4a1.2 1.2 0 001.2 1.2h2.4A1.2 1.2 0 0018 9.6V7.2A1.2 1.2 0 0016.8 6h-2.4a1.2 1.2 0 00-.848.351zm0 7.2a1.2 1.2 0 00-.352.849v2.4a1.2 1.2 0 001.2 1.2h2.4a1.2 1.2 0 001.2-1.2v-2.4a1.2 1.2 0 00-1.2-1.2h-2.4a1.2 1.2 0 00-.848.352z'
      fill='#fff'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.4 6A3.6 3.6 0 016 2.4h12A3.6 3.6 0 0121.6 6v12a3.6 3.6 0 01-3.6 3.6H6A3.6 3.6 0 012.4 18V6zM6 3.6A2.4 2.4 0 003.6 6v12A2.4 2.4 0 006 20.4h12a2.4 2.4 0 002.4-2.4V6A2.4 2.4 0 0018 3.6H6z'
      fill='#fff'
      stroke='#fff'
    />
  </Icon>
);
