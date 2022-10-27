import React from 'react';

import { useModalsContext } from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { BottomMenu } from './bottom-menu';

type Props = {
  statusId: number;
};

export const ChatBottomSheets = ({ statusId }: Props) => {
  const { activeModal, handleChangeModal } = useModalsContext();

  const isTaskStatusesModal = activeModal === Modals.TASK_STATUSES;

  const handleClose = () => {
    handleChangeModal('');
  };

  return (
    <>
      {isTaskStatusesModal && (
        <BottomMenu title='Статус задачи' isOpen={isTaskStatusesModal} onClose={handleClose}>
          <BottomMenu.StatusesTask statusId={statusId} />
        </BottomMenu>
      )}
    </>
  );
};
