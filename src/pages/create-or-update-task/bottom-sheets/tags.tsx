import { DeleteIcon, HStack } from 'native-base';
import React, { useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { PlusIcon, TagItem } from '../../../components';
import { DEVICE_WIDTH } from '../../../constants';
import { useModalsContext } from '../../../context/modal-context/modal-context';
import { TagType } from '../../../context/task-context/task-provider';
import { colors } from '../../../theme';

export const Tags = () => {
  const { modalsProps } = useModalsContext();

  const { values, setFieldValue } = modalsProps;

  const activeTagsCount = ([...values.tags] || [])?.filter((tag) => tag.active).length;

  const handleAddTag = useCallback(
    (id: number) => {
      const arr = [...values.tags].map((item) => {
        if (item.id === id) {
          item.active = true;
        }
        return item;
      });
      setFieldValue && setFieldValue('tags', arr);
    },
    [setFieldValue, values.tags],
  );
  const handleRemoveTag = useCallback(
    (id: number) => {
      const arr = [...values.tags].map((item) => {
        if (item.id === id) {
          item.active = false;
        }
        return item;
      });
      setFieldValue && setFieldValue('tags', arr);
    },
    [setFieldValue, values.tags],
  );

  const keyExtractor = React.useCallback((item: TagType) => String(item?.id), []);

  const renderItem = React.useCallback(
    ({ item }: { item: TagType }) => (
      <HStack key={item.id} style={styles.wrapper}>
        <TagItem title={item.title} color={item.color} />
        <TouchableOpacity
          onPress={() => {
            if (item.active) {
              handleRemoveTag(item.id);
            } else {
              handleAddTag(item.id);
            }
          }}
        >
          {!item.active && activeTagsCount < 3 ? (
            <PlusIcon color={colors.primary['600']} />
          ) : // eslint-disable-next-line unicorn/no-nested-ternary
          item.active ? (
            <DeleteIcon color={colors.primary['600']} />
          ) : null}
        </TouchableOpacity>
      </HStack>
    ),
    [activeTagsCount, handleAddTag, handleRemoveTag],
  );

  return (
    // <RequestHandler loading={loadingTags}>
    <FlatList
      data={(values.tags as TagType[]) || []}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
    // </RequestHandler>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    padding: 10,
    width: DEVICE_WIDTH - 40,
  },
});
