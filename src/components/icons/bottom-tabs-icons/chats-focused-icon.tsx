import { Icon } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

import { IBottomTabsIconProps } from '../../../types/navigations';

export const ChatsFocusedIcon = (props: IBottomTabsIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      d='M22 12c0 4.832-4.477 8.75-10 8.75-.99.001-1.977-.127-2.934-.383-.73.37-2.406 1.08-5.226 1.543-.25.04-.44-.22-.341-.453.442-1.044.842-2.437.962-3.707C2.93 16.212 2 14.2 2 12c0-4.832 4.478-8.75 10-8.75 5.523 0 10 3.918 10 8.75zM8.25 12a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zm5 0a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM17 13.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z'
      fill='#fff'
    />
  </Icon>
);
