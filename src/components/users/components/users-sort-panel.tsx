import { Actionsheet, Box, HStack as Row, Pressable, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors, fontSizes } from '../../../theme';
import { CheckIcon, SmallArrowDownIcon, SmallArrowUpIcon } from '../../index';

const sortingFields = [
  {
    id: 'id',
    text: 'Идентификатору',
  },
  {
    id: 'login',
    text: 'Имени пользователя',
  },
  {
    id: 'lastConnect',
    text: 'Последнему входу',
  },
  {
    id: 'editDate',
    text: 'Последнему изменению',
  },
];

const sortingTypes = [
  {
    id: 'ASC',
    text: 'По возрастанию',
    icon: SmallArrowUpIcon,
  },
  {
    id: 'DESC',
    text: 'По убыванию',
    icon: SmallArrowDownIcon,
  },
];

type UserSortPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmitCallback: (arg1: string, arg2: string) => void;
};

export const UsersSortPanel = ({ isOpen, onClose, onSubmitCallback }: UserSortPanelProps) => {
  const [selectedSortBy, setSelectedSortBy] = React.useState('login');
  const [selectedSortType, setSelectedSortType] = React.useState('ASC');

  const onSubmit = () => {
    onSubmitCallback(selectedSortBy, selectedSortType);
    onClose();
  };

  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={onClose}
      size='full'
      _backdrop={{
        backgroundColor: '#000',
      }}
    >
      <Actionsheet.Content
        _dragIndicator={{
          // custom style props!
          backgroundColor: colors.grey.light,
          borderRadius: '3px',
          height: '6px',
          marginTop: '10px',
          marginBottom: '10px',
          width: '100px',
        }}
      >
        <Text style={styles.title}>Сортировать по:</Text>
        <Box width={'full'} marginBottom={'30px'}>
          {sortingFields.map((item) => {
            return (
              <Pressable
                style={[styles.item_row, selectedSortBy === item.id && styles.item_row_selected]}
                key={item.id}
                onPress={() => setSelectedSortBy(item.id)}
              >
                <Text style={styles.item_text}>{item.text}</Text>
                {selectedSortBy === item.id ? (
                  <CheckIcon size={4} style={styles.check_icon} />
                ) : null}
              </Pressable>
            );
          })}
        </Box>
        <Row style={styles.sort_btns_wrapper}>
          {sortingTypes.map((item) => {
            return (
              <Pressable
                key={item.id}
                style={[
                  styles.sort_type_btn,
                  selectedSortType === item.id && styles.sort_type_btn_selected,
                ]}
                onPress={() => setSelectedSortType(item.id)}
              >
                <item.icon size={5} mr={'6px'} />
                <Text style={styles.sort_type_btn_text}>{item.text}</Text>
              </Pressable>
            );
          })}
        </Row>
        <Pressable style={styles.submit_btn} onPress={onSubmit}>
          <Text style={styles.submit_btn_text}>Применить</Text>
        </Pressable>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

const styles = StyleSheet.create({
  check_icon: {
    position: 'absolute',
    right: 16,
  },
  item_row: {
    alignItems: 'center',
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    marginBottom: 10,
    paddingLeft: 16,
  },
  item_row_selected: {
    backgroundColor: colors.primary['500'],
  },
  item_text: {
    fontSize: fontSizes.lg,
    fontWeight: '400',
    lineHeight: 20,
  },
  sort_btns_wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingHorizontal: 16,
    width: '100%',
  },
  sort_type_btn: {
    alignItems: 'center',
    borderColor: colors.primary['600'],
    borderRadius: 2,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    width: 150,
  },
  sort_type_btn_selected: {
    backgroundColor: colors.primary['600'],
  },
  sort_type_btn_text: {
    fontSize: fontSizes.xs,
    fontWeight: '400',
    lineHeight: 14,
  },
  submit_btn: {
    alignItems: 'center',
    backgroundColor: colors.primary['700'],
    borderRadius: 2,
    display: 'flex',
    height: 30,
    justifyContent: 'center',
    marginBottom: 30,
    width: 240,
  },
  submit_btn_text: {
    color: colors.primary['100'],
    fontSize: fontSizes.md,
    fontWeight: '400',
    lineHeight: 16,
  },
  title: {
    color: colors.primary['700'],
    fontSize: fontSizes['2xl'],
    fontWeight: '400',
    lineHeight: 25,
    marginBottom: 20,
  },
});
