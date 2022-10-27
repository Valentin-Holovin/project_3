import { gql } from '@apollo/client';

export const GET_TAGS = gql`
  query getTags($data: GetTagsInput) {
    getTags(data: $data) {
      rows {
        id
        name
        color
        createdAt
        updatedAt
      }
    }
  }
`;