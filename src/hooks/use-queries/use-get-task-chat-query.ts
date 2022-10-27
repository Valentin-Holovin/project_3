import * as GENERATED from '../../graphql/generated/index';

export const useGetTaskChatQuery = ({ ...options }) => {
  return GENERATED.useGetTaskChatQuery({
    ...options,
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });
};
