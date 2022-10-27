import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';

import { authLink } from './auth-link';
import { errorLink } from './error-link';
import {
  paginationMergeFiles,
  paginationMergeGetAllProjects,
  paginationMergeGetAllUsers,
  paginationMergeGetProjectActivities,
  paginationMergeOnlyIncoming,
  paginationMergeResponsibleTask,
  paginationMergeTask,
} from './pagination-merge-functions';
import { splitLink } from './split-link';

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, splitLink]),
  cache: new InMemoryCache({
    addTypename: true,
    typePolicies: {
      Query: {
        fields: {
          ...paginationMergeGetAllProjects(['data', ['offset', 'limit']]),
          ...paginationMergeTask(['data', ['tagsId']]),
          ...paginationMergeResponsibleTask(['data', ['tagsId']]),
          ...paginationMergeGetAllUsers(['input', ['search', 'sortType', 'sortBy']]),
          ...paginationMergeGetProjectActivities('getProjectActivities'),
          ...paginationMergeOnlyIncoming('getProjectActivities'),
          ...paginationMergeFiles(['data', ['subtaskId', 'taskId', 'chatId']]),
        },
      },
    },
  }),
});
