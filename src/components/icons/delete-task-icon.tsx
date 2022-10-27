import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const DeleteTaskIcon = (props: IIconProps) => (
  <Icon width='20' height='20' viewBox='0 0 20 20' fill='none' {...props}>
    <Path d='M7.5 7.5H8.75V14.1667H7.5V7.5ZM11.25 7.5H12.5V14.1667H11.25V7.5Z' fill='#E80025' />
    <Path
      d='M3.33398 4.64286V5.71429H4.4451V16.4286C4.4451 16.7127 4.56216 16.9853 4.77053 17.1862C4.97891 17.3871 5.26152 17.5 5.55621 17.5H14.4451C14.7398 17.5 15.0224 17.3871 15.2308 17.1862C15.4391 16.9853 15.5562 16.7127 15.5562 16.4286V5.71429H16.6673V4.64286H3.33398ZM5.55621 16.4286V5.71429H14.4451V16.4286H5.55621ZM7.77843 2.5H12.2229V3.57143H7.77843V2.5Z'
      fill='#E80025'
    />
  </Icon>
);
