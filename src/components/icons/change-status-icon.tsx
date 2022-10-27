import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const ChangeStatusIcon = (props: IIconProps) => (
  <Icon width='20' height='20' viewBox='0 0 20 20' fill='none' {...props}>
    <Path
      d='M13.7494 9.16665L10.8327 6.24998L11.9993 5.08331L13.7494 6.83331L17.2494 3.33331L18.416 4.49998L13.7494 9.16665ZM9.16602 5.83331H1.66602V7.49998H9.16602V5.83331ZM17.4994 11.1666L16.3327 9.99998L14.166 12.1666L11.9993 9.99998L10.8327 11.1666L12.9994 13.3333L10.8327 15.5L11.9993 16.6666L14.166 14.5L16.3327 16.6666L17.4994 15.5L15.3327 13.3333L17.4994 11.1666ZM9.16602 12.5H1.66602V14.1666H9.16602V12.5Z'
      fill='#303030'
    />
  </Icon>
);