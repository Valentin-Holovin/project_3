import { Box } from 'native-base';
import React from 'react';

import { LoginField } from '../../login-field/login-field';

type UserLoginPropsType = {
  login?: string | null;
};

export const UserLogin = ({ login }: UserLoginPropsType) => {
  return (
    <Box marginTop={'10px'}>
      <LoginField login={login} defaultText={'Login'} />
    </Box>
  );
};
