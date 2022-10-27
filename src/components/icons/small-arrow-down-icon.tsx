import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const SmallArrowDownIcon = (props: IIconProps) => {
  return (
    <Icon viewBox='0 0 20 20' fill='none' {...props}>
      <Path
        d='M15.539 8.302l-4.828 4.75a1.025 1.025 0 01-.71.281c-.258 0-.515-.094-.71-.281l-4.828-4.75c-.633-.6-.185-1.635.712-1.635h9.651c.895 0 1.344 1.034.713 1.635z'
        fill='#303030'
      />
    </Icon>
  );
};
