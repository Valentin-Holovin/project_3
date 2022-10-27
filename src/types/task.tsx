export type headerThemeType = {
  headerBackgroundColor: string;
  headerIndicatorColor: string;
};

export type taskType = {
  myTaskColor: string;
  companionTaskBackgroundColor: string;
  dividerColor: string;
};

export type taskThemeType = {
  task: taskType;
  inputBackgroundColor: string;
  inputBorderColor: string;
};

export type themeType = {
  header: headerThemeType;
  myTask: taskThemeType;
  buttonVariant: 'green' | 'black' | 'red' | 'gray';
};

export type taskPageThemeType = {
  [property: string]: themeType;
};

export type TasksListItemType = {
  id?: number | null | undefined;
  createdAt?: string | null;
  status?: {
    id?: number | null;
    color: string | null | undefined;
  };
  name?: string | null;
  project?: string | null;
  isSubtask?: boolean | null;
  parentId?: number | null | undefined;
  maintainer?: {
    id?: number | null;
    login: string | null | undefined;
    image: string | null | undefined;
  } | null;
  tags?: {
    id: number | null;
    name?: string | null;
    color?: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  }[];
};
