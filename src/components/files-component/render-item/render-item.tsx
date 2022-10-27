import { HStack, Spinner, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { listFileItemsType } from '../../../types/chat';
import { CloseIcon } from '../../icons';

type Props = {
  fileName: string;
  fileUri: string;
  size: number;
  id: number;
  isMyFile: boolean;
  theme: listFileItemsType;
  downloadFile: (file: string, fileName: string) => Promise<void>;
  deleteFile: (fileId: number | string) => Promise<void>;
  onDeleteFile: (fileName: string) => Promise<void>;
};

export const RenderItem = ({
  fileName,
  fileUri,
  size,
  id,
  isMyFile,
  theme,
  downloadFile,
  deleteFile,
  onDeleteFile,
}: Props) => {
  const [loading, isLoading] = React.useState(false);

  const handleDownloadFile = async () => {
    try {
      isLoading(true);
      await downloadFile(fileUri, fileName);
    } finally {
      isLoading(false);
    }
  };

  const handleDeleteFile = async () => {
    try {
      isLoading(true);
      await deleteFile(id);
      await onDeleteFile(fileName);
    } finally {
      isLoading(false);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleDownloadFile}>
      <HStack
        style={styles.container}
        bg={isMyFile ? theme.myMessageBackgroundColor : theme.companionListFileBackgroundColor}
      >
        <Text fontWeight={300} flex={1} paddingX={2}>
          {fileName}
        </Text>
        <HStack alignItems='center'>
          {size && <Text mr='20px'>{`${size.toFixed(1)} KB`}</Text>}
          {loading ? (
            <Spinner />
          ) : (
            <TouchableOpacity activeOpacity={0.7} onPress={handleDeleteFile}>
              <CloseIcon size={4} color='primary.700' margin={1} />
            </TouchableOpacity>
          )}
        </HStack>
      </HStack>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 6,
    paddingVertical: 12,
  },
});
