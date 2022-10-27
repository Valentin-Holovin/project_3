import { USER_FRAGMENT } from '../../graphql/fragments/user-fragment.gql';
import * as GENERATED from '../../graphql/generated/index';

export const useAdminEditUser = () => {
  return GENERATED.useAdminEditUserMutation({
    update(cache, { data }) {
      cache.writeFragment({
        id: `User:${data?.adminEditUser?.user?.id}`,
        fragment: USER_FRAGMENT,
        data: {
          ...data?.adminEditUser?.user,
        },
      });
    },
  });
};
