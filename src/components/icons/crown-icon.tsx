import { Icon } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const CrownIcon = ({ fill = '#AFAFAF', ...props }) => (
  <Icon width='16' height='16' viewBox='0 0 16 16' fill='none' {...props}>
    <Path
      d='M2.6991 3.86792L5.23576 6.09992L7.49576 3.31725C7.55905 3.23946 7.63907 3.17694 7.72986 3.13437C7.82065 3.09179 7.91989 3.07024 8.02016 3.07133C8.12044 3.07242 8.21918 3.09612 8.30903 3.14066C8.39887 3.1852 8.47752 3.24944 8.5391 3.32859L10.6958 6.09925L13.3144 3.83525C13.4173 3.74653 13.5447 3.69133 13.6798 3.67704C13.8149 3.66275 13.9511 3.69007 14.0702 3.75532C14.1893 3.82057 14.2857 3.92065 14.3464 4.04216C14.407 4.16367 14.4292 4.30082 14.4098 4.43525L13.4098 11.3333H2.61443L1.5991 4.46659C1.57893 4.33141 1.60079 4.1933 1.66173 4.07096C1.72267 3.94863 1.81973 3.84798 1.93978 3.78264C2.05982 3.71731 2.19705 3.69045 2.33287 3.7057C2.46868 3.72096 2.59653 3.77759 2.6991 3.86792ZM2.66643 11.9999H13.3331V12.6666C13.3331 12.8434 13.2629 13.013 13.1378 13.138C13.0128 13.263 12.8432 13.3333 12.6664 13.3333H3.3331C3.15629 13.3333 2.98672 13.263 2.86169 13.138C2.73667 13.013 2.66643 12.8434 2.66643 12.6666V11.9999Z'
      fill={fill}
    />
  </Icon>
);