import { Icon } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

import { IBottomTabsIconProps } from '../../../types/navigations';

export const ProjectsIcon = (props: IBottomTabsIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      d='M6 7.2A1.2 1.2 0 017.2 6h2.4a1.2 1.2 0 011.2 1.2v2.4a1.2 1.2 0 01-1.2 1.2H7.2A1.2 1.2 0 016 9.6V7.2zm3.6 0H7.2v2.4h2.4V7.2zM6 14.4a1.2 1.2 0 011.2-1.2h2.4a1.2 1.2 0 011.2 1.2v2.4A1.2 1.2 0 019.6 18H7.2A1.2 1.2 0 016 16.8v-2.4zm3.6 0H7.2v2.4h2.4v-2.4zM14.4 6a1.2 1.2 0 00-1.2 1.2v2.4a1.2 1.2 0 001.2 1.2h2.4A1.2 1.2 0 0018 9.6V7.2A1.2 1.2 0 0016.8 6h-2.4zm0 1.2h2.4v2.4h-2.4V7.2zm-1.2 7.2a1.2 1.2 0 011.2-1.2h2.4a1.2 1.2 0 011.2 1.2v2.4a1.2 1.2 0 01-1.2 1.2h-2.4a1.2 1.2 0 01-1.2-1.2v-2.4zm3.6 0h-2.4v2.4h2.4v-2.4zM6 2.4A3.6 3.6 0 002.4 6v12A3.6 3.6 0 006 21.6h12a3.6 3.6 0 003.6-3.6V6A3.6 3.6 0 0018 2.4H6zM3.6 6A2.4 2.4 0 016 3.6h12A2.4 2.4 0 0120.4 6v12a2.4 2.4 0 01-2.4 2.4H6A2.4 2.4 0 013.6 18V6z'
      fill='#EFEFEF'
    />
  </Icon>
);
