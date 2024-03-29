import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import {Path } from 'react-native-svg';

export const AllTasksIcon = (props: IIconProps) => {
  return (
    <Icon
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
    <Path
      d="M11.775 3h-1.25v-.416a.417.417 0 00-.417-.416h-.904a1.25 1.25 0 00-2.358 0h-.904a.417.417 0 00-.417.416v.417h-1.25c-.69 0-1.25.56-1.25 1.25v9.166c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25V4.25c0-.69-.56-1.25-1.25-1.25zM6.358 3h.834c.23 0 .416-.186.416-.416a.417.417 0 11.834 0c0 .23.186.417.416.417h.834v.833H6.358v-.833zm5.833 10.417c0 .23-.186.416-.416.416h-7.5a.417.417 0 01-.416-.416V4.25c0-.23.186-.417.416-.417h1.25v.417c0 .23.187.416.417.416h4.166c.23 0 .417-.186.417-.416v-.417h1.25c.23 0 .416.187.416.417v9.166z"
      fill={props?.color || '#303030'}
    />
    <Path
      d="M10.526 6.334h-5a.417.417 0 000 .833h5a.417.417 0 000-.833zM10.526 8.834h-5a.417.417 0 000 .833h5a.417.417 0 000-.833zM10.526 11.334h-5a.417.417 0 100 .833h5a.417.417 0 100-.833z"
      fill={props?.color || '#303030'}
    />
  </Icon>
  );
};
