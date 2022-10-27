import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import {Path } from 'react-native-svg';

export const MyTasksIcon = (props: IIconProps) => {
  return (
    <Icon
      width={16}
      height={10}
      viewBox="0 0 16 10"
      fill="none"
      {...props}
    >
      <Path
        d="M9.126 2a.375.375 0 01.375-.375h6a.375.375 0 010 .75h-6A.375.375 0 019.126 2zM15.5 4.625h-6a.375.375 0 100 .75h6a.375.375 0 000-.75zm0 3H11a.375.375 0 100 .75h4.5a.375.375 0 000-.75zM9.238 8.906a.375.375 0 01-.269.456l-.093.013a.375.375 0 01-.363-.281 3.631 3.631 0 00-7.025 0 .375.375 0 01-.725-.188 4.369 4.369 0 012.675-2.994 2.875 2.875 0 113.125 0 4.369 4.369 0 012.675 2.994zM5.001 5.625A2.125 2.125 0 102.876 3.5 2.131 2.131 0 005 5.625z"
        fill={props?.color || '#AFAFAF'}
      />
    </Icon>
  );
};
