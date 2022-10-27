import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Circle, G, Mask, Path } from 'react-native-svg';

export const DefaultAvatarIcon = (props: IIconProps) => {
  return (
    <Icon width='80' height='80' viewBox='0 0 80 80' fill='none' {...props}>
      <Mask id='a' x={0} y={0} width={80} height={80}>
        <Circle cx={40} cy={40} r={40} fill='#F5F5F5' />
      </Mask>
      <G mask='url(#a)'>
        <Circle cx={40} cy={40} r={39} fill='#F5F5F5' stroke='#AFAFAF' strokeWidth={2} />
        <Path
          d='M12 76.235C12 54.972 24.536 40 40 40s28 14.972 28 36.235c0 0-12.174 7.765-28 7.765-14.609 0-28-7.765-28-7.765zM40 40c8.837 0 16-7.163 16-16S48.837 8 40 8s-16 7.163-16 16 7.163 16 16 16z'
          fill='#AFAFAF'
        />
      </G>
    </Icon>
  );
};
