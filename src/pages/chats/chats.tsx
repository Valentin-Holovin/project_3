import { useIsFocused, useNavigation } from '@react-navigation/core';
import { Box, Input } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import {
  EmptyChatsIcon,
  EmptyListComponent,
  Layout,
  RequestHandler,
  SearchIcon,
  SimpleScreenTitle,
} from '../../components';
import { User } from '../../graphql/generated';
import { useAppActive, useNewChatActivity } from '../../hooks';
import { renderItem } from './render-item/render-item';

export const Chats = () => {
  const [searchText, setSearchText] = React.useState<string>('');

  const isFocused = useIsFocused();

  const { appStateVisible } = useAppActive();

  const { data, count, loading, refetch } = useNewChatActivity(searchText);

  const keyExtractor = (item: User, index: number) => (item.id || index).toString();

  const onChangeText = (text: string) => setSearchText(text);

  const getItemLayout = (data: User[] | null | undefined, index: number) => {
    return {
      length: 62.90909194946289,
      offset: 62.90909194946289 * ((data && data?.length) || 0),
      index,
    };
  };

  React.useEffect(() => {
    (appStateVisible === 'active' || isFocused) && refetch();
  }, [isFocused, refetch, appStateVisible]);

  return (
    <Layout>
      <SimpleScreenTitle title='Чаты' count={count} />
      <Box flex={1}>
        <Input
          value={searchText}
          borderTopWidth={0}
          onChangeText={onChangeText}
          InputLeftElement={<SearchIcon size={4} ml={4} />}
          pl={4}
          placeholder='Поиск чатов'
          placeholderTextColor='primary.700'
        />
        <RequestHandler loading={loading}>
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            data={data}
            renderItem={renderItem}
            onEndReachedThreshold={0.1}
            keyExtractor={keyExtractor}
            getItemLayout={getItemLayout}
            ListEmptyComponent={
              <EmptyListComponent
                IconComponent={EmptyChatsIcon}
                iconSize={32}
                title='Чатов пока нет'
                subTitle='Попробуйте заглянуть сюда позже'
              />
            }
          />
        </RequestHandler>
      </Box>
    </Layout>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
});
