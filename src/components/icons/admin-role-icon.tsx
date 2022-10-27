import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const AdminRoleIcon = (props: IIconProps) => (
  <Icon viewBox='0 0 16 16' {...props}>
    <Path
      d='M8 15.333c-3.705-.823-6.667-4.318-6.667-8v-4L8 .667l6.666 2.666v4c0 3.683-2.962 7.177-6.666 8zM2.666 4v3.333A7.053 7.053 0 008 14a7.054 7.054 0 005.333-6.667V4L8 2 2.666 4z'
      fill='#fff'
    />
    <Path
      d='M8 7.333A1.667 1.667 0 108 4a1.667 1.667 0 000 3.333zM4.667 10A3.855 3.855 0 008 12a3.854 3.854 0 003.334-2C11.317 8.736 9.106 8 8 8c-1.111 0-3.316.736-3.333 2z'
      fill='#fff'
    />
  </Icon>
);
