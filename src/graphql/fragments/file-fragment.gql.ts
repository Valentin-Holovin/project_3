import { gql } from '@apollo/client';

export const FILE_FRAGMENT = gql`
  fragment fileFragment on File {
    __typename
    id
    fileName
    path
    size
    user {
      id
    }
  }
`;
