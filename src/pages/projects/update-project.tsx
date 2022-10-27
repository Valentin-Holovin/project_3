import { Formik, FormikValues } from 'formik';
import { Box, Button, Center, Text } from 'native-base';
import React from 'react';
import { Keyboard } from 'react-native';

import { SaveIcon, TextField } from '../../components';
import { useModalsContext } from '../../context/modal-context/modal-context';
import { useAlertMessage } from '../../hooks';
import { useUpdateProjectMutation } from '../../hooks/use-mutations/use-update-project-mutation';
import { colors } from '../../theme';
import { getErrorText } from '../../utils';
import { projectSchema } from '../../validation/schemas/project.schema';

export const UpdateProject = () => {
  const { handleChangeModal, modalsProps } = useModalsContext();

  const { currentProject } = modalsProps;

  const [updateProject, { loading, error }] = useUpdateProjectMutation(Number(currentProject?.id));

  const { alertMessage } = useAlertMessage();

  const handleFormSubmit = async (values: FormikValues) => {
    Keyboard.dismiss();

    try {
      await updateProject({
        variables: {
          data: {
            name: values.title,
            number: Number(values.number),
          },
          id: Number(currentProject?.id),
        },
      });
      alertMessage({
        title: 'Проект успешно отредактирован',
      });
    } catch {
      alertMessage({
        title: 'Произошла ошибка при редактировании проекта',
      });
    }
    handleChangeModal('');
  };

  const initialValues = {
    title: currentProject?.name,
    number: String(currentProject?.number),
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      validationSchema={projectSchema}
      initialValues={initialValues}
    >
      {({ handleSubmit }) => (
        <Box m={5}>
          <TextField name={'title'} placeholder={'Введите значение'} label={'Название проекта'} />
          <TextField name={'number'} placeholder={'Введите значение'} label={'Порядковый номер'} />

          <Text textAlign='center' color={colors.simpleColors.red} mb={1}>
            {error && getErrorText(error.message)}
          </Text>

          <Center>
            <Button
              isLoading={loading}
              leftIcon={<SaveIcon color='primary.100' />}
              variant={'black'}
              onPress={() => handleSubmit()}
            >
              Сохранить
            </Button>
          </Center>
        </Box>
      )}
    </Formik>
  );
};
