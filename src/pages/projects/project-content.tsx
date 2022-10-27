import { Box, Spinner } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import {
  EmptyListComponent,
  EmptyProjectsIcon,
  RequestHandler,
  SimpleScreenTitle,
} from '../../components';
import { Project } from '../../graphql/generated';
import { useProjects } from '../../hooks';
import { RenderItem } from './render-item/render-item';

export const ProjectContent = ({ isAdmin }: { isAdmin: boolean }) => {
  const {
    projects,
    loading,
    handleLoadMore,
    setStopHandleLoadMore,
    handleLoadMoreLoading,
    handleOnRefetch,
    refreshing,
  } = useProjects();

  const onMomentumScrollBegin = () => setStopHandleLoadMore(false);

  const renderItem = React.useCallback(
    ({ item }: { item: Project }) => <RenderItem item={item} isAdmin={isAdmin} />,
    [isAdmin],
  );

  const keyExtractor = React.useCallback((item: Project) => String(item?.id), []);

  return (
    <>
      <SimpleScreenTitle title='Проекты' />
      <RequestHandler loading={loading}>
        <Box
          style={{
            marginHorizontal: 20,
            marginVertical: 35,
          }}
        >
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            data={projects}
            renderItem={renderItem}
            refreshing={refreshing}
            onRefresh={handleOnRefetch}
            keyExtractor={keyExtractor}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            onMomentumScrollBegin={onMomentumScrollBegin}
            ListEmptyComponent={
              <EmptyListComponent
                IconComponent={EmptyProjectsIcon}
                iconSize={32}
                title='Проектов пока нет'
                subTitle='Попробуйте заглянуть сюда позже'
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
        </Box>
      </RequestHandler>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 130,
  },
});
