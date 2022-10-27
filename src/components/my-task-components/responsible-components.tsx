import { Box, Spinner } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { useResponsible } from '../../hooks';
import { TasksListItemType } from '../../types/task';
import { EmptyListComponent } from '../empty-list-component/empty-list-component';
import { EmptyTaskIcon } from '../icons';
import { RequestHandler } from '../request-handler/request-handler';
import { RenderItemUser } from './render-item-user';

export const ResponsibleComponents = () => {
  const {
    loading,
    handleLoadMore,
    handleLoadMoreLoading,
    setStopHandleLoadMore,
    data,
    refreshing,
    handleOnRefetch,
  } = useResponsible();

  const onEndReached = async () => await handleLoadMore();

  const onMomentumScrollBegin = React.useCallback(() => setStopHandleLoadMore(false), []);

  const keyExtractor = React.useCallback(
    (item: TasksListItemType, index: number) => (item.id || index).toString(),
    [],
  );

  const renderItemUser = React.useCallback(
    ({ item }: { item: TasksListItemType }) => <RenderItemUser item={item} />,
    [],
  );

  return (
    <Box flex={1}>
      <RequestHandler loading={loading}>
        <FlatList
          style={styles.contentContainerStyle}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={keyExtractor}
          refreshing={refreshing}
          onRefresh={handleOnRefetch}
          data={data || []}
          renderItem={renderItemUser}
          onMomentumScrollBegin={onMomentumScrollBegin}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            handleLoadMoreLoading ? (
              <Box paddingY={1}>
                <Spinner />
              </Box>
            ) : null
          }
          ListEmptyComponent={
            <Box style={styles.emptyComponentStyle}>
              <EmptyListComponent
                IconComponent={EmptyTaskIcon}
                iconSize={32}
                title='Задач пока нет'
                subTitle='Попробуйте заглянуть сюда позже'
              />
            </Box>
          }
        />
      </RequestHandler>
    </Box>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
  emptyComponentStyle: {
    flex: 1,
  },
});
