import { Box, HStack, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { MessageIcon, UserImageWithStatus } from '../../../components';
import { ROUTES } from '../../../constants';
import { User } from '../../../graphql/generated';
import { navigationRef } from '../../../navigation/root-navigation';
import { colors } from '../../../theme';
import { getPath } from '../../../utils';

export const renderItem = ({ item }: { item: User; index: number }) => {
  const onPressChat = () =>
    navigationRef.navigate(ROUTES.chat, {
      item,
    });

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPressChat}>
      <Box style={styles.itemContainer}>
        <HStack style={styles.contantContainer}>
          <HStack style={styles.container}>
            <UserImageWithStatus isOnline={item.onlineStatus} image={getPath(item?.image)} />
            <Text style={styles.textUserName} fontWeight='bold'>
              {item.login}
            </Text>
          </HStack>
          {item.chats && item?.chats[0]?.unreadMessagesCount > 0 ? (
            <HStack style={styles.containerMessages}>
              <Text style={styles.textUserName}>{item?.chats[0]?.unreadMessagesCount}</Text>
              <MessageIcon size={4} />
            </HStack>
          ) : null}
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerMessages: {
    alignItems: 'flex-end',
  },
  contantContainer: {
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  itemContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textUserName: {
    color: colors.primary[700],
    fontSize: 16,
    marginRight: 5,
  },
});
