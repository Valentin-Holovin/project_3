import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const EntryIcon = (props: IIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      d='M19.5 22.5h-9A1.5 1.5 0 019 21v-2.25h1.5V21h9V3h-9v2.25H9V3a1.5 1.5 0 011.5-1.5h9A1.5 1.5 0 0121 3v18a1.5 1.5 0 01-1.5 1.5z'
      fill='#AFAFAF'
    />
    <Path
      d='M10.943 15.443l2.684-2.693H3v-1.5h10.627l-2.684-2.693L12 7.5l4.5 4.5-4.5 4.5-1.057-1.057z'
      fill='#AFAFAF'
    />
  </Icon>
);
