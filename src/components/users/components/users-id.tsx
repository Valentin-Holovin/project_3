import { Text } from 'native-base';
import React from 'react';

type UserIdPropsTypes = {
  id?: number | null;
};

export const UsersId = (props: UserIdPropsTypes) => {
  return (
    <Text fontSize={'md'} fontWeight={400} color={'primary.600'}>
      id: {props.id}
    </Text>
  );
};
