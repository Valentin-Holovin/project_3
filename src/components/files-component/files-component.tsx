import { Box, Button, Center, Spinner } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IS_ANDROID } from '../../constants';
import { File } from '../../graphql/generated';
import {
  useAlertMessage,
  useAuth,
  useDownloadFile,
  useFiles,
  useSendMessagesMutation,
} from '../../hooks';
import { filesThemeType } from '../../types/chat';
import { pageEmpty } from '../../types/pager-view';
import { getPath } from '../../utils';
import { EmptyListComponent } from '../empty-list-component/empty-list-component';
import { ClipIcon } from '../icons';
import { RequestHandler } from '../request-handler/request-handler';
import { RenderItem } from './render-item/render-item';

type Props = {
  theme: filesThemeType;
  EmptypageData: pageEmpty;
};

export const FilesComponent = ({ EmptypageData, theme }: Props) => {
  const {
    chatId,
    files,
    loading,
    isFileLoading,
    refreshing,
    handleLoadMoreLoading,
    handleLoadMore,
    handleOnRefetch,
    setStopHandleLoadMore,
    deleteFile,
    handlePickFile,
  } = useFiles();

  const { currentUserData } = useAuth();

  const { downloadFileIos, downloadFileAndroid } = useDownloadFile();

  const [sendMessageMutation, { loading: sendMessageLoading }] = useSendMessagesMutation();

  const { alertMessage } = useAlertMessage();

  const keyExtractor = React.useCallback(
    (item: File, index: number) => (item.id || index).toString(),
    [],
  );

  const onMomentumScrollBegin = React.useCallback(() => setStopHandleLoadMore(false), []);

  const sendMessageWhenFileDeleted = React.useCallback(
    async (fileName: string) => {
      await sendMessageMutation({
        variables: {
          data: {
            chatId: Number(chatId),
            text: `Удален файл ${fileName}`,
          },
        },
      });
    },
    [chatId],
  );

  const pickFile = React.useCallback(async () => {
    const data = await handlePickFile();

    try {
      await sendMessageMutation({
        variables: {
          data: {
            chatId: Number(chatId),
            text: `Добавлен файл ${data?.fileName}`,
          },
        },
      });
      alertMessage({
        title: 'Файл успешно загружен',
      });
    } catch {
      alertMessage({
        title: 'Произошла ошибка при загрузке файла',
      });
    }
  }, [alertMessage, chatId, handlePickFile, sendMessageMutation]);

  const renderItem = React.useCallback(
    ({ item }: { item: File }) => {
      return (
        <RenderItem
          onDeleteFile={sendMessageWhenFileDeleted}
          fileUri={getPath(item.path) || ''}
          fileName={item.fileName}
          size={item.size}
          id={item.id}
          isMyFile={currentUserData?.id === item.user?.id}
          theme={theme.listFileItems}
          downloadFile={IS_ANDROID ? downloadFileAndroid : downloadFileIos}
          deleteFile={deleteFile}
        />
      );
    },
    [currentUserData?.id],
  );

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeAreaViewStyle}>
      <RequestHandler loading={loading}>
        <Box flexGrow={1}>
          <Box flex={1}>
            <FlatList
              contentContainerStyle={styles.contentContainerStyle}
              data={files}
              renderItem={renderItem}
              refreshing={refreshing}
              onRefresh={handleOnRefetch}
              keyExtractor={keyExtractor}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.1}
              onMomentumScrollBegin={onMomentumScrollBegin}
              ListEmptyComponent={
                <EmptyListComponent
                  IconComponent={EmptypageData.IconComponent}
                  iconSize={EmptypageData.iconSize}
                  title={EmptypageData.title}
                  subTitle={EmptypageData.subTitle}
                />
              }
              ListFooterComponent={
                handleLoadMoreLoading ? (
                  <Box paddingY={1}>
                    <Spinner />
                  </Box>
                ) : null
              }
            />
            <Center style={styles.buttonContainer}>
              <Button
                leftIcon={<ClipIcon color='primary.100' />}
                variant={theme.buttonVariant}
                onPress={pickFile}
                isLoading={sendMessageLoading || isFileLoading}
              >
                Загрузить файл
              </Button>
            </Center>
          </Box>
        </Box>
      </RequestHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 25,
    marginTop: 5,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 13,
  },
  safeAreaViewStyle: {
    flex: 1,
  },
});
