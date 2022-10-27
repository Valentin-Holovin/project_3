import { Box, HStack as Row, Input, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors, fontSizes } from '../../../theme';
import { SearchIcon } from '../../index';

type UserSearchPropsTypes = {
  onChangeTextCallback: (value: string) => void;
  searchResultQuantity?: number | null;
};

export const UsersSearch = React.memo((props: UserSearchPropsTypes) => {
  const [value, setValue] = React.useState('');
  const onChangeText = (text: string) => {
    props.onChangeTextCallback(text);
    setValue(text);
  };

  return (
    <Row style={styles.container}>
      <Box ml={'21px'} maxW={'75%'}>
        <Input
          value={value}
          onChangeText={onChangeText}
          InputLeftElement={<SearchIcon size={4} ml={'2px'} mr={'4px'} />}
          placeholder={'Поиск пользователей'}
          placeholderTextColor={'primary.700'}
          fontWeight={300}
          fontSize={'lg'}
          w={'295px'}
          maxW={'100%'}
          borderWidth={'0'}
          // StyleSheet.create doesn`t work here
        />
      </Box>
      <Text style={styles.text}>{props?.searchResultQuantity || ''}</Text>
    </Row>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: colors.primary['600'],
    borderBottomWidth: 1,
    height: 40,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    color: colors.primary['700'],
    fontSize: fontSizes.lg,
    fontWeight: '300',
    marginRight: 22,
  },
});
