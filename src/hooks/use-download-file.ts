import * as FileSystem from 'expo-file-system';
import { StorageAccessFramework } from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';
import React from 'react';

import { useAlertMessage } from './use-alert-message';

export const useDownloadFile = () => {
  const { alertMessage } = useAlertMessage();

  React.useEffect(() => {
    const getPermissions = async () => {
      const currentPermissions = await MediaLibrary.getPermissionsAsync();
      if (currentPermissions.status === 'undetermined') {
        const newPermissions = await MediaLibrary.requestPermissionsAsync();
        console.log('got new permissions', newPermissions);
      }
      console.log('Getting permissions status:', currentPermissions.granted);
    };
    getPermissions();
  }, []);

  const isImageFileExts = React.useCallback((fileName: string) => {
    const imageFileExts = ['jpg', 'png', 'gif', 'heic', 'webp', 'bmp'];

    return imageFileExts.every((x) => !fileName.endsWith(x));
  }, []);

  const saveFile = React.useCallback(async (fileUri: string) => {
    const asset = await MediaLibrary.createAssetAsync(fileUri);
    await MediaLibrary.createAlbumAsync('Download', asset, false);
    alertMessage({
      title: 'Фотография успешно загружена в галерею',
    });
  }, []);

  const downloadFileIos = React.useCallback(
    async (file: string, fileName: string) => {
      try {
        // eslint-disable-next-line prettier/prettier, unicorn/better-regex, no-useless-escape
        const filenameToFile =
          FileSystem.documentDirectory + fileName.split(/\+|\s+|-|\*|\//).join('_');
        const filenameToGalery =
          FileSystem.documentDirectory + 'burduckPhoto.' + fileName.split('.').reverse()[0];

        // eslint-disable-next-line unicorn/prefer-ternary
        if (isImageFileExts(filenameToFile)) {
          // Maybe TODO
          //  {
          //    encoding: FileSystem.EncodingType.Base64,
          // }
          const data = await FileSystem.downloadAsync(file, filenameToFile);
          await Sharing.shareAsync(data.uri);

          alertMessage({
            title: 'Файл успешно загружен в папку',
          });
        } else {
          const data = await FileSystem.downloadAsync(encodeURI(file), filenameToGalery);

          await saveFile(data.uri);
        }
      } catch {
        alertMessage({
          title: 'Произошла ошибка при загрузке файла',
        });
        throw new Error('downloadFileErrorIOS');
      }
    },
    [isImageFileExts, saveFile],
  );

  const downloadFileAndroid = React.useCallback(
    async (file: string, fileName: string) => {
      const filename = FileSystem.documentDirectory + fileName.split(' ').join('_');

      const filenameToGalery =
        FileSystem.documentDirectory + 'burduckPhoto.' + fileName.split('.').reverse()[0];

      try {
        if (isImageFileExts(filename)) {
          const downloadFile = await FileSystem.downloadAsync(file, filename);

          const fileString = await StorageAccessFramework.readAsStringAsync(downloadFile.uri, {
            encoding: FileSystem.EncodingType.Base64,
          });

          const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
          if (!permissions.granted) {
            return;
          }

          const uri = await StorageAccessFramework.createFileAsync(
            permissions.directoryUri,
            fileName,
            downloadFile.headers['content-type'] || '',
          );

          await StorageAccessFramework.writeAsStringAsync(uri, fileString, {
            encoding: FileSystem.EncodingType.Base64,
          });

          alertMessage({
            title: 'Файл успешно загружен в папку',
          });
        } else {
          const data = await FileSystem.downloadAsync(encodeURI(file), filenameToGalery);

          await saveFile(data.uri);
        }
      } catch {
        alertMessage({
          title: 'Произошла ошибка при загрузке файла',
        });
        throw new Error('downloadFileErrorAndroid');
      }
    },
    [isImageFileExts, saveFile],
  );

  return {
    downloadFileIos,
    downloadFileAndroid,
  };
};
