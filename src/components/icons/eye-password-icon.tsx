import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import { Path } from 'react-native-svg';

export const EyePasswordIcon = ({ fill = '#000', ...props }: IIconProps) => {
  return (
    <Icon viewBox='0 0 20 20' fill='none' {...props}>
      <Path
        d='M2.85366 2.14599C2.80717 2.0995 2.75198 2.06263 2.69124 2.03747C2.6305 2.01231 2.5654 1.99936 2.49966 1.99936C2.43391 1.99936 2.36881 2.01231 2.30807 2.03747C2.24733 2.06263 2.19214 2.0995 2.14565 2.14599C2.09917 2.19248 2.06229 2.24767 2.03713 2.30841C2.01197 2.36915 1.99902 2.43425 1.99902 2.49999C1.99902 2.56573 2.01197 2.63083 2.03713 2.69157C2.06229 2.75231 2.09917 2.8075 2.14565 2.85399L5.64565 6.35199C3.91223 7.53432 2.70546 9.34339 2.27965 11.398C2.26626 11.4623 2.26567 11.5287 2.27792 11.5933C2.29017 11.6578 2.31502 11.7194 2.35105 11.7743C2.38708 11.8293 2.43358 11.8767 2.4879 11.9137C2.54223 11.9507 2.60331 11.9766 2.66765 11.99C2.732 12.0034 2.79836 12.004 2.86293 11.9917C2.92751 11.9795 2.98904 11.9546 3.04401 11.9186C3.09898 11.8826 3.14632 11.8361 3.18332 11.7817C3.22032 11.7274 3.24626 11.6663 3.25965 11.602C3.45042 10.6786 3.82347 9.80246 4.35697 9.02497C4.89046 8.24747 5.57369 7.58421 6.36666 7.07399L7.95265 8.65999C7.54143 8.95652 7.19953 9.33885 6.95061 9.78053C6.7017 10.2222 6.55171 10.7127 6.51102 11.218C6.47034 11.7234 6.53993 12.2316 6.71498 12.7074C6.89003 13.1832 7.16637 13.6153 7.52486 13.9738C7.88336 14.3323 8.31546 14.6086 8.79127 14.7837C9.26708 14.9587 9.77524 15.0283 10.2806 14.9876C10.786 14.9469 11.2764 14.7969 11.7181 14.548C12.1598 14.2991 12.5421 13.9572 12.8387 13.546L17.1457 17.854C17.2395 17.9479 17.3669 18.0006 17.4997 18.0006C17.6324 18.0006 17.7598 17.9479 17.8537 17.854C17.9475 17.7601 18.0003 17.6328 18.0003 17.5C18.0003 17.3672 17.9475 17.2399 17.8537 17.146L2.85366 2.14599ZM12.1187 12.826C11.9191 13.1444 11.6503 13.4138 11.3322 13.614C11.0142 13.8142 10.6551 13.9401 10.2817 13.9824C9.90823 14.0247 9.53007 13.9823 9.17531 13.8582C8.82055 13.7342 8.49832 13.5318 8.23258 13.2661C7.96684 13.0003 7.76443 12.6781 7.6404 12.3233C7.51638 11.9686 7.47393 11.5904 7.51622 11.217C7.55851 10.8436 7.68445 10.4845 7.88466 10.1664C8.08488 9.84839 8.35422 9.57958 8.67266 9.37999L12.1187 12.827V12.826ZM10.1237 8.00199L13.4977 11.376C13.4663 10.4911 13.1008 9.65101 12.4747 9.02493C11.8486 8.39884 11.0085 8.03331 10.1237 8.00199ZM9.99965 5.99999C9.42965 5.99999 8.87065 6.07399 8.33365 6.21299L7.53065 5.40999C8.32556 5.13867 9.15972 5.00015 9.99965 4.99999C13.6927 4.99999 16.9417 7.67299 17.7197 11.398C17.7467 11.5279 17.721 11.6633 17.6483 11.7743C17.5755 11.8854 17.4616 11.9629 17.3317 11.99C17.2017 12.017 17.0663 11.9914 16.9553 11.9186C16.8443 11.8458 16.7667 11.7319 16.7397 11.602C16.0577 8.32699 13.2067 5.99999 9.99965 5.99999Z'
        fill={fill}
      />
    </Icon>
  );
};
