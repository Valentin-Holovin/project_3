import { gql } from '@apollo/client';

import { TASKS_FRAGMENT } from '../fragments/tasks-fragment';

export const GET_PROJECTS = gql`
  ${TASKS_FRAGMENT}
  query getProjects($data: GetProjectsInput!) {
    getProjects(data: $data) {
      rows {
        __typename
        id
        name
        number
        createdAt
        updatedAt
        poligon {
          id
        }
        author {
          id
          image
          login
        }
        tasks(data: { isTaskStorage: false, limit: 100 }) {
          __typename
          count
          rows {
            ...tasksFragment
          }
        }
      }
      count
    }
  }
`;
