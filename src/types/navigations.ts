import { IIconProps } from 'native-base';

import { ROUTES } from '../constants';
import { User } from '../graphql/generated';

export type MainStackParamList = {
  [ROUTES.bottomTabsNavigator]: undefined;
  [ROUTES.chat]: {
    item: User;
  };
  [ROUTES.subtusk]: {
    id?: number;
    subtaskId?: number;
    taskId?: number;
  };
  [ROUTES.task]: {
    id: number;
  };
  [ROUTES.createOrUpdateTask]: {
    taskId?: number;
    subtaskId?: number;
    type: string;
  };
};

export type AuthStackParamList = {
  [ROUTES.login]: undefined;
};

export type UpdatesStackParamList = {
  [ROUTES.updates]: undefined;
};

export type ChatsStackParamList = {
  [ROUTES.chats]: undefined;
};
export type ProjectsStackParamList = {
  [ROUTES.projects]: undefined;
  [ROUTES.createOrUpdateTask]: {
    taskId?: number;
    subtaskId?: number;
    type: number;
  };
};
export type TasksStackParamList = {
  [ROUTES.tasks]: undefined;
};
export type TasksStackParamsList = {
  [ROUTES.task]: undefined;
};
export type AccountStackParamList = {
  [ROUTES.account]: undefined;
  [ROUTES.users]: undefined;
  [ROUTES.user]: {
    item: User;
  };
};
export type UsersStackParamList = {
  [ROUTES.users]: undefined;
};

export type AllScreenParamList = {
  item: User;
};

export interface RootStackParamList
  extends MainStackParamList,
    UpdatesStackParamList,
    ChatsStackParamList,
    ProjectsStackParamList,
    TasksStackParamList,
    AccountStackParamList,
    UsersStackParamList,
    AuthStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface IBottomTabsIconProps extends IIconProps {
  focused?: boolean;
}
