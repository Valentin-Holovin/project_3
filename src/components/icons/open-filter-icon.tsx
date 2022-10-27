import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import {Path } from 'react-native-svg';

export const OpenFilterIcon = (props: IIconProps) => {
  return (
    <Icon
      width={24}
      height={24}
      fill="none"
      {...props}
    >
    <Path
      d="M22.5 8.56 21.44 7.5 18 10.94 14.56 7.5 13.5 8.56 16.94 12l-3.44 3.439 1.061 1.061L18 13.06l3.44 3.44 1.06-1.06L19.06 12l3.44-3.44Z"
      fill="#303030"
    />
    <Path
      d="M3 3a1.5 1.5 0 0 0-1.5 1.5v2.378a1.5 1.5 0 0 0 .44 1.06L7.5 13.5v6A1.5 1.5 0 0 0 9 21h3a1.5 1.5 0 0 0 1.5-1.5V18H12v1.5H9v-6.623l-.44-.438L3 6.879V4.5h15V6h1.5V4.5A1.5 1.5 0 0 0 18 3H3Z"
      fill="#303030"
    />
    </Icon>
  );
};
