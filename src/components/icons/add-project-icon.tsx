import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const AddProjectIcon = ({ fill = '#303030', ...props }: IIconProps) => (
  <Icon viewBox='0 0 24 24' {...props}>
    <Path
      d='M3 6.25C3 5.38805 3.34241 4.5614 3.9519 3.9519C4.5614 3.34241 5.38805 3 6.25 3H17.75C18.612 3 19.4386 3.34241 20.0481 3.9519C20.6576 4.5614 21 5.38805 21 6.25V12.022C19.752 11.2238 18.2687 10.8759 16.7959 11.0359C15.3232 11.1958 13.9492 11.8541 12.9017 12.9017C11.8541 13.9492 11.1958 15.3232 11.0359 16.7959C10.8759 18.2687 11.2238 19.752 12.022 21H6.25C5.38805 21 4.5614 20.6576 3.9519 20.0481C3.34241 19.4386 3 18.612 3 17.75V6.25ZM12.5 9.25C12.5 9.664 12.836 10 13.25 10H16.75C16.9489 10 17.1397 9.92098 17.2803 9.78033C17.421 9.63968 17.5 9.44891 17.5 9.25C17.5 9.05109 17.421 8.86032 17.2803 8.71967C17.1397 8.57902 16.9489 8.5 16.75 8.5H13.25C13.0511 8.5 12.8603 8.57902 12.7197 8.71967C12.579 8.86032 12.5 9.05109 12.5 9.25ZM10.78 8.78C10.8537 8.71134 10.9128 8.62854 10.9538 8.53654C10.9948 8.44454 11.0168 8.34522 11.0186 8.24452C11.0204 8.14382 11.0018 8.04379 10.9641 7.9504C10.9264 7.85701 10.8703 7.77218 10.799 7.70096C10.7278 7.62974 10.643 7.5736 10.5496 7.53588C10.4562 7.49816 10.3562 7.47963 10.2555 7.48141C10.1548 7.48319 10.0555 7.50523 9.96346 7.54622C9.87146 7.58721 9.78866 7.64631 9.72 7.72L8.25 9.19L7.78 8.72C7.63783 8.58752 7.44978 8.5154 7.25548 8.51882C7.06118 8.52225 6.87579 8.60097 6.73838 8.73838C6.60097 8.87579 6.52225 9.06118 6.51883 9.25548C6.5154 9.44978 6.58752 9.63783 6.72 9.78L7.72 10.78C7.86063 10.9205 8.05125 10.9993 8.25 10.9993C8.44875 10.9993 8.63937 10.9205 8.78 10.78L10.78 8.78ZM10.78 13.22C10.6394 13.0795 10.4488 13.0007 10.25 13.0007C10.0512 13.0007 9.86063 13.0795 9.72 13.22L8.25 14.69L7.78 14.22C7.63783 14.0875 7.44978 14.0154 7.25548 14.0188C7.06118 14.0223 6.87579 14.101 6.73838 14.2384C6.60097 14.3758 6.52225 14.5612 6.51883 14.7555C6.5154 14.9498 6.58752 15.1378 6.72 15.28L7.72 16.28C7.86063 16.4205 8.05125 16.4993 8.25 16.4993C8.44875 16.4993 8.63937 16.4205 8.78 16.28L10.78 14.28C10.9205 14.1394 10.9993 13.9488 10.9993 13.75C10.9993 13.5512 10.9205 13.3606 10.78 13.22ZM23 17.5C23 16.0413 22.4205 14.6424 21.3891 13.6109C20.3576 12.5795 18.9587 12 17.5 12C16.0413 12 14.6424 12.5795 13.6109 13.6109C12.5795 14.6424 12 16.0413 12 17.5C12 18.9587 12.5795 20.3576 13.6109 21.3891C14.6424 22.4205 16.0413 23 17.5 23C18.9587 23 20.3576 22.4205 21.3891 21.3891C22.4205 20.3576 23 18.9587 23 17.5ZM18 18L18.001 20.503C18.001 20.6356 17.9483 20.7628 17.8546 20.8566C17.7608 20.9503 17.6336 21.003 17.501 21.003C17.3684 21.003 17.2412 20.9503 17.1474 20.8566C17.0537 20.7628 17.001 20.6356 17.001 20.503V18H14.496C14.3634 18 14.2362 17.9473 14.1424 17.8536C14.0487 17.7598 13.996 17.6326 13.996 17.5C13.996 17.3674 14.0487 17.2402 14.1424 17.1464C14.2362 17.0527 14.3634 17 14.496 17H17V14.5C17 14.3674 17.0527 14.2402 17.1464 14.1464C17.2402 14.0527 17.3674 14 17.5 14C17.6326 14 17.7598 14.0527 17.8536 14.1464C17.9473 14.2402 18 14.3674 18 14.5V17H20.497C20.6296 17 20.7568 17.0527 20.8506 17.1464C20.9443 17.2402 20.997 17.3674 20.997 17.5C20.997 17.6326 20.9443 17.7598 20.8506 17.8536C20.7568 17.9473 20.6296 18 20.497 18H18Z'
      fill={fill}
    />
  </Icon>
);
