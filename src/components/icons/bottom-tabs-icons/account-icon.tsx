import { Icon } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

import { IBottomTabsIconProps } from '../../../types/navigations';

export const AccountIcon = (props: IBottomTabsIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      d='M12 7a3 3 0 100 6 3 3 0 000-6zm0 4.8a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6z'
      fill='#EFEFEF'
    />
    <Path
      d='M12 3a9 9 0 109 9 9.01 9.01 0 00-9-9zM8.143 18.67v-.884a1.93 1.93 0 011.928-1.929h3.858a1.93 1.93 0 011.928 1.929v.885a7.649 7.649 0 01-7.714 0zm8.995-.932a3.215 3.215 0 00-3.21-3.167h-3.857a3.215 3.215 0 00-3.209 3.167 7.714 7.714 0 1110.276 0z'
      fill='#EFEFEF'
    />
  </Icon>
);
