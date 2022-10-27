import { Text } from 'native-base';
import React from 'react';

type UserRolePropsTypes = {
  role?: string | null;
};

export const UsersRole = ({ role }: UserRolePropsTypes) => {
  if (!role) return null;

  const roleView: {
    color: string;
    text: string;
  } = {
    color: '',
    text: '',
  };

  switch (role) {
    case 'User':
      roleView.color = 'secondary.400';
      roleView.text = 'Пользователь';
      break;
    case 'Moderator':
      roleView.color = 'simpleColors.violet';
      roleView.text = 'Модератор';
      break;
    case 'Admin':
      roleView.color = 'simpleColors.red';
      roleView.text = 'Администратор';
      break;
    default:
      roleView.color = 'primary.700';
      roleView.text = role;
  }

  return (
    <Text fontWeight={400} fontSize={'xs'} color={roleView.color}>
      {roleView.text}
    </Text>
  );
};
