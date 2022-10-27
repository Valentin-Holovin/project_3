import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

interface IEditClickedIcon extends IIconProps {
  fill: string;
}

export const EditIcon = (props: IEditClickedIcon) => (
  <Icon viewBox='0 0 16 16' {...props}>
    <Path
      d='M10.916 14.665H2.861a1.53 1.53 0 01-1.528-1.527V5.082a1.53 1.53 0 011.528-1.528h4.722a.417.417 0 010 .834H2.861a.695.695 0 00-.695.694v8.056c0 .383.312.694.695.694h8.055a.695.695 0 00.695-.694V8.416a.417.417 0 01.833 0v4.722a1.53 1.53 0 01-1.528 1.527v0z'
      fill={props.fill}
    />
    <Path
      d='M6.206 10.209a.416.416 0 01-.408-.499l.393-1.964a.415.415 0 01.114-.213l5.754-5.753a1.53 1.53 0 012.607 1.08c0 .408-.158.792-.447 1.08L8.465 9.694a.414.414 0 01-.212.114l-1.964.393a.41.41 0 01-.083.008v0zm1.965-.81h.006-.006zM6.983 8.033l-.245 1.228 1.227-.245L13.63 3.35a.691.691 0 000-.982.696.696 0 00-.982 0L6.983 8.033z'
      fill={props.fill}
    />
    <Path
      d='M13.139 4.848a.413.413 0 01-.294-.122l-1.572-1.572a.417.417 0 01.59-.589l1.571 1.572a.417.417 0 01-.295.711v0z'
      fill={props.fill}
    />
  </Icon>
);
