import * as Clipboard from 'expo-clipboard';
import { HStack as Row, IconButton, Text } from 'native-base';
import React from 'react';
import { Share, StyleSheet } from 'react-native';

import { useAlertMessage } from '../../../hooks';
import { colors, fontSizes } from '../../../theme';
import { getPath } from '../../../utils';
import { CopyIcon, ShareIcon } from '../../index';

type UserCopyAndSharePropsTypes = {
  link?: string;
};

export const UsersRegistrationLink = (props: UserCopyAndSharePropsTypes) => {
  const { alertMessage } = useAlertMessage();

  const copyToClipboard = () => {
    if (props.link) Clipboard.setString(getPath(props.link) || '');
    alertMessage({
      title: 'Скопировано в буфер обмена!',
    });
  };

  const shareLink = async () => {
    if (props.link) {
      await Share.share({
        title: 'Registration link:',
        message: getPath(props.link) || '',
      });
    }
  };

  return (
    <Row style={styles.row}>
      <Row style={styles.subRow}>
        <IconButton
          icon={<CopyIcon size={5} />}
          height={'full'}
          width={'40px'}
          borderRadius={'none'}
          onPress={copyToClipboard}
        />
        <Text style={styles.link} isTruncated={true}>
          {getPath(props.link)}
        </Text>
      </Row>
      <IconButton icon={<ShareIcon size={5} />} onPress={shareLink} style={styles.shareIconBtn} />
    </Row>
  );
};

const styles = StyleSheet.create({
  link: {
    color: colors.primary['700'],
    fontSize: fontSizes.md,
    fontWeight: '300',
    lineHeight: 16,
  },
  row: {
    alignItems: 'center',
    backgroundColor: colors.primary['500'],
    borderColor: colors.primary['600'],
    borderWidth: 1,
    height: 36,
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  shareIconBtn: {
    borderRadius: 0,
    height: '100%',
    position: 'absolute',
    right: 0,
  },
  subRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.75,
    height: '100%',
    justifyContent: 'flex-start',
  },
});
