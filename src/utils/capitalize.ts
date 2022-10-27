import { LabelPosition } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import React from 'react';

type CapitalizeFunction = (
  someText:
    | string
    | ((props: { focused: boolean; color: string; position: LabelPosition }) => React.ReactNode),
) => string;

export const capitalize: CapitalizeFunction = (text) => {
  if (text && typeof text === 'string') {
    return `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;
  }

  return '';
};
