import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ROUTES } from '../../../constants';
import { User } from '../../../graphql/generated';
import { EmptyListComponent, EmptyUpdatesIcon, RenderItem } from '../../index';
import { ListFooterComponent } from './list-footer-component';

type FlatListProps = {
  data: [];
  fetchMoreItems: () => void;
  showLoadSpinner: boolean;
  keyExtractor: (item: User, index: number) => string;
  onRefresh: () => void;
  refreshing: boolean;
};

export const UsersFlatList = React.memo(
  ({
    data,
    fetchMoreItems,
    showLoadSpinner,
    keyExtractor,
    onRefresh,
    refreshing,
  }: FlatListProps) => {
    const navigation = useNavigation();

    const renderItem = React.useCallback(
      ({ item, index }: { item: User; index: number }) => (
        <RenderItem
          item={item}
          index={index}
          navigateToUser={() =>
            navigation.navigate(ROUTES.user, {
              item: item,
            })
          }
        />
      ),
      [navigation],
    );

    return (
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
        onEndReached={fetchMoreItems}
        keyExtractor={keyExtractor}
        ListFooterComponent={<ListFooterComponent showSpinner={showLoadSpinner} />}
        ListEmptyComponent={
          <EmptyListComponent
            IconComponent={EmptyUpdatesIcon}
            iconSize={32}
            title='Пользователей нет'
            subTitle='Попробуйте заглянуть сюда позже'
          />
        }
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    );
  },
);

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 10,
  },
});
