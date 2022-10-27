import React from 'react';

import { useAlertMessage } from '../../hooks';
import { useDeleteProjectMutation } from '../../hooks/use-mutations/use-delete-project-mutation';
import { ModalsContext, modalsProps } from './modal-context';

type Props = {
  children: React.ReactNode;
};

export enum Modals {
  SORTING_TAGS = 'SORTING_TAGS',
  CREATE_PROJECT = 'CREATE_PROJECT',
  DELETE_PROJECT = 'DELETE_PROJECT',
  UPDATE_PROJECT = 'UPDATE_PROJECT',
  ADD_TAGS = 'ADD_TAGS',
  SELECTION_PROJECT = 'SELECTION_PROJECT',
  SELECTION_MAIN_USER = 'SELECTION_MAIN_USER',
  SELECTION_USERS = 'SELECTION_USERS',
  USERS_OF_TASK = 'USERS_OF_TASK',
  DELETE_TASK = 'DELETE_TASK',
  DELETE_SUBTASK = 'DELETE_SUBTASK',
  TASK_STATUSES = 'TASK_STATUSES',
  SUBTASK_STATUSES = 'SUBTASK_STATUSES',
}

export const ModalsProvider = ({ children }: Props) => {
  const { alertMessage } = useAlertMessage();
  const [activeModal, setActiveModal] = React.useState<Modals | ''>('');

  const [modalsProps, setModalsProps] = React.useState<modalsProps>({});

  const handleChangeModal = (value: Modals | '') => {
    setActiveModal(value);
  };

  const [deleteProject, { loading: deleteLoading }] = useDeleteProjectMutation(
    Number(modalsProps?.currentProject?.id),
  );

  const handleDeleteProject = async () => {
    try {
      await deleteProject({
        variables: {
          id: Number(modalsProps?.currentProject?.id),
        },
      });
      alertMessage({
        title: 'Проект успешно удалён',
      });
    } catch {
      alertMessage({
        title: 'Произошла ошибка при удалении проекта',
      });
    }
    handleChangeModal('');
  };

  const value = {
    activeModal,
    handleChangeModal,
    modalsProps,
    setModalsProps,
    deleteLoading,
    handleDeleteProject,
  };

  return <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>;
};
