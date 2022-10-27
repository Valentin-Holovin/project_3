import { Box, HStack as Row, VStack as Column } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors } from '../../../theme';
import { UsersAvatar, UsersId, UsersName, UsersRole } from './index';

type UserInfoPropsTypes = {
  name?: string | null;
  id?: number | null;
  role?: string | null;
  src?: string | null;
};

export const UsersInfo = (props: UserInfoPropsTypes) => {
  return (
    <Row style={styles.row}>
      <Row justifyContent={'flex-start'} alignItems={'center'}>
        <UsersAvatar src={props.src} />
        <Column justifyContent={'space-between'} alignItems={'flex-start'}>
          <UsersName name={props.name} />
          <UsersId id={props.id} />
        </Column>
      </Row>
      <Box height={'full'}>
        <UsersRole role={props.role} />
      </Box>
    </Row>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.grey.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});
