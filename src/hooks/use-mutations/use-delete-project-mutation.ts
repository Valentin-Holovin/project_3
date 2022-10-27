import * as GENERATED from '../../graphql/generated/index';

export const useDeleteProjectMutation = (id: number) => {
  return GENERATED.useDeleteProjectMutation({
    update(cache, { data }) {
      if (!data?.deleteProject) {
        return null;
      }

      cache.evict({
        id: `Project:${id}`,
      });
      cache.gc();
    },
  });
};
