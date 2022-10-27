// eslint-disable-next-line object-curly-newline
import { Box, Center, Divider, HStack, Spinner, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

import { Maybe } from '../../../graphql/generated';
import { notesMessageType } from '../../../types/chat';
import { formatToDateAndTime } from '../../../utils';
import { CloseIcon } from '../../icons';
import { UserImageWithStatus } from '../../user-image-with-status/user-image-with-status';

type Props = {
  text?: Maybe<string>;
  date: string;
  isAdmin?: boolean;
  isMyNote: boolean;
  id: number;
  deleteNote: (nodeId: number) => Promise<void>;
  theme: notesMessageType;
  image: string | null;
  isOnline: boolean;
  login: string;
};

export const RenderItem = ({
  text,
  date,
  isAdmin = false,
  deleteNote,
  id,
  isMyNote,
  theme,
  image,
  isOnline,
  login,
}: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleDeleteMessage = async () => {
    setIsLoading(true);
    if (deleteNote && !isLoading) {
      await deleteNote(id);
    }
    setIsLoading(false);
  };

  return (
    <HStack
      style={styles.container}
      bg={isMyNote ? theme.myNotesBackgroundColor : theme.companionNotesBackgroundColor}
    >
      <Box width='92%'>
        <Hyperlink
          linkDefault={true}
          linkStyle={{
            color: '#2980b9',
          }}
        >
          <Text fontWeight={700} mb={1} fontSize='lg'>
            {text}
          </Text>
        </Hyperlink>

        <HStack alignItems='center' justifyContent='space-between'>
          <HStack alignItems='center'>
            <UserImageWithStatus image={image} isOnline={isOnline} />
            <Text>{login}</Text>
          </HStack>
          <Text fontWeight={300} color='primary.600'>
            {formatToDateAndTime(date)}
          </Text>
        </HStack>
      </Box>
      {isMyNote || isAdmin ? (
        <HStack>
          <Box flexGrow={1} marginX={2}>
            <Divider flexGrow={1} orientation='horizontal' bg={theme.dividerColor} size={'1px'} />
          </Box>
          <Box>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                flex: 1,
              }}
              onPress={handleDeleteMessage}
            >
              <Center flex={1}>{isLoading ? <Spinner size={16} /> : <CloseIcon size={4} />}</Center>
            </TouchableOpacity>
          </Box>
        </HStack>
      ) : null}
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
