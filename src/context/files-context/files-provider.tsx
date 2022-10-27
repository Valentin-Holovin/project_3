import React from 'react';

import { AllProjectActions } from '../../constants';
import { File } from '../../graphql/generated';
import { useDeleteFileMutation, useGetAllFilesQuery, useLoadFileToServer } from '../../hooks';
import { IFiles } from '../../types/chat';
import { getAllProjectActionsValue } from '../../utils';
import { FilesContext } from './files-context';

export const FilesProvider = (props: IFiles) => {
  const { data, loading, fetchMore, refetch } = useGetAllFilesQuery({
    variables: {
      data: {
        offset: 0,
        limit: 15,
        [props.type]: getAllProjectActionsValue(props),
      },
    },
    skip: props.type === AllProjectActions.chat && !props?.chatId,
  });

  const [deleteFileMutation] = useDeleteFileMutation();

  const { handleLoadFileToServer, isFileLoading } = useLoadFileToServer(props);

  const stopHandleLoadMore = React.useRef(false);

  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const handleLoadMore = async () => {
    if (!stopHandleLoadMore.current) {
      if (
        (data?.getAllFiles?.rows.length || 0) < (data?.getAllFiles.count || 0) &&
        !handleLoadMoreLoading
      ) {
        setHandleLoadMoreLoading(true);
        await fetchMore({
          variables: {
            data: {
              offset: data?.getAllFiles?.rows.length || 0,
              limit: 15,
              [props.type]: getAllProjectActionsValue(props),
            },
          },
        });
        setHandleLoadMoreLoading(false);
      }

      stopHandleLoadMore.current = true;
    }
  };

  const handleOnRefetch = React.useCallback(async () => {
    try {
      setRefreshing(true);
      await refetch();
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  const setStopHandleLoadMore = React.useCallback((value: boolean) => {
    stopHandleLoadMore.current = value;
  }, []);

  const deleteFile = async (fileId: number | string) => {
    await deleteFileMutation({
      variables: {
        id: Number(fileId),
      },
      update(cache, { data }) {
        if (data?.deleteFile.status === 'Success') {
          const normalizedId = cache?.identify({
            id: fileId,
            __typename: 'File',
          });

          cache?.evict({
            id: normalizedId,
          });
          cache?.gc();
        }
      },
    });
  };

  const handlePickFile = React.useCallback(
    async () => await handleLoadFileToServer(),
    [props.chatId],
  );

  const value = {
    chatId: props.chatId,
    id: getAllProjectActionsValue(props),
    files: (data?.getAllFiles?.rows || []) as File[],
    filesCount: data?.getAllFiles.count || 0,
    loading,
    isFileLoading,
    refreshing,
    handleOnRefetch,
    handleLoadMore,
    handleLoadMoreLoading,
    stopHandleLoadMore: stopHandleLoadMore.current,
    setStopHandleLoadMore,
    deleteFile,
    handlePickFile: handlePickFile as () => Promise<File>,
  };

  return <FilesContext.Provider value={value}>{props.children}</FilesContext.Provider>;
};
