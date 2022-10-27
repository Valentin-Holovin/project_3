import { gql } from '@apollo/client';

export const NEW_ACTIVITY = gql`
  subscription newActivity {
    newActivity
  }
`;
