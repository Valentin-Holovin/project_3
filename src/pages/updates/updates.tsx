import { useNavigation } from '@react-navigation/core';
import { Box, Divider, HStack, Image, Text } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import {
  EmptyListComponent,
  EmptyUpdatesIcon,
  Layout,
  RequestHandler,
  SimpleScreenTitle,
  UserEmptyIcon,
} from '../../components';
import { useAppActive, useNewActivity, useReadProjectActivitiesMutation } from '../../hooks';
import { colors } from '../../theme';
import { getPath } from '../../utils';

export const Updates = () => {
  const { data, count, loading, refetch } = useNewActivity();

  const [readProjectActivitiesMutation] = useReadProjectActivitiesMutation();

  const navigation = useNavigation();

  const { appStateVisible } = useAppActive();

  const lastIndex = data.length - 1;

  React.useEffect(() => {
    if (appStateVisible === 'active') {
      refetch();
    }
  }, [appStateVisible]);

  const renderItem = React.useCallback(
    ({ item, index }: { item: typeof data[0]; index: number }) => {
      const onPress = async () => {
        navigation.navigate(item.type, {
          id: item.data?.id || 0,
        });
        if (item.typeValue) {
          await readProjectActivitiesMutation({
            variables: {
              [item.typeValue]: Number(item.data?.id),
            },
            update(cache, { data }) {
              if (data?.readProjectActivities) {
                const normalizedId = cache?.identify({
                  id: item.id,
                  __typename: 'ProjectActivity',
                });
                cache?.evict({
                  id: normalizedId,
                });
                cache?.gc();
              }
            },
          });
        }
      };

      return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <Box style={styles.itemContainer}>
            <HStack style={styles.contantContainer}>
              <Box flex={0.7}>
                <Text style={styles.projectText}>{item.project?.name}</Text>
                <Text style={styles.taskName}>{item.data?.name}</Text>
              </Box>
              <Box flex={0.3}>
                <HStack style={styles.userContainer}>
                  <HStack direction='row' alignItems='center'>
                    <Divider style={styles.userLineStyle} orientation={'vertical'} mr={1} />
                    {item.data?.maintainer?.image ? (
                      <Image
                        borderRadius='full'
                        resizeMode='contain'
                        style={styles.userAvatar}
                        source={{
                          uri: getPath(item.data?.maintainer?.image),
                        }}
                        alt='user avatar'
                        fallbackElement={<UserEmptyIcon mr={1} size={5} />}
                      />
                    ) : (
                      <UserEmptyIcon mr={1} size={5} />
                    )}
                  </HStack>
                  <Text style={styles.textUserName}>{item.data?.maintainer?.login || ''}</Text>
                </HStack>
                <Text fontWeight={700} style={styles.codeText}>
                  #{item.data?.code}
                </Text>
              </Box>
            </HStack>
            {index !== lastIndex && <Divider style={styles.lineStyle} />}
          </Box>
        </TouchableOpacity>
      );
    },
    [lastIndex],
  );

  const keyExtractor = React.useCallback((item: typeof data[0]) => item.id.toString(), []);

  return (
    <Layout>
      <SimpleScreenTitle title='Обновления' count={count} />
      <RequestHandler loading={loading}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={
            <EmptyListComponent
              IconComponent={EmptyUpdatesIcon}
              iconSize={32}
              title='Обновлений ещё нет'
              subTitle='Попробуйте заглянуть сюда позже'
            />
          }
        />
      </RequestHandler>
    </Layout>
  );
};

const styles = StyleSheet.create({
  codeText: {
    color: colors.primary[700],
    fontSize: 14,
  },
  contantContainer: {
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 130,
  },
  itemContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  lineStyle: {
    color: colors.primary[600],
    width: '100%',
  },
  projectText: {
    color: colors.primary[700],
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 12,
  },
  taskName: {
    fontSize: 14,
    fontWeight: '300',
    maxWidth: 210,
  },
  textUserName: {
    fontSize: 16,
  },
  userAvatar: {
    height: 20,
    marginRight: 4,
    width: 20,
  },
  userContainer: {
    alignItems: 'center',
    paddingBottom: 11,
  },
  userLineStyle: {
    backgroundColor: colors.primary[500],
    height: 20,
    width: 1,
  },
});
