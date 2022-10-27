import { useLoginUserLazyQuery } from '../../graphql/generated';
import { useAuth } from '..';

export const useSignInLazyQuery = () => {
  const { onSuccessAuth } = useAuth();

  return useLoginUserLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: (response) => {
      if (response?.loginUser?.token) {
        onSuccessAuth(response?.loginUser?.token);
      }
    },
  });
};
