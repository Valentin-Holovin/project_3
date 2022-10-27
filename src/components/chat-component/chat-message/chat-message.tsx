// eslint-disable-next-line object-curly-newline
import { Box, Center, Divider, HStack, Spinner, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

import { AllProjectActions, DEVICE_WIDTH } from '../../../constants';
import { chatMessageType } from '../../../types/chat';
import { formatToDateAndTime } from '../../../utils';
import { CheckMessageIcon, CloseIcon } from '../../icons';
import { UserImageWithStatus } from '../../user-image-with-status/user-image-with-status';

type Props = {
  text: string;
  date: string;
  isAdmin?: boolean;
  isMymessage: boolean;
  withAvatarUser?: boolean;
  id: number;
  deleteMessage?: (messageId: number) => Promise<void>;
  theme: chatMessageType;
  isRead: boolean;
  avatar?: string;
  name?: string;
  isOnline?: boolean;
  type: AllProjectActions;
};

export const ChatMessage = ({
  text,
  date,
  isAdmin = false,
  withAvatarUser = false,
  deleteMessage,
  id,
  isMymessage,
  theme,
  isRead,
  avatar,
  name,
  isOnline = false,
  type,
}: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleDeleteMessage = async () => {
    setIsLoading(true);
    if (deleteMessage && !isLoading) {
      await deleteMessage(id);
    }
    setIsLoading(false);
  };

  return (
    <HStack
      style={styles.container}
      borderBottomLeftRadius={isMymessage ? 16 : 0}
      borderBottomRightRadius={isMymessage ? 0 : 16}
      alignSelf={isMymessage ? 'flex-end' : 'flex-start'}
      bg={isMymessage ? theme.myMessageBackgroundColor : theme.companionMessageBackgroundColor}
      flexDirection={isMymessage ? 'row-reverse' : 'row'}
    >
      <Box paddingRight={3}>
        <Hyperlink
          linkDefault={true}
          linkStyle={{
            color: '#2980b9',
          }}
        >
          <Text fontWeight={700} mb={1} maxWidth={DEVICE_WIDTH - 90}>
            {text}
          </Text>
        </Hyperlink>
        <HStack alignItems='center'>
          {withAvatarUser ? (
            <HStack alignItems='center' mr={2}>
              <UserImageWithStatus image={avatar} size={24} isOnline={isOnline} />
              <Text>{name}</Text>
            </HStack>
          ) : null}
          <Text fontWeight={300}>{formatToDateAndTime(date)}</Text>
          {isMymessage && (
            <CheckMessageIcon size={4} ml={1} color={isRead ? 'secondary.400' : 'primary.600'} />
          )}
        </HStack>
      </Box>
      {isMymessage || isAdmin ? (
        <Box>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.touchableOpacityStyle}
            onPress={handleDeleteMessage}
          >
            <HStack
              flex={1}
              alignItems='center'
              justifyContent='center'
              alignContent='center'
              flexDirection={isMymessage ? 'row' : 'row-reverse'}
              pl='15px'
            >
              <Center flex={1}>
                <Center flex={1}>{isLoading ? <Spinner size={16} /> : <CloseIcon />}</Center>
              </Center>
              <Box flexGrow={1} marginX={2}>
                <Divider
                  flexGrow={1}
                  orientation='horizontal'
                  bg={theme.dividerColor}
                  size={'1px'}
                />
              </Box>
            </HStack>
          </TouchableOpacity>
        </Box>
      ) : null}
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    flex: 1,
    marginTop: 10,
    paddingLeft: 15,
    paddingVertical: 10,
  },
  touchableOpacityStyle: {
    flex: 1,
  },
});
