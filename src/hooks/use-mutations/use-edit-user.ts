import { GetCurrentUserDocument, GetCurrentUserQuery } from '../../graphql/generated';
import * as GENERATED from '../../graphql/generated/index';

export const useEditUser = () => {
  return GENERATED.useEditUserMutation({
    update(cache, { data }) {
      if (!data?.editUser?.id) return null;

      const currentUser: GetCurrentUserQuery | null = cache.readQuery({
        query: GetCurrentUserDocument,
      });

      if (currentUser) {
        cache.writeQuery({
          query: GetCurrentUserDocument,
          data: {
            ...currentUser,
            getCurrentUser: {
              ...data.editUser,
            },
          },
        });
      }
    },
  });
};
