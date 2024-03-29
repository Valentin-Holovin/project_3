import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const InfoIcon = (props: IIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      d='M12 1.5C6.202 1.5 1.5 6.202 1.5 12S6.202 22.5 12 22.5 22.5 17.798 22.5 12 17.798 1.5 12 1.5zm0 19.219A8.72 8.72 0 013.281 12 8.72 8.72 0 0112 3.281 8.72 8.72 0 0120.719 12 8.72 8.72 0 0112 20.719z'
      fill='#303030'
    />
    <Path
      d='M10.875 7.875a1.125 1.125 0 102.25 0 1.125 1.125 0 00-2.25 0zm1.688 2.625h-1.126a.188.188 0 00-.187.188v6.374c0 .104.084.188.188.188h1.124a.188.188 0 00.188-.188v-6.375a.188.188 0 00-.188-.187z'
      fill='#303030'
    />
  </Icon>
);
