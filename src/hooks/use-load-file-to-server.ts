import React from 'react';

import { GetAllFilesQuery, LoadFileMutation } from '../graphql/generated';
import { GET_ALL_FILES } from '../graphql/queries/get-all-files.gql';
import { IFiles } from '../types/chat';
import { getAllProjectActionsValue } from '../utils';
import { useAlertMessage } from './use-alert-message';
import { useLoadFileMutation } from './use-mutations';
import { usePickFile } from './use-pick-file';

export const useLoadFileToServer = (props: IFiles) => {
  const { pickFile } = usePickFile();

  const { alertMessage } = useAlertMessage();

  const [loadFileMutation, { loading: isFileLoading }] = useLoadFileMutation();

  const handleLoadFileToServer = React.useCallback(async () => {
    const file = await pickFile();

    try {
      if (file) {
        const data = await loadFileMutation({
          variables: {
            data: {
              file,
              [props.type]: getAllProjectActionsValue(props),
            },
          },
          update(cache, { data }: { data: LoadFileMutation }) {
            if (data.loadFile.id) {
              const { getAllFiles }: GetAllFilesQuery = cache.readQuery({
                query: GET_ALL_FILES,
                variables: {
                  data: {
                    [props.type]: getAllProjectActionsValue(props),
                  },
                },
              });

              cache.writeQuery({
                query: GET_ALL_FILES,
                data: {
                  getAllFiles: {
                    ...getAllFiles,
                    rows: [data.loadFile, ...(getAllFiles.rows || [])],
                  },
                },
                variables: {
                  data: {
                    [props.type]: getAllProjectActionsValue(props),
                  },
                },
                overwrite: true,
              });
            }
          },
        });
        return data.data?.loadFile;
      }
    } catch {
      alertMessage({
        title: 'Произошла ошибка при загрузке файла',
      });
    }
  }, [props]);

  return {
    isFileLoading,
    handleLoadFileToServer,
  };
};
