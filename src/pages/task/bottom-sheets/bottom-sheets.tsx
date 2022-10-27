import React from 'react';

import { useModalsContext } from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { BottomMenu } from './bottom-menu';

export const BottomSheets = () => {
  const { activeModal, handleChangeModal } = useModalsContext();

  const isDeleteTaskModal = activeModal === Modals.DELETE_TASK;

  const handleClose = () => {
    handleChangeModal('');
  };

  return (
    <>
      {isDeleteTaskModal && (
        <BottomMenu title='Удалить задачу?' isOpen={isDeleteTaskModal} onClose={handleClose}>
          <BottomMenu.DeleteTask />
        </BottomMenu>
      )}
    </>
  );
};
