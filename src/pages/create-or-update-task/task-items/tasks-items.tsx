import { useFormikContext } from 'formik';
import { Box, HStack, Text } from 'native-base';
import React from 'react';
import { Keyboard, StyleSheet } from 'react-native';

import { TagItem } from '../../../components';
import {
  modalsProps,
  ProjectItemType,
  useModalsContext,
} from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { TagType } from '../../../context/task-context/task-provider';
import { User, UserRole } from '../../../graphql/generated';
import { colors, fontSizes } from '../../../theme';
import { TaskItem, TaskItemTypes } from './task-item';

type ValuesType = {
  tags: TagType[];
  project: ProjectItemType | null;
  user: User | null;
};

type Props = {
  isUpdate: boolean;
  type: string;
  userRole: string;
  isCreateSubtask: boolean;
};

export const TasksItems = ({ isUpdate, type, userRole, isCreateSubtask }: Props) => {
  const { handleChangeModal, setModalsProps } = useModalsContext();
  const { values, setFieldValue } = useFormikContext<ValuesType>();

  const handleEdit = (value: Modals | '') => {
    handleChangeModal(value);
  };

  const getActiveTags = (tags: TagType[]) => {
    return tags.filter((tag) => tag.active);
  };

  const activeTags = getActiveTags(values.tags);
  const isNotUser = userRole !== UserRole.User;

  return (
    <>
      {type === 'Task' && (
        <TaskItem
          type={TaskItemTypes.PROJECT}
          isEmpty={!values?.project}
          handleEdit={() => {
            if (!isUpdate) {
              setModalsProps((prevState: modalsProps) => ({
                ...prevState,
                setFieldValue,
              }));
              handleEdit(Modals.SELECTION_PROJECT);
              Keyboard.dismiss();
            }
          }}
          isUpdate={isUpdate}
        >
          <Box pl='8px' w={'90%'}>
            <Text style={styles.itemTitle}>Выберите проект</Text>
            <Text
              numberOfLines={1}
              style={styles.itemDescription}
            >{`#${values?.project?.number} ${values?.project?.name}`}</Text>
          </Box>
        </TaskItem>
      )}

      {isNotUser && !isCreateSubtask && (
        <TaskItem
          type={TaskItemTypes.USER}
          isEmpty={!values?.user}
          userImg={values?.user?.image as string}
          handleEdit={() => {
            setModalsProps((prevState: modalsProps) => ({
              ...prevState,
              values,
              setFieldValue,
            }));
            handleEdit(
              type === 'Task' && isUpdate ? Modals.USERS_OF_TASK : Modals.SELECTION_MAIN_USER,
            );
            Keyboard.dismiss();
          }}
        >
          <Box pl='8px' w={'90%'}>
            <Text style={styles.itemTitle}>Ответственный за задачу</Text>
            <Text numberOfLines={1} style={styles.itemDescription}>
              {values?.user?.login}
            </Text>
          </Box>
        </TaskItem>
      )}

      <TaskItem
        type={TaskItemTypes.TAGS}
        isEmpty={activeTags.length === 0}
        handleEdit={() => {
          if (!(userRole === UserRole.Moderator && isUpdate)) {
            setModalsProps((prevState: modalsProps) => ({
              ...prevState,
              values,
              setFieldValue,
            }));
            handleEdit(Modals.ADD_TAGS);
            Keyboard.dismiss();
          }
        }}
        isUpdate={userRole === UserRole.Moderator && isUpdate}
      >
        <Box ml={'8px'}>
          <Text style={styles.itemTitle}>Теги</Text>
          <HStack flexWrap='wrap'>
            {activeTags?.map((tag, index) => (
              <TagItem key={index} title={tag.title} color={tag.color} />
            ))}
          </HStack>
        </Box>
      </TaskItem>
    </>
  );
};

const styles = StyleSheet.create({
  itemDescription: {
    color: colors.primary['700'],
    fontSize: 16,
    fontWeight: '400',
  },
  itemTitle: {
    color: colors.primary['700'],
    fontSize: fontSizes.xs,
    fontWeight: '300',
  },
});
