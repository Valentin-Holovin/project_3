import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const ArchiveIcon = (props: IIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      d='M9.75 12a.75.75 0 100 1.5h4.5a.75.75 0 100-1.5h-4.5zM1.5 5.25A2.25 2.25 0 013.75 3h16.5a2.25 2.25 0 012.25 2.25v1.5A2.25 2.25 0 0121 8.873v8.377A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25V8.873A2.25 2.25 0 011.5 6.75v-1.5zm2.25-.75a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H3.75zM4.5 9v8.25a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V9h-15z'
      fill='#000'
    />
  </Icon>
);
