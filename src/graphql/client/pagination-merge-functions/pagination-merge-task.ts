import { KeyArgsFunction, KeySpecifier } from '@apollo/client/cache/inmemory/policies';

import { TasksList } from '../../generated';

export const paginationMergeTask = (keyArguments?: KeySpecifier | KeyArgsFunction | false) => {
  return {
    ['getTasksSubtasks']: {
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
