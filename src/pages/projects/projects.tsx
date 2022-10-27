import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { AddTaskIcon, Layout } from '../../components';
import { AddProjectIcon } from '../../components/icons/add-project-icon';
import { ROUTES } from '../../constants';
import { useModalsContext } from '../../context/modal-context/modal-context';
import { Modals } from '../../context/modal-context/modal-provider';
import { ProjectsProvider } from '../../context/projects-context/projects-provider';
import { UserRole } from '../../graphql/generated';
import { useAuth } from '../../hooks';
import { Menu } from '../../types/menu';
import { BottomSheets } from './bottom-sheets';
import { ProjectContent } from './project-content';

export const Projects = () => {
  const { handleChangeModal } = useModalsContext();
  const navigation = useNavigation();
  const { currentUserData } = useAuth();

  const handleOpen = () => {
    handleChangeModal(Modals.CREATE_PROJECT);
  };

  const handleCreateTask = () => {
    navigation.navigate(ROUTES.createOrUpdateTask, {
      type: 'Task',
    });
  };

  const menuOptions = [
    {
      title: 'Новый проект',
      handlePress: handleOpen,
      Icon: AddProjectIcon,
      isVisible: currentUserData?.role !== UserRole.User,
    },
    {
      title: 'Добавить задачу',
      handlePress: handleCreateTask,
      Icon: AddTaskIcon,
      isVisible: true,
    },
  ];

  const handleAddProps: Menu = {
    title: 'Создать',
    options: menuOptions,
  };

  const isAdmin = currentUserData?.role === UserRole.Admin;

  return (
    <Layout handleAddProps={handleAddProps}>
      <ProjectsProvider>
        <ProjectContent isAdmin={isAdmin} />

        <BottomSheets />
      </ProjectsProvider>
    </Layout>
  );
};
