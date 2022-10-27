import * as GENERATED from '../../graphql/generated/index';

export const useGetTaskNotesQuery = ({ ...options }) => {
  return GENERATED.useGetTaskNotesQuery({
    ...options,
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });
};
