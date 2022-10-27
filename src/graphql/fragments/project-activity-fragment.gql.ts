import { gql } from '@apollo/client';

export const PROJECT_ACTIVITY_FRAGMENT = gql`
  fragment projectActivity on ProjectActivity {
    __typename
    id
    action
    createdAt
    actioner {
      id
      login
      image
    }
    project {
      id
      name
    }
    task {
      id
      name
      code
      maintainer {
        login
        image
      }
    }
    subtask {
      id
      name
      code
      maintainer {
        login
        image
      }
    }
  }
`;
