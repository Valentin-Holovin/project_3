// import { REACT_APP_BASE_URL, REACT_APP_DOMAIN_URL, REACT_APP_WS_HOST } from '@env';
import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const SCREEN_BACKGROUND = '#FFFFFF';

// export const DOMAIN_URL = REACT_APP_DOMAIN_URL;
// export const API_WS_HOST = REACT_APP_WS_HOST;
// export const BASE_URL = REACT_APP_BASE_URL;

//Demo
// export const DOMAIN_URL = 'https://barduck.demo.malevich.com.ua';
// export const API_WS_HOST = 'wss://barduck.demo.malevich.com.ua/subscriptions';
// export const BASE_URL = 'https://barduck.demo.malevich.com.ua/';

//Prod
export const DOMAIN_URL = 'https://barduck.online/graphql';
export const API_WS_HOST = 'wss://barduck.online/subscriptions';
export const BASE_URL = 'https://barduck.online/';

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const SMALL_DEVICE_WIDTH = 330;

export const STATUS_BAR_HEIGHT = getStatusBarHeight();

export const colors = {
  orange: '#F5AB2C',
  red: '#E80025',
  grey: '#BEBEBE',
  green: '#6EB528',
  yellow: '#F5AB2C',
  blue: '#57C1C5',
  purple: '#E05FBC',
  black: '#0D0D0D',
};

export const LOGIN_GRADIENT = {
  linearGradient: {
    colors: ['#6A6A6A', '#AFAFAF'],
    start: [0, 1],
    end: [0, 0],
  },
};

type ErrorMessagesType = {
  [key: string]: string;
};

export type AllProjectActionsType = 'chat' | 'subtask' | 'task';

export enum AllProjectActions {
  chat = 'chatId',
  subtask = 'subtaskId',
  task = 'taskId',
}

export enum NotificationsType {
  chat = 'PUSH_ACTION_CHAT',
  task = 'PUSH_ACTION_TASK',
  subtask = 'PUSH_ACTION_SUBTASK',
}

export const ERROR_MESSAGES: ErrorMessagesType = {
  INCORRECT_LOGIN: 'Неверный логин',
  INCORRECT_PASSWORD: 'Неверный логин или пароль',
  USER_ALREADY_EXISTS: 'Пользователь с таким именем уже существует',
  USER_NOT_FOUND: 'Неверный логин или пароль',
  TASK_NOT_FOUND: 'Задача не найдена или не хватает прав',
  SUBTASK_NOT_FOUND: 'Подзадача не найдена или не хватает прав',
  PROJECT_ALREADY_EXISTS: 'Проект с таким именем или номером уже существует',
  SUBTASK_ACCESS_DENIED: 'Нет прав доступа!',
  TASK_ACCESS_DENIED: 'Нет прав доступа!',
};

export type StatusColorType = { id: number; name: string; rusName: string };

export const STATUSES_COLORS: StatusColorType[] = [
  {
    id: 1,
    name: 'red',
    rusName: 'Красный',
  },
  {
    id: 2,
    name: 'green',
    rusName: 'Зеленый',
  },
  {
    id: 3,
    name: 'yellow',
    rusName: 'Желтый',
  },
  {
    id: 4,
    name: 'orange',
    rusName: 'Оранжевый',
  },
  {
    id: 5,
    name: 'blue',
    rusName: 'Синий',
  },
  {
    id: 6,
    name: 'purple',
    rusName: 'Фиолетовый',
  },
  {
    id: 7,
    name: 'grey',
    rusName: 'Серый',
  },
  {
    id: 8,
    name: 'black',
    rusName: 'Черный',
  },
];
