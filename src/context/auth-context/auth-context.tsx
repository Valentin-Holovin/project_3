import React from 'react';

import { User } from '../../graphql/generated';

type ContextProps = {
  isAuth: boolean;
  currentUserData: User | null;
  onSuccessAuth: (token: string) => void | Promise<void>;
  onLogout: () => void | Promise<void>;
  refetchUserData: () => void;
};

export const AuthContext = React.createContext<ContextProps>({
  isAuth: false,
  currentUserData: null,
  onSuccessAuth: () => {},
  onLogout: () => {},
  refetchUserData: () => {},
});

export function useAuthContext() {
  const authContext = React.useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return authContext;
}
