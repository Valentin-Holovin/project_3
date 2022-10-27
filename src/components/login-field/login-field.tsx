import { Text } from 'native-base';
import React from 'react';

type LoginFieldType = {
  login?: string | null;
  defaultText: string;
};

export const LoginField = ({ login, defaultText }: LoginFieldType) => {
  return <Text variant={'title400'}>{login || defaultText}</Text>;
};
