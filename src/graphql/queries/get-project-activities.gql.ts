import { gql } from '@apollo/client';

import { PROJECT_ACTIVITY_FRAGMENT } from '../fragments/project-activity-fragment.gql';

export const GET_PROJECT_ACTIVITIES = gql`
  ${PROJECT_ACTIVITY_FRAGMENT}
  query getProjectActivities {
    getProjectActivities {
      ...projectActivity
    }
  }
`;
