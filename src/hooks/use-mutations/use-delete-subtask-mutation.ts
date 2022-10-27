import * as GENERATED from '../../graphql/generated/index';

export const useDeleteSubtaskMutation = (id: number) => {
  return GENERATED.useDeleteSubtaskMutation({
    update(cache, { data }) {
      if (!data?.deleteSubtask) {
        return null;
      }

      cache.evict({
        id: `Subtask:${id}`,
      });
      cache.gc();
    },
  });
};
