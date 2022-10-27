import { gql } from '@apollo/client';

import { FILE_FRAGMENT } from '../fragments/file-fragment.gql';

export const GET_ALL_FILES = gql`
  ${FILE_FRAGMENT}
  query getAllFiles($data: GetFileInput!) {
    getAllFiles(data: $data) {
      __typename
      rows {
        ...fileFragment
      }
      count
    }
  }
`;
