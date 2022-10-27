import { HStack as Row, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

export interface IUsersHeader {
  type: 'Users';
}

export const UsersHeader = () => (
  <Row style={styles.row}>
    <Text fontSize='2xl' fontWeight={700}>
      Все пользователи
    </Text>
  </Row>
);

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
});
