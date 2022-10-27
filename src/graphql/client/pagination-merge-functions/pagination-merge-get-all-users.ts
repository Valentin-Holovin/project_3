import { KeyArgsFunction, KeySpecifier } from '@apollo/client/cache/inmemory/policies';

import { GetAllUsers } from '../../generated';

export const paginationMergeGetAllUsers = (
  keyArguments?: KeySpecifier | KeyArgsFunction | false,
) => {
  return {
    ['getAllUsers']: {
      keyArgs: keyArguments,
      merge(existing: GetAllUsers, incoming: GetAllUsers, { args }) {
        return {
          ...incoming,
          rows:
            args?.input?.offset === 0
              ? [...incoming.rows]
              : [...(existing?.rows || []), ...incoming.rows],
        };
      },
    },
  };
};
