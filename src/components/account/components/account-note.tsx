import React from 'react';

import { useEditUser } from '../../../hooks';
import { NoteAboutYourself } from '../../note-about-yourself/note-about-yourself';

const defaultText = 'Добавить заметку о себе';

type AccountNoteProps = {
  note?: string;
};

export const AccountNote = ({ note }: AccountNoteProps) => {
  const [editUser] = useEditUser();

  const editUserCallback = (arg: string) => {
    editUser({
      variables: {
        data: {
          theNote: arg?.trim(),
        },
      },
    });
  };

  return (
    <NoteAboutYourself note={note} defaultText={defaultText} onExitCallback={editUserCallback} />
  );
};
