import { gql } from '@apollo/client';

export const TASKS_FRAGMENT = gql`
  fragment tasksFragment on Task {
    id
    number
    name
    code
    startDate
    closeDate
    endDate
    status {
      id
      color
    }
    project {
      id
      number
    }
    author {
      id
      image
      login
      role
    }
    assignees {
      id
      image
      login
      role
    }
    maintainer {
      id
      login
      image
    }
    tags(limit: 100) {
      count
      rows {
        id
        name
        color
        createdAt
        updatedAt
      }
    }
    realizationPerMonthAmount
    realizationPrice
  }
`;
