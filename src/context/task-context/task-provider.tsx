import React from 'react';

import { SortingField, SortingOrders } from '../../graphql/generated';
import { useGetProjectsQuery, useGetTagsQuery } from '../../hooks';
import { CreateTaskContext } from './task-context';

type IProps = {
  children?: React.ReactNode;
};

export type TagType = {
  id: number;
  title: string;
  color?: string | null;
  active: boolean;
};

export const TaskProvider: React.FC<IProps> = ({ children }) => {
  const { data: dataTags, loading: loadingTags } = useGetTagsQuery({});

  const { data: projectsData, loading: loadingProjects } = useGetProjectsQuery({
    variables: {
      data: {
        limit: 100,
        offset: 0,
        sort: {
          field: SortingField.Number,
          type: SortingOrders.Asc,
        },
      },
      tasksData: {
        isTaskStorage: false,
      },
    },
  });

  const [tags, setTags] = React.useState<TagType[]>([]);
  const [isInitTags, setIsIntiTags] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (dataTags?.getTags?.rows) {
      const tagsArr = dataTags?.getTags?.rows.map((item) => ({
        id: item.id,
        title: item.name,
        color: item.color,
        active: false,
      }));
      setTags(tagsArr);
      setIsIntiTags(true);
    }
  }, [dataTags]);

  const projects =
    projectsData?.getProjects?.rows?.map((project) => ({
      id: project?.id,
      name: project?.name,
      number: project?.number,
    })) || null;

  const value = {
    tags: tags,
    setTags,
    projects,
    loadingTags,
    loadingProjects,
    isInitTags,
  };

  return <CreateTaskContext.Provider value={value}>{children}</CreateTaskContext.Provider>;
};
