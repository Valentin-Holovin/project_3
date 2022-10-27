import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';
import { Center, Spinner, Text } from 'native-base';
import React from 'react';

type Props = {
  loading: boolean;
  error?: ApolloError | GraphQLError | Error;
  children: React.ReactElement;
};

export const RequestHandler = ({ loading, error, children }: Props) => {
  if (loading) {
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );
  }

  if (error) {
    return (
      <Center flex={1}>
        <Text color='red.400'>{error.message}</Text>
      </Center>
    );
  }

  return children;
};
