import { ApolloError } from '@apollo/client';
import { GraphQLErrors } from '@apollo/client/errors';
import { onError } from '@apollo/client/link/error';
import create from 'zustand';

import { handleLogout } from '../../context/auth-context';
import { AsyncStore } from '../../services';
import { client } from './client';

export const errorLink = onError(({ networkError, graphQLErrors }) => {
  const logout = async () => {
    await client.clearStore();
    await AsyncStore.deleteValue('token');
    handleLogout();
  };

  if (graphQLErrors) {
    for (const graphQLError of graphQLErrors) {
      const { message, locations, path } = graphQLError;
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);

      if (message === 'INVALID_TOKEN') logout();

      useErrorsStore.setState({
        hasError: true,
        error: graphQLError,
        date: Date.now(),
      });
    }
  }
  if (networkError) {
    console.log('networkError:', networkError);

    useErrorsStore.setState({
      hasError: true,
      error: networkError,
      date: Date.now(),
    });
  }
});

type ErrorType = {
  hasError: boolean;
  error: ApolloError | GraphQLErrors | Error | undefined;
  date: number | undefined;
};

export const useErrorsStore = create<ErrorType>(() => ({
  hasError: false,
  error: undefined,
  date: undefined,
}));
