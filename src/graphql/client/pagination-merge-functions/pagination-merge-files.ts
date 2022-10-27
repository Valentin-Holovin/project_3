import { KeyArgsFunction, KeySpecifier } from '@apollo/client/cache/inmemory/policies';

import { GetAllFiles } from '../../generated';

export const paginationMergeFiles = (keyArguments?: KeySpecifier | KeyArgsFunction | false) => {
  return {
    getAllFiles: {
      keyArgs: keyArguments,
      merge(existing: GetAllFiles, incoming: GetAllFiles) {
        return {
          ...incoming,
          rows: [...(existing?.rows || []), ...(incoming?.rows || [])],
        };
      },
    },
  };
};
