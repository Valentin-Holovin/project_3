import { Formik, FormikValues } from 'formik';
import { Box, Button, Center, Text } from 'native-base';
import React from 'react';
import { Keyboard } from 'react-native';

import { SaveIcon, TextField } from '../../components';
import { useModalsContext } from '../../context/modal-context/modal-context';
import { useAlertMessage } from '../../hooks';
import { useCreateProjectMutation } from '../../hooks/use-mutations/use-create-project-mutation';
import { colors } from '../../theme';
import { getErrorText } from '../../utils';
import { projectSchema } from '../../validation/schemas/project.schema';

export const CreateProject = () => {
  const [createProject, { loading, error }] = useCreateProjectMutation();
  const { handleChangeModal } = useModalsContext();
  const { alertMessage } = useAlertMessage();

  const handleFormSubmit = async (values: FormikValues) => {
    Keyboard.dismiss();

    try {
      await createProject({
        variables: {
          data: {
            name: values.title,
          },
        },
      });
      alertMessage({
        title: 'Проект успешно создан',
      });
    } catch {
      alertMessage({
        title: 'Произошла ошибка при создании проекта',
      });
    }
    handleChangeModal('');
  };

  const initialValues = {
    title: '',
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

          <Text textAlign='center' color={colors.simpleColors.red} mb={1}>
            {error && getErrorText(error.message)}
          </Text>

          <Center mt={4}>
            <Button
              isLoading={loading}
              leftIcon={<SaveIcon color='primary.100' />}
              variant={'black'}
              onPress={() => handleSubmit()}
            >
              Создать проект
            </Button>
          </Center>
        </Box>
      )}
    </Formik>
  );
};
