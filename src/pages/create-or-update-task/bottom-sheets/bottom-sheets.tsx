import React from 'react';

import { useModalsContext } from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { BottomMenu } from './bottom-menu';

export const BottomSheets = () => {
  const { activeModal, handleChangeModal } = useModalsContext();

  const isTagsModal = activeModal === Modals.ADD_TAGS;
  const isProjectsModal = activeModal === Modals.SELECTION_PROJECT;
  const isMainUserModal = activeModal === Modals.SELECTION_MAIN_USER;
  const isUsersOfTaskModal = activeModal === Modals.USERS_OF_TASK;
  const isSetUsersOfTaskModal = activeModal === Modals.SELECTION_USERS;

  const handleClose = () => {
    handleChangeModal('');
  };

  return (
    <>
      {isTagsModal && (
        <BottomMenu title='Теги' isOpen={isTagsModal} onClose={handleClose}>
          <BottomMenu.Tags />
        </BottomMenu>
      )}
      {isProjectsModal && (
        <BottomMenu title='Выберите проект' isOpen={isProjectsModal} onClose={handleClose}>
          <BottomMenu.Projects />
        </BottomMenu>
      )}
      {isMainUserModal && (
        <BottomMenu
          title='Выберите главного исполнителя'
          isOpen={isMainUserModal}
          onClose={handleClose}
        >
          <BottomMenu.MainUser />
        </BottomMenu>
      )}
      {isUsersOfTaskModal && (
        <BottomMenu title='Исполнители' isOpen={isUsersOfTaskModal} onClose={handleClose}>
          <BottomMenu.Users />
        </BottomMenu>
      )}
      {isSetUsersOfTaskModal && (
        <BottomMenu
          title='Добавить исполнителей'
          isOpen={isSetUsersOfTaskModal}
          onClose={handleClose}
        >
          <BottomMenu.SetUsers />
        </BottomMenu>
      )}
    </>
  );
};
