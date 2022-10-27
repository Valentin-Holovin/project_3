import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const SortingIcon = (props: IIconProps) => {
  return (
    <Icon width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        d='M7.864 11h8.272c.768 0 1.152-.93.61-1.472l-4.134-4.275a.86.86 0 00-1.218 0L7.254 9.53c-.542.54-.159 1.472.61 1.472zm8.27 2h-8.27c-.768 0-1.152.93-.61 1.473l4.14 4.274A.804.804 0 0012 19c.22 0 .44-.084.61-.253l4.134-4.275c.543-.54.159-1.472-.61-1.472z'
        fill='#303030'
      />
    </Icon>
  );
};
