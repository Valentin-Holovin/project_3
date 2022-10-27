import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

import { IBottomTabsIconProps } from '../../../types/navigations';

export const UpdatesFocusedIcon = (props: IIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <Path
        d='M21 18.26l-.205-.185a8.821 8.821 0 01-1.517-1.808 7.92 7.92 0 01-.815-2.967v-3.048a6.753 6.753 0 00-1.623-4.418A6.49 6.49 0 0012.76 3.62v-.796a.833.833 0 00-.236-.583.798.798 0 00-1.14 0 .833.833 0 00-.237.583v.808a6.492 6.492 0 00-4.033 2.23 6.754 6.754 0 00-1.602 4.39V13.3a7.92 7.92 0 01-.816 2.967 8.843 8.843 0 01-1.492 1.808L3 18.26V20h18v-1.74zM10 21c.067.277.306.531.674.715.367.184.838.285 1.326.285.488 0 .959-.101 1.326-.285.368-.184.607-.438.674-.715h-4z'
        fill='#fff'
      />
    </Icon>
  );
};
