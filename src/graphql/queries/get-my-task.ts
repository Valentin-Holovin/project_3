import { gql } from '@apollo/client';

export const GET_MY_TASKS_SUBTASKS = gql`
  query getMyTasksSubtasks($limit: Int, $offset: Int, $tagsId: [ID!]) {
    getCurrentUser {
      id
      taskCount(tagsId: $tagsId)
      myTasksSubtasks(limit: $limit, offset: $offset, tagsId: $tagsId) {
        id
        parentId
        name
        code
        status {
          id
          color
        }
        project {
          id
          name
          number
        }
        createdAt
        updatedAt
        maintainer {
          id
          login
          image
        }
        tags {
          count
          rows {
            id
            name
            color
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;
