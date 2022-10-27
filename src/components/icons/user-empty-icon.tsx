import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Circle, G, Mask, Path } from 'react-native-svg';

export const UserEmptyIcon = (props: IIconProps) => (
  <Icon width='20' height='20' viewBox='0 0 20 20' fill='none' {...props}>
    <Mask
      id='mask0_5496_3675'
      style='mask-type:alpha'
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='20'
      height='20'
    >
      <Circle cx='10' cy='10' r='10' fill='white' />
    </Mask>
    <G mask='url(#mask0_5496_3675)'>
      <Circle cx='10' cy='10' r='10' fill='#F5F5F5' />
      <Path
        d='M3 19.0588C3 13.7431 6.13402 10 10 10C13.866 10 17 13.7431 17 19.0588C17 19.0588 13.9565 21 10 21C6.34783 21 3 19.0588 3 19.0588Z'
        fill='#AFAFAF'
      />
      <Path
        d='M10 10.0001C12.2091 10.0001 14 8.20926 14 6.00012C14 3.79098 12.2091 2.00012 10 2.00012C7.79086 2.00012 6 3.79098 6 6.00012C6 8.20926 7.79086 10.0001 10 10.0001Z'
        fill='#AFAFAF'
      />
    </G>
  </Icon>
);
