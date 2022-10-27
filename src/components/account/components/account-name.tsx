import React from 'react';

import { useEditUser } from '../../../hooks';
import { NameField } from '../../name-field/name-field';

const defaultText = 'Имя пользователя';

type UserNameType = {
  name?: string;
};

export const AccountName = ({ name }: UserNameType) => {
  const [editUser] = useEditUser();

  const editUserCallback = (arg: string) => {
    editUser({
      variables: {
        data: {
          fullName: arg,
        },
      },
    });
  };

  return <NameField name={name} defaultText={defaultText} onExitCallback={editUserCallback} />;
};
