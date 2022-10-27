import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const AddTagsIcon = (props: IIconProps) => (
    <Icon
      width='11' height='12' viewBox='0 0 12 12' fill='none' {...props}
    >
    <Path
    d="M11.466 5.464H6.542V.539a.54.54 0 00-1.078 0v4.922H.539a.53.53 0 00-.38.158.54.54 0 00.381.92h4.92v4.922a.54.54 0 001.08 0V6.542h4.92a.54.54 0 00.54-.54.531.531 0 00-.534-.538z"
    fill="#AFAFAF"
    />
  </Icon>
)

