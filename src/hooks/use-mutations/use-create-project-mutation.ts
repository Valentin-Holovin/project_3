import * as GENERATED from '../../graphql/generated/index';
import { GetProjectsQuery } from './../../graphql/generated/index';
import { GET_PROJECTS } from './../../graphql/queries/get-projects.gql';

export const useCreateProjectMutation = () => {
  const getProjectVariables = {
    data: {
      limit: 15,
      offset: 0,
      sort: {
        field: GENERATED.SortingField.Number,
        type: GENERATED.SortingOrders.Asc,
      },
    },
    tasksData: {
      isTaskStorage: false,
    },
  };

  return GENERATED.useCreateProjectMutation({
    update(cache, { data }) {
      if (!data?.createProject) {
        return null;
      }
      const projects: GetProjectsQuery | null = cache.readQuery({
        query: GET_PROJECTS,
        variables: getProjectVariables,
      });

      if (projects?.getProjects?.count == projects?.getProjects.rows.length) {
        cache.updateQuery(
          {
            overwrite: true,
            query: GET_PROJECTS,
            variables: getProjectVariables,
          },
          (oldData) => {
            if (!data) return;

            return {
              getProjects: {
                ...oldData.getProjects,
                rows: [...oldData.getProjects.rows, data.createProject],
                count: oldData?.getProjects.count + 1,
              },
            };
          },
        );
      }
    },
  });
};
