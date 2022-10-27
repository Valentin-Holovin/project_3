import { Box } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { useAdminEditUser } from '../../../hooks';
import { NameField } from '../../name-field/name-field';

const defaultText = 'Имя пользователя';

type UserNameType = {
  name?: string;
  userId: string;
};

export const UserName = ({ name, userId }: UserNameType) => {
  const [adminEditUser] = useAdminEditUser();

  const editUserCallback = React.useCallback(async (argument: string) => {
    await adminEditUser({
      variables: {
        data: {
          idUser: `${userId}`,
          fullName: argument,
        },
      },
    });
  }, []);

  return (
    <Box style={styles.wrapper}>
      <NameField name={name} defaultText={defaultText} onExitCallback={editUserCallback} />
    </Box>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
});
