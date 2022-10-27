import { Box, HStack, Text } from 'native-base';
import React, { useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { DEVICE_WIDTH } from '../../../constants';
import { ProjectItemType, useModalsContext } from '../../../context/modal-context/modal-context';
import { SortingField, SortingOrders } from '../../../graphql/generated';
import { useGetProjectsQuery } from '../../../hooks';
import { colors } from '../../../theme';

export const Projects = () => {
  const { data: projectsData } = useGetProjectsQuery({
    variables: {
      data: {
        limit: 100,
        offset: 0,
        sort: {
          field: SortingField.Number,
          type: SortingOrders.Asc,
        },
      },
      tasksData: {
        isTaskStorage: false,
      },
    },
  });

  const projects =
    projectsData?.getProjects?.rows?.map((project) => ({
      id: project?.id,
      name: project?.name,
      number: project?.number,
    })) || null;

  const { modalsProps, handleChangeModal } = useModalsContext();

  const { setFieldValue } = modalsProps;

  const handleSetProject = useCallback(
    (project: ProjectItemType) => {
      setFieldValue && setFieldValue('project', project);
      handleChangeModal('');
    },
    [handleChangeModal, setFieldValue],
  );

  const keyExtractor = React.useCallback((item: ProjectItemType) => String(item?.id), []);

  const renderItem = React.useCallback(
    ({ item }: { item: ProjectItemType }) => (
      <TouchableOpacity
        onPress={() => {
          handleSetProject(item);
        }}
      >
        <HStack key={item.id} style={styles.wrapper}>
          <Text style={styles.number}>{`#${item?.number}`}</Text>
          <Text style={styles.title}>{item?.name}</Text>
        </HStack>
      </TouchableOpacity>
    ),
    [handleSetProject],
  );

  return (
    <Box mb={'60px'}>
      <FlatList
        data={(projects as ProjectItemType[]) || []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  number: {
    color: colors.primary['600'],
    fontSize: 16,
    fontWeight: '400',
    marginRight: 8,
  },
  title: {
    color: colors.primary['700'],
    fontSize: 16,
    fontWeight: '400',
    marginRight: 20,
  },
  wrapper: {
    backgroundColor: colors.primary['500'],
    marginBottom: 10,
    padding: 10,
    width: DEVICE_WIDTH - 40,
  },
});
