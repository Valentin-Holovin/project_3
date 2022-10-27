import { KeyArgsFunction, KeySpecifier } from '@apollo/client/cache/inmemory/policies';

import { ProjectsList } from '../../generated';

export const paginationMergeGetAllProjects = (
  keyArguments?: KeySpecifier | KeyArgsFunction | false,
) => {
  return {
    ['getProjects']: {
      keyArgs: keyArguments,
      merge(existing: ProjectsList, incoming: ProjectsList, { args }) {
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
