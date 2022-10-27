import { HStack as Row, Text, VStack as Column } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors } from '../../../theme';
import { fontSizes } from '../../../theme/foundations/font-sizes.theme';
import { millisecondsToDate } from '../../../utils';
import { EditIcon, UserAddIcon } from '../../index';

type UserActivityInfoPropsTypes = {
  createdAt?: string | null;
  createdBy?: string | null;
  editedAt?: string | null;
  editedBy?: string | null;
};

export const UsersActivityInfo = (props: UserActivityInfoPropsTypes) => {
  return (
    <Row style={styles.row}>
      {(props.createdAt || props.createdBy) && (
        <Row style={styles.subRow}>
          <UserAddIcon size={5} fill={'#AFAFAF'} mr={'12px'} />
          <Column justifyContent={'flex-start'} alignItems={'flex-start'} mt={'2px'}>
            {props.createdBy && <Text style={styles.nameBy}>{props.createdBy}</Text>}
            {props.createdAt && (
              <Text style={styles.dateAt}>{millisecondsToDate(Number(props.createdAt))}</Text>
            )}
          </Column>
        </Row>
      )}

      {(props.editedBy || props.editedAt) && (
        <Row style={styles.subRow}>
          <EditIcon fill={'#AFAFAF'} size={5} mr={'12px'} />
          <Column justifyContent={'flex-start'} alignItems={'flex-start'} mt={'2px'}>
            {props.editedBy && <Text style={styles.nameBy}>{props.editedBy}</Text>}
            {props.editedAt && (
              <Text style={styles.dateAt}>{millisecondsToDate(Number(props.editedAt))}</Text>
            )}
          </Column>
        </Row>
      )}
    </Row>
  );
};

const styles = StyleSheet.create({
  dateAt: {
    color: colors.primary['700'],
    fontSize: fontSizes.xs,
    fontWeight: '300',
    lineHeight: 14,
  },

  nameBy: {
    color: colors.primary['700'],
    fontSize: fontSizes.md,
    fontWeight: '300',
    lineHeight: 16,
    marginBottom: 1,
  },
  row: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.grey.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 55,
    paddingVertical: 8,
  },
  subRow: {
    alignItems: 'flex-start',
    height: '100%',
    justifyContent: 'flex-start',
    width: '50%',
  },
});
