import { KeyArgsFunction, KeySpecifier } from '@apollo/client/cache/inmemory/policies';

export const paginationMergeOnlyIncoming = (
  key: string,
  keyArguments?: KeySpecifier | KeyArgsFunction,
) => {
  return {
    [key]: {
      keyArgs: keyArguments,
      merge(existing = [], incoming: any[]) {
        return incoming;
      },
    },
  };
};
