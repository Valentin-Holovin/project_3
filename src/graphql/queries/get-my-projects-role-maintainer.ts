import { gql } from '@apollo/client';

export const GET_MY_PROJECTS_ROLE_MAINTAINER = gql`
  query getMyProjectsRoleMaintainer($data: GetMyProjectsInput!, $tagsId: [ID!]) {
    getMyProjectsRoleMaintainer(data: $data) {
      rows {
        id
        name
        number
        myTaskSubTaskList(limit: 100, tagsId: $tagsId) {
          rows {
            id
            createdAt
            name
            code
            status {
              id
            }
            parentId
            maintainer {
              id
              login
              image
            }
            maintainerComment
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
            project {
              id
              number
              name
            }
            realizationPrice
            realizationPerMonthAmount
          }
          count
        }
      }
      count
    }
  }
`;
