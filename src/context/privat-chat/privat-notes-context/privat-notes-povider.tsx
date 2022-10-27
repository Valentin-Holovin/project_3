import React from 'react';

import { Maybe, Note } from '../../../graphql/generated';
import {
  useCreateNoteMutation,
  useGetPrivateChatNotesMutation,
  useRemoveNoteMutation,
} from '../../../hooks';
import { NotesProvider } from '../../notes-context/notes-provider';
import { PrivatNotesContext } from './privat-notes-context';

type Props = {
  children: React.ReactNode;
  id?: Maybe<number>;
  chatId?: Maybe<number>;
  userId?: Maybe<number>;
};

export const PrivatNotesProvider = ({ children, id, chatId, userId }: Props) => {
  const [getOrCreatePrivateChatMutation, { loading }] = useGetPrivateChatNotesMutation();

  const [notes, setNotes] = React.useState<Note[]>([]);

  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState<boolean>(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const stopHandleLoadMore = React.useRef(false);

  const [removeNoteMutation] = useRemoveNoteMutation();

  const [createNoteMutation, { loading: createNoteLoading }] = useCreateNoteMutation();

  const getPrivatNoteData = React.useCallback(
    async (offset: number) => {
      if (chatId) {
        const data = await getOrCreatePrivateChatMutation({
          variables: {
            id: userId || 0,
            offset,
            limit: 100,
          },
        });
        return data.data?.getOrCreatePrivateChat?.notes || [];
      } else return [];
    },
    [chatId],
  );

  const setStopHandleLoadMore = React.useCallback((value: boolean) => {
    stopHandleLoadMore.current = value;
  }, []);

  const deleteNote = React.useCallback(
    async (nodeId: number) => {
      try {
        const data = await removeNoteMutation({
          variables: {
            id: nodeId,
          },
        });
        if (data.data?.removeNote) {
          setNotes(
            (prevState: Note[]) =>
              [...prevState.filter((state: Note) => state.id !== nodeId)] as Note[],
          );
        }
      } catch {
        throw new Error('deleteMessageMutationError');
      }
    },
    [chatId],
  );

  const sendNote = React.useCallback(
    async (note: string) => {
      try {
        const data = await createNoteMutation({
          variables: {
            data: {
              chatId: Number(chatId),
              content: note?.trim(),
            },
          },
        });
        if (data.data?.createNote) {
          setNotes((prevState) => [data.data?.createNote as Note, ...prevState]);
        }
        return true;
      } catch {
        return false;
      }
    },
    [chatId],
  );

  React.useEffect(() => {
    const setFirstData = async () => {
      const data = await getPrivatNoteData(0);
      setNotes((data || []) as Note[]);
    };
    setFirstData();
  }, [chatId]);

  const handleOnRefetch = React.useCallback(async () => {
    try {
      setRefreshing(true);
      const data = await getPrivatNoteData(0);
      setNotes((data || []) as Note[]);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const handleLoadMore = async () => {};

  const value = {
    id,
    chatId,
    notes,
    notesCount: notes.length,
    loading,
    handleLoadMore,
    setStopHandleLoadMore,
    deleteNote,
    sendNote,
    handleOnRefetch,
    stopHandleLoadMore: stopHandleLoadMore.current,
    handleLoadMoreLoading,
    refreshing,
    createNoteLoading,
  };

  return (
    <PrivatNotesContext.Provider value={value}>
      <NotesProvider value={value}>{children}</NotesProvider>
    </PrivatNotesContext.Provider>
  );
};
