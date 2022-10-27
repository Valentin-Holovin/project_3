import { Text } from 'native-base';
import React from 'react';

type UserNamePropsTypes = {
  name?: string | null;
};

export const UsersName = (props: UserNamePropsTypes) => {
  return (
    <Text fontSize={'md'} fontWeight={400} color={'primary.700'}>
      {props.name || 'Имя пользователя'}
    </Text>
  );
};
