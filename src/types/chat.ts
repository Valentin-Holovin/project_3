import { AllProjectActions } from '../constants';
import { Maybe } from '../graphql/generated';

export type headerThemeType = {
  headerBackgroundColor: string;
  headerIndicatorColor: string;
};

export type chatMessageType = {
  myMessageBackgroundColor: string;
  companionMessageBackgroundColor: string;
  dividerColor: string;
  
};

export type notesMessageType = {
  myNotesBackgroundColor: string;
  companionNotesBackgroundColor: string;
  dividerColor: string;
};

export type chatThemeType = {
  chatMessage: chatMessageType;
  inputBackgroundColor: string;
  inputBorderColor: string;
  iconColor: string;
};

export type notesThemeType = {
  notesMessage: notesMessageType;
  inputBackgroundColor: string;
  inputBorderColor: string;
  iconColor: string;
};
export type filesThemeType = {
  buttonVariant: 'green' | 'black' | 'red' | 'gray' | 'darkBlue';
  listFileItems: listFileItemsType;
};

export type listFileItemsType = {
  myMessageBackgroundColor: string;
  companionListFileBackgroundColor: string;
};

export type themeType = {
  header: headerThemeType;
  chat: chatThemeType;
  files: filesThemeType;
  notes: notesThemeType;
  task: chatMessageType
};

export type chatPageThemeType = {
  [property: string]: themeType;
};

interface IBaseFile {
  children?: React.ReactNode;
  userId?: Maybe<number>;
  chatId?: Maybe<number>;
  type: AllProjectActions;
}

interface IChat extends IBaseFile {
  chatId?: Maybe<number>;
  type: AllProjectActions.chat;
}

interface ISubtask extends IBaseFile {
  subtaskId?: Maybe<number>;
  type: AllProjectActions.subtask;
}

interface ITask extends IBaseFile {
  taskId?: Maybe<number>;
  type: AllProjectActions.task;
}

export type IFiles = IChat | ISubtask | ITask;