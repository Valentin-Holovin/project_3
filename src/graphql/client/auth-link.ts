import { setContext } from '@apollo/client/link/context';

import { AsyncStore } from '../../services';

export const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStore.getValue('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
