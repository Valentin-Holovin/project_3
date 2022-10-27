import { HStack, Text } from 'native-base';
import React from 'react';

import { getPath } from '../../../utils';
import { UserImageWithStatus } from '../../user-image-with-status/user-image-with-status';

export interface IChatHeader {
  image?: string | null;
  isOnline?: boolean;
  name?: string | null;
  id?: number | null;
  type: 'Chat';
}

export const ChatHeader = ({ image, isOnline, name, id }: IChatHeader) => (
  <HStack flex={1} justifyContent='space-between' alignItems='center' ml={3} mr='5px'>
    <HStack alignItems='center'>
      <UserImageWithStatus size={24} image={getPath(image)} isOnline={isOnline} />
      <Text fontSize='md' fontWeight={300}>
        {name}
      </Text>
    </HStack>
    <HStack alignItems='center'>
      <Text fontSize='lg' fontWeight={700} mr='5px'>
        {`Чат #${id}`}
      </Text>
    </HStack>
  </HStack>
);
