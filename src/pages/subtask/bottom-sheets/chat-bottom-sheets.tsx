import React from 'react';

import { useModalsContext } from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { BottomMenu } from './bottom-menu';

type Props = {
  statusId: number;
};

export const ChatBottomSheets = ({ statusId }: Props) => {
  const { activeModal, handleChangeModal } = useModalsContext();

  const isSubtaskStatusesModal = activeModal === Modals.SUBTASK_STATUSES;

  const handleClose = () => {
    handleChangeModal('');
  };

  return (
    <>
      {isSubtaskStatusesModal && (
        <BottomMenu title='Статус подзадачи' isOpen={isSubtaskStatusesModal} onClose={handleClose}>
          <BottomMenu.StatusesSubtask statusId={statusId} />
        </BottomMenu>
      )}
    </>
  );
};
