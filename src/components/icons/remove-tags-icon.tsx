import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const RemoveTagIcon = ({ fill = '#000', ...props }: IIconProps) => {
  return (
    <Icon
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      {...props}
    >
      <Path
        d="M5.848 5.002l3.775-3.776a.6.6 0 10-.849-.848L5 4.153 1.224.378a.6.6 0 10-.849.848L4.15 5.002.375 8.777a.6.6 0 10.849.848L4.999 5.85l3.775 3.775a.599.599 0 00.85 0 .6.6 0 000-.849L5.847 5.002z"
        fill="#E80025"
      />
    </Icon>
  )
}

