import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const DeleteIcon = (props: IIconProps) => (
  <Icon width='16' height='16' viewBox='0 0 16 16' fill='none' {...props}>
    <Path
      d='M13.5 3.38466H11V2.87184C10.9984 2.46433 10.8398 2.074 10.5588 1.78584C10.2779 1.49769 9.89732 1.33506 9.5 1.33337H6.5C6.10268 1.33506 5.72211 1.49769 5.44116 1.78584C5.16021 2.074 5.00165 2.46433 5 2.87184V3.38466H2.5C2.36739 3.38466 2.24021 3.43869 2.14645 3.53486C2.05268 3.63103 2 3.76147 2 3.89748C2 4.03349 2.05268 4.16392 2.14645 4.2601C2.24021 4.35627 2.36739 4.4103 2.5 4.4103H3V13.6411C3 13.9131 3.10536 14.174 3.29289 14.3663C3.48043 14.5587 3.73478 14.6667 4 14.6667H12C12.2652 14.6667 12.5196 14.5587 12.7071 14.3663C12.8946 14.174 13 13.9131 13 13.6411V4.4103H13.5C13.6326 4.4103 13.7598 4.35627 13.8536 4.2601C13.9473 4.16392 14 4.03349 14 3.89748C14 3.76147 13.9473 3.63103 13.8536 3.53486C13.7598 3.43869 13.6326 3.38466 13.5 3.38466ZM7 11.077C7 11.213 6.94732 11.3434 6.85355 11.4396C6.75979 11.5358 6.63261 11.5898 6.5 11.5898C6.36739 11.5898 6.24021 11.5358 6.14645 11.4396C6.05268 11.3434 6 11.213 6 11.077V6.9744C6 6.83839 6.05268 6.70795 6.14645 6.61178C6.24021 6.51561 6.36739 6.46158 6.5 6.46158C6.63261 6.46158 6.75979 6.51561 6.85355 6.61178C6.94732 6.70795 7 6.83839 7 6.9744V11.077ZM10 11.077C10 11.213 9.94732 11.3434 9.85355 11.4396C9.75979 11.5358 9.63261 11.5898 9.5 11.5898C9.36739 11.5898 9.24021 11.5358 9.14645 11.4396C9.05268 11.3434 9 11.213 9 11.077V6.9744C9 6.83839 9.05268 6.70795 9.14645 6.61178C9.24021 6.51561 9.36739 6.46158 9.5 6.46158C9.63261 6.46158 9.75979 6.51561 9.85355 6.61178C9.94732 6.70795 10 6.83839 10 6.9744V11.077ZM10 3.38466H6V2.87184C6 2.73583 6.05268 2.60539 6.14645 2.50922C6.24021 2.41304 6.36739 2.35902 6.5 2.35902H9.5C9.63261 2.35902 9.75979 2.41304 9.85355 2.50922C9.94732 2.60539 10 2.73583 10 2.87184V3.38466Z'
      fill='white'
    />
  </Icon>
);