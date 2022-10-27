import React from 'react';

import { ContextProps, NotesContext } from './notes-context';

type Props = {
  children: React.ReactNode;
  value: ContextProps;
};

export const NotesProvider = ({ children, value }: Props) => {
  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
