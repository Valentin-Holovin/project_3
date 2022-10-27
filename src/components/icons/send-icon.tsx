import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const SendIcon = (props: IIconProps) => (
  <Icon width='20' height='20' viewBox='0 0 20 20' fill='none' {...props}>
    <Path
      d='M10.6797 10.1642L4.40305 11.21C4.33089 11.222 4.26317 11.2529 4.20671 11.2994C4.15024 11.3459 4.10702 11.4065 4.08139 11.475L1.91722 17.2733C1.71055 17.8067 2.26805 18.315 2.77972 18.0583L17.7797 10.5583C17.8834 10.5064 17.9706 10.4266 18.0315 10.3279C18.0924 10.2292 18.1247 10.1156 18.1247 9.99959C18.1247 9.88362 18.0924 9.76993 18.0315 9.67126C17.9706 9.57258 17.8834 9.4928 17.7797 9.44084L2.77972 1.94083C2.26805 1.685 1.71055 2.19333 1.91722 2.72583L4.08222 8.52417C4.10785 8.59269 4.15108 8.65326 4.20754 8.69978C4.26401 8.74629 4.33173 8.77712 4.40389 8.78917L10.6806 9.835C10.7197 9.84125 10.7554 9.86125 10.7811 9.89142C10.8068 9.92159 10.821 9.95994 10.821 9.99959C10.821 10.0392 10.8068 10.0776 10.7811 10.1077C10.7554 10.1379 10.7197 10.1579 10.6806 10.1642H10.6797Z'
      fill={props?.color || '#149939'}
    />
  </Icon>
);
