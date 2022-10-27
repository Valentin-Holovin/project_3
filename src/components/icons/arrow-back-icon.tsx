import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const ArrowBackIcon = ({ fill = '#303030', ...props }) => {
  return (
    <Icon width='16' height='16' viewBox='0 0 16 16' fill='none' {...props}>
      <Path
        d='M10.6364 13.853L4.64521 8.38036C4.54017 8.27583 4.49566 8.13677 4.50266 8.00024C4.49566 7.8632 4.54017 7.72463 4.64521 7.6201L10.6364 2.14704C10.833 1.95099 11.1521 1.95099 11.3487 2.14704C11.5452 2.3431 11.5452 2.66122 11.3487 2.85728L5.718 8.00028L11.3487 13.1428C11.5452 13.3388 11.5452 13.6569 11.3487 13.853C11.1521 14.049 10.833 14.049 10.6364 13.853Z'
        fill={fill}
      />
    </Icon>
  );
};
