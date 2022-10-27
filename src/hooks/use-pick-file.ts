import { ReactNativeFile } from 'apollo-upload-client';
import * as DocumentPicker from 'expo-document-picker';
import React from 'react';

import { useAlertMessage } from './use-alert-message';

export const usePickFile = () => {
  const { alertMessage } = useAlertMessage();

  const pickFile = React.useCallback(async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});

      return result.type === 'success'
        ? new ReactNativeFile({
            uri: result.uri,
            name: result.name,
            type: result.mimeType,
          })
        : null;
    } catch {
      alertMessage({
        title: 'Произошла ошибка при выборе файла',
      });
    }
  }, []);

  return {
    pickFile,
  };
};
