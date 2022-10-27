import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const CloseIcon = (props: IIconProps) => (
  <Icon width='16' height='16' viewBox='0 0 16 16' fill='none' {...props}>
    <Path
      d='M9.06127 8.00189L13.7801 3.28304C14.0733 2.99011 14.0733 2.51482 13.7801 2.2219C13.4869 1.92872 13.0122 1.92872 12.719 2.2219L8.00012 6.94075L3.28102 2.2219C2.98785 1.92872 2.51306 1.92872 2.21988 2.2219C1.92671 2.51482 1.92671 2.99011 2.21988 3.28304L6.93898 8.00189L2.21988 12.7207C1.92671 13.0137 1.92671 13.489 2.21988 13.7819C2.36647 13.9282 2.55859 14.0015 2.75045 14.0015C2.94232 14.0015 3.13444 13.9282 3.28102 13.7816L8.00012 9.06278L12.719 13.7816C12.8656 13.9282 13.0577 14.0015 13.2495 14.0015C13.4414 14.0015 13.6335 13.9282 13.7801 13.7816C14.0733 13.4887 14.0733 13.0134 13.7801 12.7205L9.06127 8.00189Z'
      fill={props.color || '#AFAFAF'}
    />
  </Icon>
);
