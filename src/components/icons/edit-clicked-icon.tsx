import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

interface IEditClickedIcon extends IIconProps {
  stroke: string;
}

export const EditClickedIcon = (props: IEditClickedIcon) => (
  <Icon viewBox='0 0 12 12' {...props}>
    <Path
      d='M8.188 11H2.146A1.147 1.147 0 011 9.852V3.812c0-.632.514-1.146 1.146-1.146h3.542a.313.313 0 010 .625H2.146a.522.522 0 00-.521.52v6.042c0 .287.234.521.52.521h6.043c.287 0 .52-.234.52-.52V6.311a.313.313 0 01.625 0v3.541c0 .632-.513 1.146-1.146 1.146z'
      stroke={props.stroke}
      strokeWidth={0.3}
    />
    <Path
      d='M4.655 7.657a.312.312 0 01-.306-.374l.294-1.473a.312.312 0 01.086-.16l4.315-4.315a1.147 1.147 0 011.956.81c0 .306-.12.594-.336.81L6.35 7.27a.31.31 0 01-.16.086l-1.472.294a.308.308 0 01-.062.007zm1.473-.607h.005-.005zm-.89-1.025l-.184.92.92-.183 4.248-4.249a.518.518 0 000-.736.522.522 0 00-.736 0L5.238 6.025z'
      stroke={props.stroke}
      strokeWidth={0.2}
    />
    <Path
      d='M9.854 3.636a.31.31 0 01-.22-.091l-1.179-1.18a.313.313 0 11.442-.441l1.178 1.179a.313.313 0 01-.22.533z'
      stroke={props.stroke}
      strokeWidth={0.2}
    />
  </Icon>
);
