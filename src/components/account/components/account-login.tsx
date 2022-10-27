import React from 'react';

import { LoginField } from '../../login-field/login-field';

type AccountLoginPropsType = {
  login?: string | null;
};

export const AccountLogin = ({ login }: AccountLoginPropsType) => {
  return <LoginField login={login} defaultText={'Login'} />;
};
