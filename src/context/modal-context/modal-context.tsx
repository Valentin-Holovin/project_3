import React from 'react';

import { Project } from '../../graphql/generated';
import { Modals } from './modal-provider';

export type ProjectItemType = {
  id: number | undefined;
  name: string | undefined;
  number: number | undefined | null;
};

export type modalsProps = {
  currentProject?: Project | null;
  setFieldValue?: (fieldName: string, fieldValue: any) => void;
  values?: any;
  chatId?: number;
};

export type ContextProps = {
  activeModal: Modals | '';
  handleChangeModal: (value: Modals | '') => void;
  modalsProps: modalsProps;
  setModalsProps: (item: object) => void;
  handleDeleteProject: () => void;
  deleteLoading: boolean;
};

export const ModalsContext = React.createContext<ContextProps>({
  activeModal: '',
  handleChangeModal: () => {},
  modalsProps: {},
  setModalsProps: () => {},
  handleDeleteProject: () => {},
  deleteLoading: false,
});

export function useModalsContext() {
  const modalContext = React.useContext(ModalsContext);

  if (!modalContext) {
    throw new Error('useModalsContext must be used within a ModalsProvider');
  }
  return modalContext;
}
