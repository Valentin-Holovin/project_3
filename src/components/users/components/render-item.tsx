import { Box } from 'native-base';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { User } from '../../../graphql/generated';
import { colors } from '../../../theme';
import { UsersActivityInfo, UsersInfo, UsersLastEntry, UsersRegistrationLink } from './index';

export const RenderItem = ({
  item,
  navigateToUser,
}: {
  item: User;
  index: number;
  navigateToUser: () => void;
}) => {
  return (
    <Box style={styles.container}>
      <Pressable onPress={navigateToUser}>
        <UsersInfo name={item.login} id={item.id} role={item.role} src={item?.image} />
      </Pressable>
      <UsersActivityInfo
        createdBy={item.creator?.login || 'Неизвестно'}
        createdAt={item.createdAt}
        editedBy={item.lastEditerUser?.login || item.creator?.login || 'Неизвестно'}
        editedAt={item.updatedAt}
      />
      <UsersLastEntry date={item.lastConnect} isRegistrationFinished={!item.registrationLink} />
      {item.registrationLink && <UsersRegistrationLink link={item.registrationLink} />}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.grey.light,
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
