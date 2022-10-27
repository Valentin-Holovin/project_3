import { Box } from 'native-base';
import React from 'react';

import { useAdminEditUser } from '../../../hooks';
import { NoteAboutYourself } from '../../note-about-yourself/note-about-yourself';

const defaultText = 'Добавить заметку о себе';

type UserNoteProps = {
  note?: string;
  userId: string;
};

export const UserNote = ({ note, userId }: UserNoteProps) => {
  const [adminEditUser] = useAdminEditUser();

  const editUserCallback = React.useCallback(async (argument: string) => {
    await adminEditUser({
      variables: {
        data: {
          idUser: `${userId}`,
          theNote: argument?.trim(),
        },
      },
    });
  }, []);

  return (
    <Box marginBottom={'30px'}>
      <NoteAboutYourself note={note} defaultText={defaultText} onExitCallback={editUserCallback} />
    </Box>
  );
};
