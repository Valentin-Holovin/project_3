import { HStack, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { FilteredIcon, FilterIcon } from '../../components/icons';
import { useModalsContext } from '../../context/modal-context/modal-context';
import { Modals } from '../../context/modal-context/modal-provider';
import { Tag } from '../../graphql/generated';

type Props = {
  title: string;
  filterTags: Tag[] | null;
};

export const HeaderTasksTitle = ({ title, filterTags }: Props) => {
  const { handleChangeModal } = useModalsContext();

  const handlePress = () => {
    handleChangeModal(Modals.SORTING_TAGS);
  };

  return (
    <HStack style={styles.container}>
      <Text variant='title'>{title}</Text>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          padding: 4,
        }}
      >
        {filterTags && filterTags?.length > 0 ? <FilteredIcon size={6} /> : <FilterIcon size={5} />}
      </TouchableOpacity>
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
