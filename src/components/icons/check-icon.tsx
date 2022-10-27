import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const CheckIcon = (props: IIconProps) => (
  <Icon viewBox='0 0 16 16' {...props}>
    <Path
      d='M2.667 8l4 4 6.667-8'
      stroke='#303030'
      fill='none'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);
