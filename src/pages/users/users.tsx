import { Box, IconButton, useDisclose } from 'native-base';
import React from 'react';

import {
  Layout,
  RequestHandler,
  ScreenHeader,
  SortingIcon,
  UsersFlatList,
  UsersSearch,
  UsersSortPanel,
} from '../../components';
import { User } from '../../graphql/generated';
import { useDebounce, useGetAllUsersQuery } from '../../hooks';

const fetchLimit = 4;

export const Users = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const [search, setSearch] = React.useState('');
  const [sortBy, setSortBy] = React.useState('id');
  const [sortType, setSortType] = React.useState('ASC');

  const [showLoadSpinner, setShowLoadSpinner] = React.useState<boolean>(false);

  const onChangeSearchCallback = React.useCallback((value: string) => {
    setSearch(value);
  }, []);

  const onSetSortingParameters = React.useCallback((value1: string, value2: string) => {
    setSortBy(value1);
    setSortType(value2);
  }, []);

  const { loading, data, fetchMore, refetch } = useGetAllUsersQuery({
    variables: {
      input: {
        offset: 0,
        limit: fetchLimit,
        search: useDebounce(search),
        sortBy: sortBy,
        sortType: sortType,
      },
    },
  });

  const [refreshing, setRefreshing] = React.useState(false);

  const handleOnRefresh = React.useCallback(async () => {
    try {
      setRefreshing(true);
      await refetch();
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  const fetchMoreItems = React.useCallback(async () => {
    if (data?.getAllUsers?.rows?.length === data?.getAllUsers?.count) return;
    setShowLoadSpinner(true);
    await fetchMore({
      variables: {
        input: {
          offset: data?.getAllUsers?.rows?.length,
          limit: fetchLimit,
          search: search,
          sortBy: sortBy,
          sortType: sortType,
        },
      },
    });
    setShowLoadSpinner(false);
  }, [data?.getAllUsers?.rows?.length, data?.getAllUsers?.count, search, sortType, sortBy]);

  const keyExtractor = React.useCallback(
    (item: User, index: number) => (item?.id || index).toString(),
    [],
  );

  return (
    <Layout>
      <Box flex={1}>
        <ScreenHeader type='Users' />
        <IconButton
          position={'absolute'}
          right={'0px'}
          top={'5px'}
          icon={<SortingIcon size={7} />}
          onPress={onOpen}
        />
        <UsersSearch
          searchResultQuantity={data?.getAllUsers?.count}
          onChangeTextCallback={onChangeSearchCallback}
        />
        <RequestHandler loading={loading && !data}>
          <UsersFlatList
            data={data?.getAllUsers?.rows}
            keyExtractor={keyExtractor}
            fetchMoreItems={fetchMoreItems}
            showLoadSpinner={showLoadSpinner}
            onRefresh={handleOnRefresh}
            refreshing={refreshing}
          />
        </RequestHandler>
        <UsersSortPanel
          isOpen={isOpen}
          onClose={onClose}
          onSubmitCallback={onSetSortingParameters}
        />

        {/* <AddUserBtn /> */}
      </Box>
    </Layout>
  );
};
