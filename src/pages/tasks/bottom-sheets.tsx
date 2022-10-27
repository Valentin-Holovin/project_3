import React from 'react';

import { useModalsContext } from '../../context/modal-context/modal-context';
import { Modals } from '../../context/modal-context/modal-provider';
import { Tag } from '../../graphql/generated/index';
import { BottomMenu } from './bottom-menu';

type Props = {
  applyFilterTags: (tags: Tag[] | null) => void;
  filterTags: Tag[] | null;
};

export const BottomSheets = ({ applyFilterTags, filterTags }: Props) => {
  const { activeModal, handleChangeModal } = useModalsContext();
  const isSortByTagsModal = activeModal === Modals.SORTING_TAGS;

  const handleClose = () => {
    handleChangeModal('');
  };

  return (
    <>
      {isSortByTagsModal && (
        <BottomMenu title='Сортировка по тегам' isOpen={isSortByTagsModal} onClose={handleClose}>
          <BottomMenu.SortingByTags
            applyFilterTags={applyFilterTags}
            filterTags={filterTags}
            handleClose={handleClose}
          />
        </BottomMenu>
      )}
    </>
  );
};
