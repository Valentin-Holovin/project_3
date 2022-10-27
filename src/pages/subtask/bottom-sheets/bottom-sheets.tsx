import React from 'react';

import { useModalsContext } from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { BottomMenu } from './bottom-menu';

export const BottomSheets = () => {
  const { activeModal, handleChangeModal } = useModalsContext();

  const isDeleteSubTaskModal = activeModal === Modals.DELETE_SUBTASK;

  const handleClose = () => {
    handleChangeModal('');
  };

  return (
    <>
      {isDeleteSubTaskModal && (
        <BottomMenu title='Удалить подзадачу?' isOpen={isDeleteSubTaskModal} onClose={handleClose}>
          <BottomMenu.DeleteSubtask />
        </BottomMenu>
      )}
    </>
  );
};
