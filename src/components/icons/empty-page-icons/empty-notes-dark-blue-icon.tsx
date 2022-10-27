import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { G, Path } from 'react-native-svg';

export const EmptyNotesDarkBlueIcon = (props: IIconProps) => (
  <Icon width='125' height='132' viewBox='0 0 125 132' fill='none' {...props}>
    <Path
      d='M14.4274 17.0099L10.7344 104.566L24.9892 119.287L111.712 122.952L115.999 21.2998L14.4274 17.0099Z'
      fill='#94B7EB'
    />
    <Path
      d='M114.265 19.563L12.693 15.2731L9 102.829L23.2549 117.55L109.978 121.215L114.265 19.563Z'
      fill='#F5F5F5'
    />
    <Path d='M23.2549 117.55L9 102.829L23.8519 103.458L23.2549 117.55Z' fill='#AFAFAF' />
    <G opacity='0.8'>
      <Path
        d='M99.8605 11.5877L49.3663 9.04852C49.2239 9.81966 48.981 10.6429 48.9324 11.0563C48.5994 13.8637 48.4776 16.6923 48.5679 19.518L99.8327 22.0989C99.8327 19.7542 99.8327 17.413 99.8848 15.0718C99.9021 14.0193 99.7806 12.741 99.8605 11.5877Z'
        fill='#94B7EB'
      />
    </G>
  </Icon>
);
