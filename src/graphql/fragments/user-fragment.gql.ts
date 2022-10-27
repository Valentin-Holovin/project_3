import { gql } from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    __typename
    fullName
    login
    id
    role
    image
    theNote
    createdAt
    editDate
    lastConnect
    updatedAt
    lastEditerUser {
      login
    }
    creator {
      login
    }
    registrationLink
  }
`;
