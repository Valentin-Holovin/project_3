import { Box, Image, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Subtask } from '../../../graphql/generated';
import { getPath, getStatusColor } from '../../../utils';
import { UserEmptyIcon } from '../../icons';

type Props = {
  item: Subtask;
  handleChange: (subtaskId: number, taskId: number) => void;
};

export const renderItem = ({ item, handleChange }: Props) => {
  const onPress = () => {
    handleChange(item?.id, item?.task?.id);
  };
  return (
    <Box style={styles.container}>
      <Box flexDirection={'row'}>
        <Box backgroundColor={getStatusColor(item?.status?.id)} style={styles.lineLeft} />
        <Box style={styles.userWrapper}>
          <Box mb={'4px'}>
            <TouchableOpacity onPress={onPress}>
              <Text fontSize={'16px'}>{`${item.name} #${item.code}`}</Text>
            </TouchableOpacity>
          </Box>
          <Box style={styles.userBlock}>
            <Box flexDirection={'row'} alignItems={'center'}>
              <Box>
                {item?.maintainer?.image ? (
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: getPath(item?.maintainer?.image) || '',
                    }}
                    fallbackElement={<UserEmptyIcon mr='5px' size={6} />}
                    alt='avatar'
                  />
                ) : (
                  <UserEmptyIcon mr='5px' size={6} />
                )}
              </Box>
              <Box>
                <Text fontWeight={'300'}>{item.maintainer?.login}</Text>
              </Box>
            </Box>
          </Box>
          <Box flexDirection={'row'} flexWrap='wrap'>
            {item.tags?.rows.map((item, index) => {
              return (
                <Box
                  style={[
                    styles.tagWrapper,
                    {
                      backgroundColor: item?.color || '',
                    },
                  ]}
                  key={index}
                >
                  <Box bg={'white'} size='6px' borderRadius={'50px'} />
                  <Text style={styles.tagText}>{item.name}</Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box style={styles.lineBottom} />
    </Box>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 25,
    marginRight: 5,
    width: 25,
  },
  container: {
    marginTop: 12,
  },
  lineBottom: {
    backgroundColor: '#AFAFAF',
    height: 1.5,
    marginTop: 12,
    width: '100%',
  },
  lineLeft: {
    borderRadius: 4,
    width: 7,
  },
  tagText: {
    color: 'white',
    fontSize: 13,
    paddingLeft: 5,
    paddingRight: 4,
  },
  tagWrapper: {
    alignItems: 'center',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'row',
    marginRight: 6,
    marginTop: 6,
    paddingLeft: 4,
  },
  userBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '78%',
  },
  userWrapper: {
    marginLeft: 8,
  },
});
