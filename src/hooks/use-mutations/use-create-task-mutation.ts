import * as GENERATED from '../../graphql/generated/index';
import { GET_PROJECTS } from '../../graphql/queries/get-projects.gql';

export const useCreateTaskMutation = () => {
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

  return GENERATED.useCreateTaskMutation({
    update(cache, { data }) {
      if (!data?.createTask) {
        return null;
      }
      const projects: GENERATED.GetProjectsQuery | null = cache.readQuery({
        query: GET_PROJECTS,
        variables: getProjectVariables,
      });

      const projectId = data?.createTask?.project?.id;
      const projectIndex = projects?.getProjects?.rows?.findIndex(
        (project) => project?.id === projectId,
      ) as number;

      if (projectIndex >= 0) {
        cache.updateQuery(
          {
            overwrite: true,
            query: GET_PROJECTS,
            variables: getProjectVariables,
          },
          (oldData) => {
            if (!data) return;

            const newProjectsValue = [...oldData.getProjects.rows];
            const currentProject = newProjectsValue[projectIndex];

            newProjectsValue[projectIndex] = {
              ...currentProject,
              tasks: {
                ...currentProject.tasks,
                rows: [...currentProject.tasks.rows, data?.createTask],
              },
            };

            return {
              getProjects: {
                ...oldData.getProjects,
                rows: [...newProjectsValue],
              },
            };
          },
        );
      }
    },
  });
};
