import { Formik } from 'formik';
import { Box, Button, Center, Text } from 'native-base';
import React from 'react';
import { Alert, Keyboard, StyleSheet } from 'react-native';

import {
  GradientBox,
  HideKeyboardOutsideClick,
  Layout,
  LogoIcon,
  TextField,
} from '../../components';
import { LOGIN_GRADIENT } from '../../constants';
import { usePushNotifications, useSignInLazyQuery } from '../../hooks';
import { colors } from '../../theme';
import { getErrorText } from '../../utils';
import { loginSchema } from '../../validation/schemas/login.schema';

type FormikValues = {
  login: string;
  password: string;
};

export const Login = () => {
  const [login, { loading, error }] = useSignInLazyQuery();

  const { getPushNotificationsData } = usePushNotifications();

  const handleFormSubmit = async (values: FormikValues) => {
    Keyboard.dismiss();
    await login({
      variables: {
        data: {
          login: values.login,
          password: values.password,
          pushTokenInfo: {
            ...getPushNotificationsData(),
          },
        },
      },
    });
  };

  const initialValues = {
    login: '',
    password: '',
  };

  return (
    <Layout
      withPadding={false}
      isHeaderVisible={false}
      isStatusBarVisible={true}
      statusBarBackgroundColor={'#FFFFFF'}
      isKeyboardAvoiding={true}
    >
      <GradientBox gradient={LOGIN_GRADIENT}>
        <HideKeyboardOutsideClick>
          <Center flex={1}>
            <LogoIcon size={64} />
          </Center>
        </HideKeyboardOutsideClick>

        <Formik
          onSubmit={handleFormSubmit}
          validationSchema={loginSchema}
          initialValues={initialValues}
        >
          {({ handleSubmit }) => (
            <HideKeyboardOutsideClick>
              <Box style={styles.formContainer}>
                <Box flexGrow={1}>
                  <Text style={styles.loginTitle}>Вход</Text>

                  <TextField
                    name={'login'}
                    placeholder={'Введите значение'}
                    label={'Логин'}
                    inputProps={{
                      keyboardType: 'email-address',
                    }}
                  />

                  <TextField
                    name={'password'}
                    placeholder={'Введите значение'}
                    label={'Пароль'}
                    inputProps={{
                      type: 'password',
                    }}
                  />

                  <Text textAlign='center' color={colors.simpleColors.red} mb={1}>
                    {error && getErrorText(error.message)}
                  </Text>
                </Box>

                <Center>
                  <Button isLoading={loading} onPress={() => handleSubmit()} variant='black'>
                    Войти
                  </Button>
                </Center>
              </Box>
            </HideKeyboardOutsideClick>
          )}
        </Formik>
      </GradientBox>
    </Layout>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#ffffff',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flex: 1,
    height: 344,
    paddingBottom: 40,
    paddingHorizontal: 44,
    paddingTop: 20,
  },
  loginTitle: {
    color: colors.primary['700'],
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 37.5,
    marginBottom: 2,
    textAlign: 'center',
  },
});
