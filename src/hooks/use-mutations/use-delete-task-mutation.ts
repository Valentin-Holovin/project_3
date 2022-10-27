import * as GENERATED from '../../graphql/generated/index';

export const useDeleteTaskMutation = (id: number) => {
  return GENERATED.useDeleteTaskMutation({
    update(cache, { data }) {
      if (!data?.deleteTask) {
        return null;
      }

      cache.evict({
        id: `Task:${id}`,
      });
      cache.gc();
    },
  });
};
