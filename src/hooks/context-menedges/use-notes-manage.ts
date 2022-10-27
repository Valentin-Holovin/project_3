import React from 'react';

import { AllProjectActions } from '../../constants';
import { Maybe, Note } from '../../graphql/generated';
import { useCreateNoteMutation, useRemoveNoteMutation } from '../use-mutations';

type Props = {
  id: Maybe<number> | undefined;
  length: number;
  type: AllProjectActions;
  getPrivatNoteData: (offset: number) => Promise<Note[]>;
};

export const useNotesManage = ({ id, length, type, getPrivatNoteData }: Props) => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState<boolean>(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const stopHandleLoadMore = React.useRef(false);

  const [removeNoteMutation] = useRemoveNoteMutation();

  const [createNoteMutation, { loading: createNoteLoading }] = useCreateNoteMutation();

  const setPrivatNoteData = React.useCallback(
    (data: Note[]) => setNotes((prev) => [...prev, ...(data || [])] as Note[]),
    [],
  );

  const setStopHandleLoadMore = React.useCallback((value: boolean) => {
    stopHandleLoadMore.current = value;
  }, []);

  const deleteNote = React.useCallback(async (nodeId: number) => {
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
      throw new Error('deleteNodeMutationError');
    }
  }, []);

  const sendNote = React.useCallback(
    async (note: string) => {
      try {
        const data = await createNoteMutation({
          variables: {
            data: {
              [`${type}`]: id,
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
    [id, type],
  );

  React.useEffect(() => {
    const setFirstData = async () => {
      const data = await getPrivatNoteData(0);
      setNotes((data || []) as Note[]);
    };
    setFirstData();
  }, [id]);

  const handleLoadMore = React.useCallback(async () => {
    if (!stopHandleLoadMore.current) {
      if (!handleLoadMoreLoading && (length || 0) > notes.length) {
        setHandleLoadMoreLoading(true);
        const data = await getPrivatNoteData(notes.length);
        setPrivatNoteData(data as Note[]);
        setHandleLoadMoreLoading(false);
      }

      stopHandleLoadMore.current = true;
    }
  }, [handleLoadMoreLoading, length, notes.length]);

  const handleOnRefetch = React.useCallback(async () => {
    try {
      setRefreshing(true);
      const data = await getPrivatNoteData(0);
      setNotes((data || []) as Note[]);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return {
    notes,
    notesCount: notes.length,
    handleLoadMoreLoading,
    stopHandleLoadMore,
    createNoteLoading,
    refreshing,
    setStopHandleLoadMore,
    deleteNote,
    sendNote,
    handleLoadMore,
    handleOnRefetch,
  };
};
