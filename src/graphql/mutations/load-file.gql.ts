import { gql } from '@apollo/client';

import { FILE_FRAGMENT } from '../fragments/file-fragment.gql';

export const LOAD_FILE = gql`
  ${FILE_FRAGMENT}
  mutation loadFile($data: LoadFileInput!) {
    loadFile(data: $data) {
      ...fileFragment
    }
  }
`;
