import { useNavigation, useRoute } from '@react-navigation/core';
import { Box, useDisclose, VStack as Column } from 'native-base';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ArrowBackIcon, HideKeyboardOutsideClick, Layout } from '../../components';
import {
  UserAvatar,
  UserDeleteBtn,
  UserDeleteModal,
  UserLogin,
  UserName,
  UserNote,
  UserRoles,
} from '../../components/user/components';
import { useDeleteUser } from '../../hooks';

export const User = () => {
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(false);

  const route = useRoute();
  const user = route?.params?.item;

  const { goBack } = useNavigation();

  const onPressBackArrow = () => goBack();

  const { isOpen, onOpen, onClose } = useDisclose();

  const [deleteUser] = useDeleteUser(user?.id);

  const onOpenDeleteModalCallback = React.useCallback(() => {
    setIsBtnDisabled(true);
    onOpen();
  }, []);

  const onCloseDeleteModalCallback = React.useCallback(() => {
    onClose();
    setIsBtnDisabled(false);
  }, []);

  const onDeleteUserCallback = React.useCallback(async () => {
    const result = await deleteUser({
      variables: {
        id: user?.id,
      },
    });
    if (result?.data?.deleteUser === true) {
      setIsBtnDisabled(false);
      goBack();
    }
  }, []);

  return (
    <Layout>
      <HideKeyboardOutsideClick>
        <Box flex={1}>
          <Pressable onPress={onPressBackArrow} style={styles.arrow_back}>
            <ArrowBackIcon size={4} />
          </Pressable>

          <Column style={styles.info_wrapper}>
            <UserAvatar src={user?.image} userId={user?.id} />
            <UserName name={user?.fullName} userId={user?.id} />
            <UserLogin login={user?.login} />
          </Column>

          <Column style={styles.bottom_wrapper}>
            <UserNote note={user?.theNote} userId={user?.id} />
            <UserRoles role={user?.role} userId={user?.id} />
            <UserDeleteBtn
              onOpenDeleteModal={onOpenDeleteModalCallback}
              isBtnDisabled={isBtnDisabled}
            />
          </Column>

          <UserDeleteModal
            isOpen={isOpen}
            onClose={onCloseDeleteModalCallback}
            onSubmitCallback={onDeleteUserCallback}
          />
        </Box>
      </HideKeyboardOutsideClick>
    </Layout>
  );
};

const styles = StyleSheet.create({
  arrow_back: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    left: 1,
    position: 'absolute',
    top: 15,
    width: 40,
  },
  bottom_wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  info_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
});
