import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const CopyIcon = (props: IIconProps) => (
  <Icon viewBox='0 0 16 16' {...props}>
    <Path
      d='M12 6h-2V3.78A1.787 1.787 0 008.22 2H3.78A1.787 1.787 0 002 3.78v4.44A1.787 1.787 0 003.78 10H6v2a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2zM6 8v.667H3.78a.447.447 0 01-.447-.447V3.78a.447.447 0 01.447-.447h4.44a.447.447 0 01.447.447V6H8a2 2 0 00-2 2z'
      fill='#AFAFAF'
    />
  </Icon>
);
