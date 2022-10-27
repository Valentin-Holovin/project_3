import * as GENERATED from '../../graphql/generated/index';
import { Project } from '../../graphql/generated/index';
import { GET_PROJECTS } from '../../graphql/queries/get-projects.gql';

export const useUpdateProjectMutation = (id: number) => {
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

  return GENERATED.useUpdateProjectMutation({
    update(cache, { data }) {
      if (!data?.updateProject) {
        return null;
      }

      cache.updateQuery(
        {
          overwrite: true,
          query: GET_PROJECTS,
          variables: getProjectVariables,
        },
        (oldData) => {
          const index = oldData.getProjects.rows.findIndex((item: Project) => item.id === id);
          const newRowsValue = [...oldData.getProjects.rows];

          newRowsValue[index] = {
            ...newRowsValue[index],
            name: data?.updateProject.name,
            number: data?.updateProject.number,
          };
          if (!data) return;

          return {
            getProjects: {
              ...oldData.getProjects,
              rows: newRowsValue,
            },
          };
        },
      );
    },
  });
};
