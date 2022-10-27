import * as GENERATED from '../../graphql/generated/index';

export const useDeleteUser = (userId: string) => {
  return GENERATED.useDeleteUserMutation({
    update(cache, { data }) {
      if (data?.deleteUser !== true) return null;

      cache.evict({
        id: `User:${userId}`,
      });
      cache.gc();
    },
  });
};
