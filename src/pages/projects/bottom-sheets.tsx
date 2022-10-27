import React from 'react';

import { useModalsContext } from '../../context/modal-context/modal-context';
import { Modals } from '../../context/modal-context/modal-provider';
import { BottomMenu } from './bottom-menu';

export const BottomSheets = () => {
  const { activeModal, handleChangeModal } = useModalsContext();
  const isCreateProjectsModal = activeModal === Modals.CREATE_PROJECT;
  const isUpdateProjectsModal = activeModal === Modals.UPDATE_PROJECT;
  const isDeleteProjectsModal = activeModal === Modals.DELETE_PROJECT;

  const handleClose = () => {
    handleChangeModal('');
  };

  return (
    <>
      {isCreateProjectsModal && (
        <BottomMenu title='Создать проект' isOpen={isCreateProjectsModal} onClose={handleClose}>
          <BottomMenu.CreateProject />
        </BottomMenu>
      )}

      {isUpdateProjectsModal && (
        <BottomMenu
          title='Редактировать проект'
          isOpen={isUpdateProjectsModal}
          onClose={handleClose}
        >
          <BottomMenu.UpdateProject />
        </BottomMenu>
      )}

      {isDeleteProjectsModal && (
        <BottomMenu title='Удалить проект' isOpen={isDeleteProjectsModal} onClose={handleClose}>
          <BottomMenu.DeleteProject />
        </BottomMenu>
      )}
    </>
  );
};
