import { gql } from '@apollo/client';

export const REFRESH_PUSH_TOKEN = gql`
  mutation refreshPushToken($data: PushTokenInput!) {
    refreshPushToken(data: $data) {
      status
    }
  }
`;
