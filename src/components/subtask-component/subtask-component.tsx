import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ROUTES } from '../../constants';
import { Subtask } from '../../graphql/generated';
import { useTaskSubtask } from '../../hooks';
import { pageEmpty } from '../../types/pager-view';
import { EmptyListComponent } from '../empty-list-component/empty-list-component';
import { RequestHandler } from '../request-handler/request-handler';
import { renderItem } from './render-item/render-item';

type Props = {
  EmptypageData: pageEmpty;
};

export const SubtaskComponent = ({ EmptypageData }: Props) => {
  const { loading, subtask, refreshing, handleOnRefetch } = useTaskSubtask();

  const navigation = useNavigation();

  const handleChange = useCallback(
    (subtaskId: number, taskId: number): void => {
      navigation.navigate(ROUTES.subtusk, {
        subtaskId: Number(subtaskId),
        taskId: taskId || 0,
        id: subtaskId,
      });
    },
    [navigation],
  );

  const listItem = useCallback(
    (item: ListRenderItemInfo<Subtask>): JSX.Element => {
      return renderItem({
        ...item,
        handleChange,
      });
    },
    [handleChange],
  );

  const keyExtractor = (item: Subtask, index: number) => (item.id || index).toString();

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeAreaViewStyle}>
      <RequestHandler loading={loading}>
        <Box flexGrow={1}>
          <Box flex={1}>
            <FlatList
              contentContainerStyle={styles.contentContainerStyle}
              data={subtask}
              refreshing={refreshing}
              onRefresh={handleOnRefetch}
              renderItem={listItem}
              keyExtractor={keyExtractor}
              ListEmptyComponent={
                <EmptyListComponent
                  IconComponent={EmptypageData.IconComponent}
                  iconSize={EmptypageData.iconSize}
                  title={EmptypageData.title}
                  subTitle={EmptypageData.subTitle}
                />
              }
            />
          </Box>
        </Box>
      </RequestHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 13,
  },
  safeAreaViewStyle: {
    flex: 1,
  },
});
