import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { G, Path } from 'react-native-svg';

export const EmptyNotesIcon = (props: IIconProps) => (
  <Icon width='125' height='132' viewBox='0 0 125 132' fill='none' {...props}>
    <Path
      d='M14.4274 17.0098L10.7344 104.566L24.9892 119.287L111.712 122.951L115.999 21.2997L14.4274 17.0098Z'
      fill='#61A71B'
    />
    <Path
      d='M114.265 19.563L12.693 15.2731L9 102.829L23.2549 117.55L109.978 121.215L114.265 19.563Z'
      fill='#F5F5F5'
    />
    <Path d='M23.2549 117.55L9 102.829L23.8519 103.458L23.2549 117.55Z' fill='#AFAFAF' />
    <G opacity='0.8'>
      <Path
        d='M99.8605 11.5877L49.3663 9.04846C49.2239 9.8196 48.981 10.6429 48.9324 11.0562C48.5994 13.8637 48.4776 16.6922 48.5679 19.5179L99.8327 22.0988C99.8327 19.7541 99.8327 17.4129 99.8848 15.0717C99.9021 14.0192 99.7806 12.7409 99.8605 11.5877Z'
        fill='#7CBF3A'
      />
    </G>
  </Icon>
);
