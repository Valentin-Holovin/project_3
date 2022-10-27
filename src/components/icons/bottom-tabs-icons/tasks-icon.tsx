import { Icon } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

import { IBottomTabsIconProps } from '../../../types/navigations';

export const TasksIcon = (props: IBottomTabsIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      d='M13.688 7.5a.563.563 0 01.562-.562h9a.563.563 0 010 1.125h-9a.562.562 0 01-.563-.563zm9.562 3.938h-9a.562.562 0 000 1.124h9a.563.563 0 000-1.124zm0 4.5H16.5a.562.562 0 000 1.124h6.75a.563.563 0 000-1.125zm-9.394 1.921a.563.563 0 01-.403.685l-.14.018a.562.562 0 01-.544-.421 5.447 5.447 0 00-10.538 0 .562.562 0 01-1.087-.282 6.553 6.553 0 014.012-4.49 4.313 4.313 0 114.688 0 6.552 6.552 0 014.012 4.49zM7.5 12.937A3.187 3.187 0 104.313 9.75 3.197 3.197 0 007.5 12.938z'
      fill='#EFEFEF'
    />
  </Icon>
);
