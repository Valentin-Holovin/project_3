import { gql } from '@apollo/client';

import { TASKS_FRAGMENT } from '../fragments/tasks-fragment';

export const CREATE_PROJECT = gql`
  ${TASKS_FRAGMENT}
  mutation createProject($data: CreateProjectInput!) {
    createProject(data: $data) {
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
      tasks(data: { sort: { type: DESC, field: activity }, isTaskStorage: false }) {
        __typename
        count
        rows {
          ...tasksFragment
        }
      }
    }
  }
`;
