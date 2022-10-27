import {
  AllTasksIcon,
  ChatsIcon,
  ClipIcon,
  EmptyChatsDarkBlueIcon,
  EmptyChatsIcon,
  EmptyFileDarkBlueIcon,
  EmptyFileIcon,
  EmptyNotesDarkBlueIcon,
  EmptyNotesIcon,
  EmptyTaskIcon,
  MyTaskAdminComponent,
  MyTaskComponent,
  MyTasksIcon,
  NoteBlankIcon,
  ResponsibleComponents,
  ResponsibleTaskIcon,
  SubTaskIcon,
} from '../components';
import { MyTaskProvider } from '../context/my-task-context/my-task-provider';
import { MyTasksAdminProvider } from '../context/my-tasks-admin-context/my-tasks-admin-provider';
import { ResponsibleProvider } from '../context/responsible-context/responsible-provider';
import { colors } from '../theme';
import { chatPageThemeType } from '../types/chat';
import { ItemsType } from '../types/pager-view';

export const items: ItemsType = {
  chat: {
    headerItems: [
      {
        title: 'Чат',
        icon: ChatsIcon,
      },
      {
        title: 'Файлы',
        icon: ClipIcon,
      },
      {
        title: 'Заметки',
        icon: NoteBlankIcon,
      },
    ],
    pageEmpty: [
      {
        IconComponent: EmptyChatsIcon,
        title: 'Сообщений пока нет',
        subTitle: 'Начните общение сейчас!',
        iconSize: 32,
      },
      {
        IconComponent: EmptyFileIcon,
        title: 'Файлов пока нет',
        subTitle: 'Загрузите первый',
        iconSize: 32,
      },
      {
        IconComponent: EmptyNotesIcon,
        title: 'Заметок пока нет',
        subTitle: 'Начните добавлять сейчас!',
        iconSize: 32,
      },
    ],
  },
  task: {
    headerItems: [
      {
        title: 'Подзадачи',
        icon: SubTaskIcon,
      },
      {
        title: 'Чат',
        icon: ChatsIcon,
      },
      {
        title: 'Файлы',
        icon: ClipIcon,
      },
      {
        title: 'Заметки',
        icon: NoteBlankIcon,
      },
    ],
    pageEmpty: [
      {
        IconComponent: EmptyTaskIcon,
        title: 'Подзадач пока нет',
        subTitle: 'Попробуйте заглянуть сюда позже',
        iconSize: 32,
      },
      {
        IconComponent: EmptyChatsIcon,
        title: 'Сообщений пока нет',
        subTitle: 'Начните общение сейчас!',
        iconSize: 32,
      },
      {
        IconComponent: EmptyFileIcon,
        title: 'Файлов пока нет',
        subTitle: 'Загрузите первый',
        iconSize: 32,
      },
      {
        IconComponent: EmptyNotesIcon,
        title: 'Заметок пока нет',
        subTitle: 'Начните добавлять сейчас!',
        iconSize: 32,
      },
    ],
  },
  subtusk: {
    headerItems: [
      {
        title: 'Чат',
        icon: ChatsIcon,
      },
      {
        title: 'Файлы',
        icon: ClipIcon,
      },
      {
        title: 'Заметки',
        icon: NoteBlankIcon,
      },
    ],
    pageEmpty: [
      {
        IconComponent: EmptyChatsDarkBlueIcon,
        title: 'Сообщений пока нет',
        subTitle: 'Начните общение сейчас!',
        iconSize: 32,
      },
      {
        IconComponent: EmptyFileDarkBlueIcon,
        title: 'Файлов пока нет',
        subTitle: 'Загрузите первый',
        iconSize: 32,
      },
      {
        IconComponent: EmptyNotesDarkBlueIcon,
        title: 'Заметок пока нет',
        subTitle: 'Начните добавлять сейчас!',
        iconSize: 32,
      },
    ],
  },
  myTask: {
    headerAdminItems: [
      {
        title: 'Все задачи',
        icon: AllTasksIcon,
      },
    ],
    headerUserItem: [
      {
        title: 'Мои задачи',
        icon: MyTasksIcon,
      },
      {
        title: 'Ответственный',
        icon: ResponsibleTaskIcon,
      },
    ],
    pageEmpty: [
      {
        IconComponent: EmptyTaskIcon,
        title: 'Задач пока нет',
        subTitle: 'Попробуйте заглянуть сюда позже',
        iconSize: 32,
      },
    ],
  },
};

export const routesPageAdmin = [
  {
    provider: MyTasksAdminProvider,
    components: MyTaskAdminComponent,
  },
  {
    provider: MyTaskProvider,
    components: MyTaskComponent,
  },
  {
    provider: ResponsibleProvider,
    components: ResponsibleComponents,
  },
];

export const routesPageUser = [
  {
    provider: MyTaskProvider,
    components: MyTaskComponent,
  },
  {
    provider: ResponsibleProvider,
    components: ResponsibleComponents,
  },
];

export const chatTheme: chatPageThemeType = {
  greenTheme: {
    header: {
      headerBackgroundColor: colors.primary[500],
      headerIndicatorColor: colors.secondary[400],
    },
    chat: {
      chatMessage: {
        myMessageBackgroundColor: colors.secondary[300],
        companionMessageBackgroundColor: colors.primary[500],
        dividerColor: colors.secondary[400],
      },
      inputBackgroundColor: colors.secondary[300],
      inputBorderColor: colors.secondary[400],
    },
    files: {
      listFileItems: {
        myMessageBackgroundColor: colors.primary[100],
        companionListFileBackgroundColor: colors.primary[500],
      },
      buttonVariant: 'green',
    },
    notes: {
      notesMessage: {
        myNotesBackgroundColor: colors.primary[500],
        companionNotesBackgroundColor: colors.primary[500],
        dividerColor: colors.primary[600],
      },
      inputBackgroundColor: colors.secondary[300],
      inputBorderColor: colors.secondary[400],
      iconColor: colors.secondary[400],
    },
  },
  grayTheme: {
    header: {
      headerBackgroundColor: colors.primary[500],
      headerIndicatorColor: colors.primary[700],
    },
    chat: {
      chatMessage: {
        myMessageBackgroundColor: colors.secondary[300],
        companionMessageBackgroundColor: colors.primary[500],
        dividerColor: colors.secondary[400],
      },
      inputBackgroundColor: colors.primary[500],
      inputBorderColor: colors.primary[700],
    },
    files: {
      listFileItems: {
        myMessageBackgroundColor: colors.primary[100],
        companionListFileBackgroundColor: colors.primary[500],
      },
      buttonVariant: 'black',
    },
    notes: {
      notesMessage: {
        myNotesBackgroundColor: colors.primary[500],
        companionNotesBackgroundColor: colors.primary[500],
        dividerColor: colors.primary[600],
      },
      inputBackgroundColor: colors.primary[500],
      inputBorderColor: colors.primary[700],
      iconColor: colors.primary[700],
    },
  },
  darkBlue: {
    header: {
      headerBackgroundColor: '#F2F7FF',
      headerIndicatorColor: colors.dark.darkBlue,
    },
    chat: {
      chatMessage: {
        myMessageBackgroundColor: '#E4EFFF',
        companionMessageBackgroundColor: colors.primary[500],
        dividerColor: colors.dark.darkBlue,
      },
      inputBackgroundColor: '#E4EFFF',
      inputBorderColor: colors.dark.darkBlue,
    },
    files: {
      listFileItems: {
        myMessageBackgroundColor: colors.primary[100],
        companionListFileBackgroundColor: colors.primary[500],
      },
      buttonVariant: 'darkBlue',
    },
    notes: {
      notesMessage: {
        myNotesBackgroundColor: colors.primary[500],
        companionNotesBackgroundColor: colors.primary[500],
        dividerColor: colors.primary[600],
      },
      inputBackgroundColor: '#E4EFFF',
      inputBorderColor: colors.dark.darkBlue,
      iconColor: colors.dark.darkBlue,
    },
  },
  myTask: {
    task: {
      myMessageBackgroundColor: colors.secondary[300],
      companionMessageBackgroundColor: colors.primary[500],
      dividerColor: colors.secondary[400],
    },
    inputBackgroundColor: colors.secondary[300],
    inputBorderColor: colors.secondary[400],
  },
};
