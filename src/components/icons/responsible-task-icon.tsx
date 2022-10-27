import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import {Path } from 'react-native-svg';

export const ResponsibleTaskIcon = (props: IIconProps) => {
  return (
    <Icon
      width={14}
      height={11}
      viewBox="0 0 14 11"
      fill="none"
      {...props}
    >
      <Path
        d="M2.184 3.07L2.765 7h8.49l.579-3.987-2.329 2.014-2.503-3.218-2.606 3.207-2.212-1.945zm6.692-1.024l-.052.045.094.009.778 1 .958-.829.093.01-.041-.055 1.608-1.39a.667.667 0 011.096.6l-1 6.897H1.614L.6 1.467A.667.667 0 011.7.868l1.534 1.35-.033.04.072-.005.963.846.808-.995.073-.006-.04-.035L6.496.317A.667.667 0 017.54.33l1.336 1.717zM1.666 9h10.667v.667a.667.667 0 01-.667.666H2.333a.667.667 0 01-.667-.666V9z"
        fill={props?.color || '#AFAFAF'}
      />
    </Icon>
  );
};
