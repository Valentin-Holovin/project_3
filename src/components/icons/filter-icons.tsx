import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const FilterIcon = ({ fill = '#000', ...props }: IIconProps) => {
  return (
    <Icon
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M10.5 18h-3A1.5 1.5 0 016 16.5v-5.693L.442 5.25A1.5 1.5 0 010 4.192V1.5A1.5 1.5 0 011.5 0h15A1.5 1.5 0 0118 1.5v2.692a1.5 1.5 0 01-.442 1.058L12 10.807V16.5a1.5 1.5 0 01-1.5 1.5zm-9-16.5v2.692l6 6V16.5h3v-6.307l6-6V1.5h-15z"
        fill="#303030"
      />
    </Icon>
  )
}
