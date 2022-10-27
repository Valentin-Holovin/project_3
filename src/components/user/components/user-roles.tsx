import { Box, HStack as Row, Text, VStack as Column } from 'native-base';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { useAdminEditUser } from '../../../hooks';
import { colors } from '../../../theme';
import { AdminRoleIcon, ModeratoreRoleIcon, UserRoleIcon } from '../../icons';

type PropsType = {
  role: string;
  userId: string;
};

export const UserRoles = ({ role, userId }: PropsType) => {
  const [activeRole, setActiveRole] = React.useState(role);

  const [adminEditUser] = useAdminEditUser();

  const changeRoleHandler = async (role: string) => {
    await setActiveRole(role);
    await adminEditUser({
      variables: {
        data: {
          idUser: `${userId}`,
          role: role,
        },
      },
    });
  };

  return (
    <Column style={styles.roles_wrapper}>
      <Text style={styles.title}>Роль</Text>

      <Row style={styles.btns_wrapper}>
        <Pressable
          style={[styles.btn, activeRole === 'User' && styles.btn_user_active]}
          onPress={() => changeRoleHandler('User')}
        >
          <Box style={[styles.icon_wrapper, styles.icon_wrapper_user]}>
            <UserRoleIcon size={4} />
          </Box>
          <Text style={styles.btn_title}>Пользователь</Text>
        </Pressable>

        <Pressable
          style={[styles.btn, activeRole === 'Moderator' && styles.btn_moderatore_active]}
          onPress={() => changeRoleHandler('Moderator')}
        >
          <Box style={[styles.icon_wrapper, styles.icon_wrapper_moderatore]}>
            <ModeratoreRoleIcon size={4} />
          </Box>
          <Text style={styles.btn_title}>Модератор</Text>
        </Pressable>

        <Pressable
          style={[styles.btn, activeRole === 'Admin' && styles.btn_admin_active]}
          onPress={() => changeRoleHandler('Admin')}
        >
          <Box style={[styles.icon_wrapper, styles.icon_wrapper_admin]}>
            <AdminRoleIcon size={4} />
          </Box>
          <Text style={styles.btn_title}>Администратор</Text>
        </Pressable>
      </Row>
    </Column>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderColor: colors.grey.light,
    borderRadius: 2,
    borderWidth: 1,
    height: 100,
    justifyContent: 'center',
    width: 100,
  },

  btn_admin_active: {
    backgroundColor: '#EDD4D8',
    borderColor: colors.simpleColors.red,
  },

  btn_moderatore_active: {
    backgroundColor: '#E8D4ED',
    borderColor: colors.simpleColors.violet,
  },
  btn_title: {
    color: colors.primary['700'],
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
  },

  btn_user_active: {
    backgroundColor: '#D5EDD8',
    borderColor: colors.secondary['400'],
  },
  btns_wrapper: {
    justifyContent: 'space-between',
    width: '100%',
  },
  icon_wrapper: {
    alignItems: 'center',
    borderRadius: 100,
    height: 32,
    justifyContent: 'center',
    marginBottom: 10,
    width: 32,
  },
  icon_wrapper_admin: {
    backgroundColor: colors.simpleColors.red,
  },
  icon_wrapper_moderatore: {
    backgroundColor: colors.simpleColors.violet,
  },
  icon_wrapper_user: {
    backgroundColor: colors.secondary['400'],
  },
  roles_wrapper: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: colors.primary['700'],
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    marginBottom: 10,
  },
});
