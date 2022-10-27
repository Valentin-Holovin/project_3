import { Icon } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

import { IBottomTabsIconProps } from '../../../types/navigations';

export const TasksFocusedIcon = (props: IBottomTabsIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      d='M14.034 17.813a.76.76 0 01-.392.862.73.73 0 01-.33.075H1.687a.73.73 0 01-.59-.29.76.76 0 01-.132-.648 6.75 6.75 0 013.806-4.49 4.5 4.5 0 115.456 0 6.75 6.75 0 013.807 4.49zm.215-9.563h9a.75.75 0 100-1.5h-9a.75.75 0 000 1.5zm9 7.5H16.5a.75.75 0 100 1.5h6.75a.75.75 0 100-1.5zm0-4.5h-9a.75.75 0 100 1.5h9a.75.75 0 100-1.5z'
      fill='#fff'
    />
  </Icon>
);
