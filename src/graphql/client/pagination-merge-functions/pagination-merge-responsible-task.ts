import { KeyArgsFunction, KeySpecifier } from '@apollo/client/cache/inmemory/policies';

import { TasksList } from '../../generated';

export const paginationMergeResponsibleTask = (
  keyArguments?: KeySpecifier | KeyArgsFunction | false,
) => {
  return {
    ['getMyProjectsRoleMaintainer']: {
      keyArgs: keyArguments,
      merge(existing: TasksList, incoming: TasksList, { args }) {
        return {
          ...incoming,
          rows:
            args?.data?.offset === 0
              ? [...incoming.rows]
              : [...(existing?.rows || []), ...incoming.rows],
        };
      },
    },
  };
};
