import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const ShareIcon = (props: IIconProps) => (
  <Icon viewBox='0 0 20 20' {...props}>
    <Path
      d='M4.583 12.5a2.899 2.899 0 001.964-.775l5.217 2.98a2.933 2.933 0 10.855-1.43l-5.217-2.98c.055-.21.085-.425.09-.64l5.125-2.93a2.907 2.907 0 10-.95-2.142c.003.24.035.48.097.711L7.027 8a2.917 2.917 0 10-2.444 4.5z'
      fill='#149939'
    />
  </Icon>
);
