import { HStack as Row, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors } from '../../../theme';
import { fontSizes } from '../../../theme/foundations/font-sizes.theme';
import { millisecondsToDate } from '../../../utils';
import { EntryIcon } from '../../index';

type UserLastEntryPropsTypes = {
  date?: string | null;
  isRegistrationFinished: boolean;
};

export const UsersLastEntry = (props: UserLastEntryPropsTypes) => {
  return (
    <Row style={styles.row}>
      <EntryIcon size={5} mr={'12px'} />
      <Text style={styles.text}>
        {props.date && props.isRegistrationFinished
          ? millisecondsToDate(Number(props.date))
          : 'Регистрация не завершена'}
      </Text>
    </Row>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  text: {
    color: colors.primary['700'],
    fontSize: fontSizes.md,
    fontWeight: '300',
    lineHeight: 16,
  },
});
