import { gql } from '@apollo/client';

export const GET_TASKS_SUBTASKS = gql`
  query getTasksSubtasks($data: GetTasksInput!) {
    getTasksSubtasks(data: $data) {
      count
      rows {
        id
        createdAt
        updatedAt
        name
        number
        code
        startDate
        closeDate
        endDate
        parentId
        project {
          id
          name
          number
        }
        tags {
          rows {
            id
            name
            color
            createdAt
            updatedAt
          }
        }
        status {
          id
          color
        }
        subtasks(data: { limit: 100 }) {
          id
          createdAt
          updatedAt
          name
          number
          code
          startDate
          closeDate
          endDate
          status {
            id
            color
          }
          maintainer {
            id
            login
            image
          }
          task {
            id
            number
            code
            project {
              id
              name
              number
            }
          }
        }
        maintainer {
          id
          login
          image
        }
        realizationPerMonthAmount
        realizationPrice
      }
    }
  }
`;
