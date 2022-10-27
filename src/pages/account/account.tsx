import { useNavigation } from '@react-navigation/native';
import { Box, Button, Flex, HStack as Row } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import {
  AccountAvatar,
  AccountButtonsTile,
  AccountLogin,
  AccountName,
  AccountNote,
  HideKeyboardOutsideClick,
  Layout,
  LogoutIcon,
  RequestHandler,
  UsersIcon,
} from '../../components';
import { ROUTES } from '../../constants';
import { useAuthContext } from '../../context/auth-context';
import { useGetCurrentUserQuery } from '../../hooks';

export const Account = () => {
  const { loading, data } = useGetCurrentUserQuery();
  const { onLogout } = useAuthContext();

  const navigation = useNavigation();

  const navigateToUsers = () => {
    navigation.navigate(ROUTES.users);
  };

  return (
    <Layout withPadding={false} isKeyboardAvoiding={false}>
      <RequestHandler loading={loading}>
        <HideKeyboardOutsideClick>
          <Flex style={styles.wrapper}>
            <Flex style={styles.top_wrapper}>
              <Row mb={30}>
                <AccountAvatar src={data?.getCurrentUser?.image} />
              </Row>

              <Row mb={30}>
                <AccountName name={data?.getCurrentUser?.fullName || undefined} />
              </Row>

              <Row mb={30}>
                <AccountLogin login={data?.getCurrentUser?.login} />
              </Row>

              <Row mb={30}>
                <AccountNote note={data?.getCurrentUser?.theNote || undefined} />
              </Row>
            </Flex>

            {/*<AccountButtonsTile />*/}

            <Box style={styles.all_users_button_wrapper}>
              {data?.getCurrentUser?.role === 'Admin' ? (
                <Button
                  variant={'black'}
                  size={'rectangular_secondary'}
                  leftIcon={<UsersIcon marginRight={'8px'} size={'16px'} />}
                  onPress={navigateToUsers}
                >
                  Все пользователи
                </Button>
              ) : null}
            </Box>

            <Button
              variant={'grey'}
              size={'rectangular_primary'}
              leftIcon={<LogoutIcon marginRight={'10px'} size={'16px'} />}
              onPress={onLogout}
              mb={70}
            >
              Выйти из системы
            </Button>
          </Flex>
        </HideKeyboardOutsideClick>
      </RequestHandler>
    </Layout>
  );
};

const styles = StyleSheet.create({
  all_users_button_wrapper: {
    height: 40,
  },
  top_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 30,
  },
});
