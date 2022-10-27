/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type ArchivedProject = ProjectInterface & {
  __typename?: 'ArchivedProject';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  tasks: TasksList;
};

export type ArchivedProjectTasksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Sort>;
};

export type ArchivedProjectListType = {
  __typename?: 'ArchivedProjectListType';
  count: Scalars['Int'];
  rows: Array<Maybe<ArchivedProject>>;
};

export type CalendarEntityListType = {
  __typename?: 'CalendarEntityListType';
  count: Scalars['Int'];
  rows: Array<Maybe<ProjectEntityType>>;
};

export type CalendarType = {
  __typename?: 'CalendarType';
  calendarProjects: CalendarEntityListType;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['Int'];
  messagesList: MessagesList;
  name?: Maybe<Scalars['String']>;
  notes: Array<Maybe<Note>>;
  subtask?: Maybe<Subtask>;
  task?: Maybe<Task>;
  unreadMessagesCount: Scalars['Float'];
  usersList: GetAllUsers;
};

export type ChatMessagesListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ChatNotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<SortingOrders>;
};

export type ChatUsersListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ChatsList = {
  __typename?: 'ChatsList';
  count: Scalars['Int'];
  rows: Array<Maybe<Chat>>;
};

/** Input for create message */
export type CreateMessageInput = {
  chatId: Scalars['Float'];
  text: Scalars['String'];
};

/** Input load note */
export type CreateNoteInput = {
  chatId?: InputMaybe<Scalars['Int']>;
  content: Scalars['String'];
  subtaskId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
};

export type CreatePoligonTemplateInput = {
  canvasObject: Scalars['JSON'];
  name: Scalars['String'];
};

export type CreateProjectInput = {
  name: Scalars['String'];
  number?: InputMaybe<Scalars['Int']>;
};

/** Input for create status */
export type CreateStatusInput = {
  color: Scalars['String'];
};

export type CreateSubtaskInput = {
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  maintainerId?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  parentId: Scalars['Int'];
  statusId?: InputMaybe<Scalars['Int']>;
  tagsId?: InputMaybe<Array<Scalars['ID']>>;
};

export type CreateTaskInput = {
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  maintainerId?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  projectId: Scalars['Int'];
  statusId?: InputMaybe<Scalars['Int']>;
  tagsId?: InputMaybe<Array<Scalars['ID']>>;
};

/** Input for create user */
export type CreateUserInput = {
  login: Scalars['String'];
  role: UserRole;
};

export type DateRangeInput = {
  from?: InputMaybe<Scalars['DateTime']>;
  to?: InputMaybe<Scalars['DateTime']>;
};

/** Input for edit user */
export type EditStatusUserInput = {
  fullName?: InputMaybe<Scalars['String']>;
  idUser: Scalars['ID'];
  image?: InputMaybe<Scalars['Upload']>;
  role?: InputMaybe<UserRole>;
  theNote?: InputMaybe<Scalars['String']>;
};

/** Input for edit user */
export type EditUserInput = {
  fullName?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  theNote?: InputMaybe<Scalars['String']>;
};

export type Expenses = {
  __typename?: 'Expenses';
  amountPerMonth: Scalars['Float'];
  amountPerYear: Scalars['Float'];
  projects?: Maybe<Array<Project>>;
};

export type ExpensesProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Sort>;
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['String'];
  fileName: Scalars['String'];
  id: Scalars['Int'];
  path: Scalars['String'];
  size: Scalars['Float'];
  subtask?: Maybe<Subtask>;
  task?: Maybe<Task>;
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
};

export type GetAllFiles = {
  __typename?: 'GetAllFiles';
  count: Scalars['Int'];
  rows: Array<File>;
};

export type GetAllUsers = {
  __typename?: 'GetAllUsers';
  count: Scalars['Int'];
  rows: Array<User>;
};

export type GetChatsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/** Options get all files */
export type GetFileInput = {
  chatId?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Float']>;
  offset?: InputMaybe<Scalars['Float']>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<Scalars['String']>;
  subtaskId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
};

export type GetMyProjectsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Sort>;
  tagsId?: InputMaybe<Array<Scalars['ID']>>;
};

/** Input for get note by params */
export type GetNoteByParametersInput = {
  chatId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
};

export type GetPoligonTemplateInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type GetProjectsInput = {
  archive?: InputMaybe<Scalars['Boolean']>;
  authorId?: InputMaybe<Scalars['Int']>;
  isProjectStorage?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Sort>;
  sortOrder?: InputMaybe<SortingOrders>;
  tasksEndDateRange?: InputMaybe<DateRangeInput>;
};

export type GetSubtasksInput = {
  authorId?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Sort>;
  sortOrder?: InputMaybe<SortingOrders>;
  statusId?: InputMaybe<Scalars['Int']>;
};

export type GetTagsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortTagsInput>;
};

export type GetTasksInput = {
  assigneeId?: InputMaybe<Scalars['Int']>;
  authorId?: InputMaybe<Scalars['Int']>;
  calendarDateRange?: InputMaybe<DateRangeInput>;
  endDateRange?: InputMaybe<DateRangeInput>;
  expensesDate?: InputMaybe<Scalars['String']>;
  isTaskStorage?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Sort>;
  sortOrder?: InputMaybe<SortingOrders>;
  statusId?: InputMaybe<Scalars['Int']>;
  tagsId?: InputMaybe<Array<Scalars['ID']>>;
};

/** Get all users */
export type GetUsersInput = {
  limit?: InputMaybe<Scalars['Float']>;
  offset?: InputMaybe<Scalars['Float']>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<Scalars['String']>;
};

export type InputCanvasObjects = {
  arrows: Array<PoligonArrowType>;
  rectangles: Array<PoligonRectType>;
};

export type LinkType = {
  taskId?: InputMaybe<Scalars['Int']>;
};

export type LinkTypeModel = {
  __typename?: 'LinkTypeModel';
  taskId?: Maybe<Scalars['Int']>;
};

/** Input for create user */
export type LoadFileInput = {
  chatId?: InputMaybe<Scalars['Int']>;
  file: Scalars['Upload'];
  subtaskId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
};

/** Input for login user */
export type LoginUserInput = {
  link?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  password: Scalars['String'];
  pushTokenInfo?: InputMaybe<PushTokenInput>;
};

/** Input for logout user */
export type LogoutUserInput = {
  pushToken: PushTokenInput;
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isRead?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
  user: User;
};

export type MessagesList = {
  __typename?: 'MessagesList';
  count: Scalars['Int'];
  rows: Array<Maybe<Message>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminEditUser: StatusAndUser;
  assignUserToTask: Task;
  closeSubtask: Subtask;
  closeTask: Task;
  createNote: Note;
  createPoligonParentLink: Scalars['Boolean'];
  createPoligonTemplate: PoligonTemplate;
  createProject: Project;
  createStatus: Status;
  createSubtask: Subtask;
  createTask: Task;
  createUser: Scalars['String'];
  deassignUserFromTask: Task;
  deleteFile: StatusResponse;
  deleteMessage: Scalars['Boolean'];
  deletePoligon: Scalars['Boolean'];
  deletePoligonObject: Scalars['Boolean'];
  deletePoligonParentLink: Scalars['Boolean'];
  deletePoligonTemplate: Scalars['Boolean'];
  deleteProject: Scalars['Boolean'];
  deleteSubtask: Scalars['Boolean'];
  deleteTask: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  editUser: User;
  generatePasswordResetTokenUser: Scalars['String'];
  getOrCreatePrivateChat?: Maybe<Chat>;
  loadFile: File;
  logout: Scalars['Boolean'];
  readMessagesBefore: Scalars['Boolean'];
  readProjectActivities: Scalars['Boolean'];
  refreshPushToken: StatusResponse;
  removeNote: Scalars['Boolean'];
  resetPassword: StatusResponse;
  resetPasswordByToken: StatusResponse;
  resetRealizationPrice: Scalars['Boolean'];
  sendMessage: Message;
  signIn: UserSignIn;
  startSubtask: Subtask;
  startTask: Task;
  updateFile: File;
  updateNote: Note;
  updatePoligonTemplate: PoligonTemplate;
  updateProject: Project;
  updateSubtask: Subtask;
  updateTask: Task;
  upsertPoligon: Poligon;
  upsertPoligonColor: Scalars['Boolean'];
  upsertPoligonObject: PoligonObject;
};

export type MutationAdminEditUserArgs = {
  data: EditStatusUserInput;
};

export type MutationAssignUserToTaskArgs = {
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MutationCloseSubtaskArgs = {
  id: Scalars['Int'];
};

export type MutationCloseTaskArgs = {
  id: Scalars['Int'];
};

export type MutationCreateNoteArgs = {
  data: CreateNoteInput;
};

export type MutationCreatePoligonParentLinkArgs = {
  parentId: Scalars['Int'];
  poligonObjectId?: InputMaybe<Scalars['Int']>;
};

export type MutationCreatePoligonTemplateArgs = {
  data: CreatePoligonTemplateInput;
};

export type MutationCreateProjectArgs = {
  data: CreateProjectInput;
};

export type MutationCreateStatusArgs = {
  data: CreateStatusInput;
};

export type MutationCreateSubtaskArgs = {
  data: CreateSubtaskInput;
};

export type MutationCreateTaskArgs = {
  data: CreateTaskInput;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationDeassignUserFromTaskArgs = {
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MutationDeleteFileArgs = {
  id: Scalars['Float'];
};

export type MutationDeleteMessageArgs = {
  messageId: Scalars['ID'];
};

export type MutationDeletePoligonArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Int'];
};

export type MutationDeletePoligonObjectArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Int'];
};

export type MutationDeletePoligonParentLinkArgs = {
  parentId: Scalars['Int'];
  poligonObjectId: Scalars['Int'];
};

export type MutationDeletePoligonTemplateArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Int'];
};

export type MutationDeleteProjectArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Int'];
};

export type MutationDeleteSubtaskArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteTaskArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationEditUserArgs = {
  data: EditUserInput;
};

export type MutationGeneratePasswordResetTokenUserArgs = {
  userId: Scalars['ID'];
};

export type MutationGetOrCreatePrivateChatArgs = {
  userId: Scalars['Float'];
};

export type MutationLoadFileArgs = {
  data: LoadFileInput;
};

export type MutationLogoutArgs = {
  data: LogoutUserInput;
};

export type MutationReadMessagesBeforeArgs = {
  messageId: Scalars['Int'];
};

export type MutationReadProjectActivitiesArgs = {
  subtaskId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
};

export type MutationRefreshPushTokenArgs = {
  data: PushTokenInput;
};

export type MutationRemoveNoteArgs = {
  id: Scalars['Int'];
};

export type MutationResetPasswordArgs = {
  data: ResetPasswordUser;
};

export type MutationResetPasswordByTokenArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type MutationResetRealizationPriceArgs = {
  taskId: Scalars['Int'];
};

export type MutationSendMessageArgs = {
  data: CreateMessageInput;
};

export type MutationSignInArgs = {
  data: LoginUserInput;
};

export type MutationStartSubtaskArgs = {
  id: Scalars['Int'];
};

export type MutationStartTaskArgs = {
  id: Scalars['Int'];
};

export type MutationUpdateFileArgs = {
  data: UpdateFileInput;
  id: Scalars['ID'];
};

export type MutationUpdateNoteArgs = {
  data: UpdateNoteInput;
  id: Scalars['Int'];
};

export type MutationUpdatePoligonTemplateArgs = {
  data: UpdatePoligonTemplateInput;
  id: Scalars['Int'];
};

export type MutationUpdateProjectArgs = {
  data: UpdateProjectInput;
  id: Scalars['Int'];
};

export type MutationUpdateSubtaskArgs = {
  data: UpdateSubtaskInput;
  id: Scalars['Int'];
};

export type MutationUpdateTaskArgs = {
  data: UpdateTaskInput;
  id: Scalars['Int'];
};

export type MutationUpsertPoligonArgs = {
  data: UpsertPoligonInput;
};

export type MutationUpsertPoligonColorArgs = {
  data: UpsertPoligonColorInput;
};

export type MutationUpsertPoligonObjectArgs = {
  data: UpsertPoligonObjectInput;
};

export type MyProject = {
  __typename?: 'MyProject';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  myTaskSubTaskList: TasksList;
  name: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
};

export type MyProjectMyTaskSubTaskListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Sort>;
  tagsId?: InputMaybe<Array<Scalars['ID']>>;
};

export type MyProjectsList = {
  __typename?: 'MyProjectsList';
  count: Scalars['Int'];
  rows: Array<Maybe<MyProject>>;
};

export type Note = {
  __typename?: 'Note';
  chat?: Maybe<Chat>;
  chatId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  owner?: Maybe<User>;
  ownerId: Scalars['Int'];
  subtask?: Maybe<Subtask>;
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['String'];
};

export type OnlyDateRangeInput = {
  from?: InputMaybe<Scalars['Date']>;
  to?: InputMaybe<Scalars['Date']>;
};

export type Poligon = {
  __typename?: 'Poligon';
  arrows: Array<PoligonArrow>;
  colors: Array<PoligonColor>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  objects?: Maybe<Array<PoligonObject>>;
  owner?: Maybe<User>;
  project: Project;
  rectangles: Array<PoligonRect>;
  updatedAt: Scalars['String'];
};

export type PoligonArrow = {
  __typename?: 'PoligonArrow';
  createdAt: Scalars['String'];
  endX: Scalars['Int'];
  endY: Scalars['Int'];
  fill: Scalars['String'];
  id: Scalars['Int'];
  isStatus: Scalars['String'];
  poligon?: Maybe<Poligon>;
  startX: Scalars['Int'];
  startY: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type PoligonArrowType = {
  endX: Scalars['Int'];
  endY: Scalars['Int'];
  fill: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  isStatus: IsStatus;
  startX: Scalars['Int'];
  startY: Scalars['Int'];
};

export type PoligonColor = {
  __typename?: 'PoligonColor';
  color: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  poligon: Poligon;
  updatedAt: Scalars['String'];
};

export type PoligonObject = {
  __typename?: 'PoligonObject';
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  parent?: Maybe<Array<PoligonObject>>;
  poligon?: Maybe<Poligon>;
  rectangles?: Maybe<Array<PoligonRect>>;
  subtask?: Maybe<Array<Subtask>>;
  task?: Maybe<Array<Task>>;
  updatedAt: Scalars['String'];
};

export type PoligonObjectInputCanvasObjects = {
  rectangles: Array<PoligonRectType>;
};

export type PoligonRect = {
  __typename?: 'PoligonRect';
  alignName?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  draggable: Scalars['Boolean'];
  fill: Scalars['String'];
  frontendData?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  id: Scalars['Int'];
  isStatus: Scalars['String'];
  name: Scalars['String'];
  nameArray: Array<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  parentLink?: Maybe<Scalars['Int']>;
  parentName?: Maybe<Scalars['String']>;
  poligon?: Maybe<Poligon>;
  poligonObject?: Maybe<PoligonObject>;
  taskLink?: Maybe<LinkTypeModel>;
  text: Scalars['String'];
  textObj: Scalars['JSON'];
  updatedAt: Scalars['String'];
  width: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type PoligonRectType = {
  alignName?: InputMaybe<Scalars['String']>;
  draggable: Scalars['Boolean'];
  fill: Scalars['String'];
  frontendData?: InputMaybe<Scalars['String']>;
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  isStatus: IsStatus;
  name: Scalars['String'];
  nameArray: Array<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  parentLink?: InputMaybe<Scalars['Int']>;
  parentName?: InputMaybe<Scalars['String']>;
  taskLink?: InputMaybe<Array<LinkType>>;
  text: Scalars['String'];
  textObj: TextObjType;
  width: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type PoligonTemplate = {
  __typename?: 'PoligonTemplate';
  canvasObject: Scalars['JSON'];
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PoligonTemplateList = {
  __typename?: 'PoligonTemplateList';
  count: Scalars['Int'];
  rows: Array<PoligonTemplate>;
};

export type Project = ProjectInterface & {
  __typename?: 'Project';
  author?: Maybe<User>;
  createdAt: Scalars['String'];
  editor?: Maybe<User>;
  id: Scalars['Int'];
  maintainer?: Maybe<User>;
  name: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  poligon?: Maybe<Poligon>;
  projectActivities: Array<Maybe<ProjectActivity>>;
  tasks: TasksList;
  tasksSubtasks: TasksList;
  updatedAt: Scalars['String'];
};

export type ProjectProjectActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<SortingOrders>;
};

export type ProjectTasksArgs = {
  data: GetTasksInput;
};

export type ProjectTasksSubtasksArgs = {
  data: GetTasksInput;
};

export type ProjectActivity = {
  __typename?: 'ProjectActivity';
  action: Scalars['String'];
  actioner: User;
  assignee?: Maybe<User>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  note?: Maybe<Note>;
  project: Project;
  status?: Maybe<Status>;
  subtask?: Maybe<Subtask>;
  task?: Maybe<Task>;
};

export type ProjectEntityType = {
  __typename?: 'ProjectEntityType';
  id: Scalars['Int'];
  name: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  tasks?: Maybe<Array<Task>>;
};

export type ProjectInterface = {
  name: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
};

export type ProjectsList = {
  __typename?: 'ProjectsList';
  count: Scalars['Int'];
  rows: Array<Maybe<Project>>;
};

export type PushTokenInput = {
  appPlatform: Scalars['String'];
  deviceId: Scalars['String'];
  token: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllFiles: GetAllFiles;
  getAllUsers: GetAllUsers;
  getArchivedProjects: ArchivedProjectListType;
  getCalendar: CalendarType;
  getChats: ChatsList;
  getCurrentUser?: Maybe<User>;
  getExpenses: Expenses;
  getFileById: File;
  getMessages: MessagesList;
  getMyProjectsRoleMaintainer: MyProjectsList;
  getNoteById: Note;
  getNoteByParameters: Note;
  getPoligon: Poligon;
  getPoligonObject: PoligonObject;
  getPoligonRect: PoligonRect;
  getPoligonTemplate: PoligonTemplate;
  getPoligonTemplates: PoligonTemplateList;
  getPrivateChats: GetAllUsers;
  getProject: Project;
  getProjectActivities: Array<ProjectActivity>;
  getProjects: ProjectsList;
  getServerTime?: Maybe<ServerTimeType>;
  getStatuses: Array<Status>;
  getSubtask: Subtask;
  getSubtasks: SubtasksList;
  getTags: TagList;
  getTask: Task;
  getTasks: TasksList;
  getTasksSubtasks: TasksList;
  getUserPrivateChats: ChatsList;
  loginUser: UserSignIn;
};

export type QueryGetAllFilesArgs = {
  data: GetFileInput;
};

export type QueryGetAllUsersArgs = {
  input: GetUsersInput;
};

export type QueryGetArchivedProjectsArgs = {
  data: GetProjectsInput;
};

export type QueryGetCalendarArgs = {
  dateRange: OnlyDateRangeInput;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  projectSort?: InputMaybe<Sort>;
  taskLimit?: InputMaybe<Scalars['Int']>;
  taskOffset?: InputMaybe<Scalars['Int']>;
  taskSort?: InputMaybe<Sort>;
};

export type QueryGetChatsArgs = {
  data: GetChatsInput;
};

export type QueryGetExpensesArgs = {
  expensesDate?: InputMaybe<Scalars['String']>;
};

export type QueryGetFileByIdArgs = {
  id: Scalars['Float'];
};

export type QueryGetMessagesArgs = {
  chatId: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type QueryGetMyProjectsRoleMaintainerArgs = {
  data: GetMyProjectsInput;
};

export type QueryGetNoteByIdArgs = {
  id: Scalars['Float'];
};

export type QueryGetNoteByParametersArgs = {
  data: GetNoteByParametersInput;
};

export type QueryGetPoligonArgs = {
  id: Scalars['Int'];
};

export type QueryGetPoligonObjectArgs = {
  id: Scalars['Int'];
};

export type QueryGetPoligonRectArgs = {
  id: Scalars['Int'];
};

export type QueryGetPoligonTemplateArgs = {
  id: Scalars['Int'];
};

export type QueryGetPoligonTemplatesArgs = {
  data: GetPoligonTemplateInput;
};

export type QueryGetPrivateChatsArgs = {
  data: GetChatsInput;
};

export type QueryGetProjectArgs = {
  id: Scalars['Int'];
};

export type QueryGetProjectActivitiesArgs = {
  sortOrder?: InputMaybe<SortingOrders>;
};

export type QueryGetProjectsArgs = {
  data: GetProjectsInput;
};

export type QueryGetSubtaskArgs = {
  id: Scalars['Int'];
  type?: InputMaybe<Scalars['String']>;
};

export type QueryGetSubtasksArgs = {
  data: GetSubtasksInput;
};

export type QueryGetTagsArgs = {
  data?: InputMaybe<GetTagsInput>;
};

export type QueryGetTaskArgs = {
  id: Scalars['Int'];
  type?: InputMaybe<Scalars['String']>;
};

export type QueryGetTasksArgs = {
  data: GetTasksInput;
};

export type QueryGetTasksSubtasksArgs = {
  data: GetTasksInput;
};

export type QueryGetUserPrivateChatsArgs = {
  data?: InputMaybe<GetChatsInput>;
};

export type QueryLoginUserArgs = {
  data: LoginUserInput;
};

export type ReadMessageResponse = {
  __typename?: 'ReadMessageResponse';
  message: Message;
  user: User;
};

/** Input for reset password user */
export type ResetPasswordUser = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type ServerTimeType = {
  __typename?: 'ServerTimeType';
  time: Scalars['String'];
  timeZone: Scalars['String'];
  timeZoneGMT: Scalars['String'];
};

export type Sort = {
  field: SortingField;
  type: SortingOrders;
};

export enum SortTagsField {
  CreatedAt = 'createdAt',
  Name = 'name',
}

export type SortTagsInput = {
  field?: InputMaybe<SortTagsField>;
  type?: InputMaybe<SortingOrders>;
};

export enum SortingField {
  Activity = 'activity',
  Code = 'code',
  CreatedAt = 'createdAt',
  Number = 'number',
  Status = 'status',
  StatusId = 'statusId',
}

export enum SortingOrders {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Status = {
  __typename?: 'Status';
  color: Scalars['String'];
  id: Scalars['Float'];
};

export type StatusAndUser = {
  __typename?: 'StatusAndUser';
  status: Scalars['String'];
  user: User;
};

export type StatusResponse = {
  __typename?: 'StatusResponse';
  status: Scalars['String'];
};

export type StorageEntityList = {
  __typename?: 'StorageEntityList';
  count: Scalars['Int'];
  rows: Array<Maybe<StorageUnion>>;
};

export type StorageUnion = File | Note;

export type Subscription = {
  __typename?: 'Subscription';
  messagesReadBefore: ReadMessageResponse;
  newActivity: Scalars['String'];
  newMessage: Message;
  taskSubtaskActivity: TaskSubtaskActivityType;
};

export type SubscriptionMessagesReadBeforeArgs = {
  chatId: Scalars['Int'];
};

export type SubscriptionNewMessageArgs = {
  chatId: Scalars['Int'];
};

export type Subtask = {
  __typename?: 'Subtask';
  author?: Maybe<User>;
  chat: Chat;
  closeDate?: Maybe<Scalars['Date']>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  daysAfterStartCount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  editor?: Maybe<User>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  maintainer?: Maybe<User>;
  maintainerComment?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notes: Array<Maybe<Note>>;
  number: Scalars['Int'];
  poligonObject?: Maybe<PoligonObject>;
  startDate?: Maybe<Scalars['Date']>;
  status?: Maybe<Status>;
  tags: TagList;
  task: Task;
  updatedAt: Scalars['String'];
};

export type SubtaskNotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<SortingOrders>;
};

export type SubtaskTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type SubtasksList = {
  __typename?: 'SubtasksList';
  count: Scalars['Int'];
  rows: Array<Maybe<Subtask>>;
};

export type Tag = {
  __typename?: 'Tag';
  color?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TagList = {
  __typename?: 'TagList';
  count: Scalars['Int'];
  rows: Array<Tag>;
};

export type Task = {
  __typename?: 'Task';
  assignees: Array<Maybe<User>>;
  author?: Maybe<User>;
  chat: Chat;
  closeDate?: Maybe<Scalars['Date']>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  daysAfterStartCount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  editor?: Maybe<User>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  maintainer?: Maybe<User>;
  maintainerComment?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notes: Array<Maybe<Note>>;
  number: Scalars['Int'];
  parentId?: Maybe<Scalars['Float']>;
  poligonObject?: Maybe<PoligonObject>;
  project: Project;
  /** This value appears only when there is an argument 'expensesDate' */
  realizationPerMonthAmount?: Maybe<Scalars['Float']>;
  realizationPrice?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Date']>;
  status?: Maybe<Status>;
  storageEntities: StorageEntityList;
  subtasks: Array<Maybe<Subtask>>;
  tags: TagList;
  updatedAt: Scalars['String'];
};

export type TaskAssigneesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type TaskNotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<SortingOrders>;
};

export type TaskStorageEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type TaskSubtasksArgs = {
  data: GetSubtasksInput;
};

export type TaskTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type TaskSubtaskActivityType = {
  __typename?: 'TaskSubtaskActivityType';
  subtask?: Maybe<Scalars['Int']>;
  task?: Maybe<Scalars['Int']>;
  type: TaskSubtaskEventTypes;
};

export enum TaskSubtaskEventTypes {
  AddCloseDate = 'ADD_CLOSE_DATE',
  AddStartDate = 'ADD_START_DATE',
  Deleted = 'DELETED',
  StatusChanged = 'STATUS_CHANGED',
  TaskClosed = 'TASK_CLOSED',
  TaskDeleted = 'TASK_DELETED',
  TaskStarted = 'TASK_STARTED',
  TaskUpdated = 'TASK_UPDATED',
}

export type TasksList = {
  __typename?: 'TasksList';
  count: Scalars['Int'];
  rows: Array<Maybe<Task>>;
};

export type TextObjType = {
  fontSize: Scalars['Int'];
  fontStyle: Scalars['String'];
  fontWeight: Scalars['String'];
  textAlign: Scalars['String'];
  textDecoration: Scalars['String'];
};

export type UpdateFileInput = {
  fileName?: InputMaybe<Scalars['String']>;
};

export type UpdateNoteInput = {
  content: Scalars['String'];
};

export type UpdatePoligonTemplateInput = {
  canvasObject?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectInput = {
  name?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
};

export type UpdateSubtaskInput = {
  closeDate?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  maintainerComment?: InputMaybe<Scalars['String']>;
  maintainerId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
  statusId?: InputMaybe<Scalars['Int']>;
  tagsId?: InputMaybe<Array<Scalars['ID']>>;
};

export type UpdateTaskInput = {
  closeDate?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  maintainerComment?: InputMaybe<Scalars['String']>;
  maintainerId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  realizationPrice?: InputMaybe<Scalars['Float']>;
  startDate?: InputMaybe<Scalars['Date']>;
  statusId?: InputMaybe<Scalars['Int']>;
  tagsId?: InputMaybe<Array<Scalars['ID']>>;
};

export type UpsertPoligonColorInput = {
  color?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Array<Scalars['String']>>;
  poligonId: Scalars['Float'];
};

export type UpsertPoligonInput = {
  canvasData: InputCanvasObjects;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  projectId: Scalars['Int'];
};

export type UpsertPoligonObjectInput = {
  canvasData?: InputMaybe<PoligonObjectInputCanvasObjects>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  poligonId?: InputMaybe<Scalars['Int']>;
  tasksId?: InputMaybe<Array<LinkType>>;
};

export type User = {
  __typename?: 'User';
  assignedTasks: Array<Maybe<Task>>;
  /** Use only to display private chats in a query getPrivateChats. Use the first element of the array.  */
  chats?: Maybe<Array<Chat>>;
  chatsList: ChatsList;
  createdAt?: Maybe<Scalars['String']>;
  creator?: Maybe<User>;
  creatorId?: Maybe<Scalars['Int']>;
  editDate?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  lastConnect?: Maybe<Scalars['String']>;
  lastEditerUser?: Maybe<User>;
  login?: Maybe<Scalars['String']>;
  maintainedSubtasks: Array<Maybe<Subtask>>;
  maintainedTasks: Array<Maybe<Task>>;
  myTasksSubtasks: Array<Maybe<Task>>;
  notes?: Maybe<Array<Note>>;
  onlineStatus: Scalars['Boolean'];
  projects: Array<Maybe<Project>>;
  registrationLink?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  taskCount?: Maybe<Scalars['Int']>;
  tasks: Array<Maybe<Task>>;
  theNote?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  viewHistory: Array<Maybe<ViewHistory>>;
};

export type UserAssignedTasksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UserChatsListArgs = {
  data: GetChatsInput;
};

export type UserMaintainedSubtasksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UserMaintainedTasksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UserMyTasksSubtasksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tagsId?: InputMaybe<Array<Scalars['ID']>>;
};

export type UserNotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UserTaskCountArgs = {
  tagsId?: InputMaybe<Array<Scalars['ID']>>;
};

export type UserViewHistoryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<SortingOrders>;
  tagsId?: InputMaybe<Array<Scalars['ID']>>;
};

export enum UserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}

export type UserSignIn = {
  __typename?: 'UserSignIn';
  token: Scalars['String'];
  user: User;
};

export type ViewHistory = {
  __typename?: 'ViewHistory';
  id: Scalars['Int'];
  subtask?: Maybe<Subtask>;
  task?: Maybe<Task>;
  user: User;
  viewedAt: Scalars['String'];
};

export enum IsStatus {
  Delete = 'Delete',
  Upsert = 'Upsert',
}

export type ChatFragmentFragment = {
  __typename?: 'Chat';
  id: number;
  messagesList: {
    __typename?: 'MessagesList';
    count: number;
    rows: Array<{
      __typename?: 'Message';
      isRead?: boolean | null;
      id: number;
      text: string;
      createdAt: any;
      user: {
        __typename?: 'User';
        login?: string | null;
        image?: string | null;
        id?: number | null;
        onlineStatus: boolean;
      };
    } | null>;
  };
};

export type FileFragmentFragment = {
  __typename: 'File';
  id: number;
  fileName: string;
  path: string;
  size: number;
  user?: { __typename?: 'User'; id?: number | null } | null;
};

export type MessageFragmentFragment = {
  __typename?: 'Message';
  id: number;
  text: string;
  createdAt: any;
  user: {
    __typename?: 'User';
    login?: string | null;
    image?: string | null;
    id?: number | null;
    onlineStatus: boolean;
  };
};

export type NotesFragmentFragment = {
  __typename: 'Note';
  id: number;
  createdAt: string;
  chatId?: number | null;
  taskId?: number | null;
  content?: string | null;
  owner?: {
    __typename?: 'User';
    id?: number | null;
    login?: string | null;
    image?: string | null;
    role?: string | null;
  } | null;
};

export type PrivatChatsFragmentFragment = {
  __typename: 'User';
  id?: number | null;
  login?: string | null;
  image?: string | null;
  role?: string | null;
  onlineStatus: boolean;
  chats?: Array<{
    __typename?: 'Chat';
    id: number;
    unreadMessagesCount: number;
    name?: string | null;
  }> | null;
};

export type ProjectActivityFragment = {
  __typename: 'ProjectActivity';
  id: number;
  action: string;
  createdAt: string;
  actioner: {
    __typename?: 'User';
    id?: number | null;
    login?: string | null;
    image?: string | null;
  };
  project: { __typename?: 'Project'; id: number; name: string };
  task?: {
    __typename?: 'Task';
    id: number;
    name: string;
    code?: string | null;
    maintainer?: { __typename?: 'User'; login?: string | null; image?: string | null } | null;
  } | null;
  subtask?: {
    __typename?: 'Subtask';
    id: number;
    name: string;
    code?: string | null;
    maintainer?: { __typename?: 'User'; login?: string | null; image?: string | null } | null;
  } | null;
};

export type TasksFragmentFragment = {
  __typename?: 'Task';
  id: number;
  number: number;
  name: string;
  code?: string | null;
  startDate?: any | null;
  closeDate?: any | null;
  endDate?: any | null;
  realizationPerMonthAmount?: number | null;
  realizationPrice?: number | null;
  status?: { __typename?: 'Status'; id: number; color: string } | null;
  project: { __typename?: 'Project'; id: number; number?: number | null };
  author?: {
    __typename?: 'User';
    id?: number | null;
    image?: string | null;
    login?: string | null;
    role?: string | null;
  } | null;
  assignees: Array<{
    __typename?: 'User';
    id?: number | null;
    image?: string | null;
    login?: string | null;
    role?: string | null;
  } | null>;
  maintainer?: {
    __typename?: 'User';
    id?: number | null;
    login?: string | null;
    image?: string | null;
  } | null;
  tags: {
    __typename?: 'TagList';
    count: number;
    rows: Array<{
      __typename?: 'Tag';
      id: number;
      name: string;
      color?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
  };
};

export type UserFragmentFragment = {
  __typename: 'User';
  fullName?: string | null;
  login?: string | null;
  id?: number | null;
  role?: string | null;
  image?: string | null;
  theNote?: string | null;
  createdAt?: string | null;
  editDate?: string | null;
  lastConnect?: string | null;
  updatedAt?: string | null;
  registrationLink?: string | null;
  lastEditerUser?: { __typename?: 'User'; login?: string | null } | null;
  creator?: { __typename?: 'User'; login?: string | null } | null;
};

export type AdminEditUserMutationVariables = Exact<{
  data: EditStatusUserInput;
}>;

export type AdminEditUserMutation = {
  __typename?: 'Mutation';
  adminEditUser: {
    __typename: 'StatusAndUser';
    status: string;
    user: {
      __typename: 'User';
      fullName?: string | null;
      login?: string | null;
      id?: number | null;
      role?: string | null;
      image?: string | null;
      theNote?: string | null;
      createdAt?: string | null;
      editDate?: string | null;
      lastConnect?: string | null;
      updatedAt?: string | null;
      registrationLink?: string | null;
      lastEditerUser?: { __typename?: 'User'; login?: string | null } | null;
      creator?: { __typename?: 'User'; login?: string | null } | null;
    };
  };
};

export type AssignUserToTaskMutationVariables = Exact<{
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
}>;

export type AssignUserToTaskMutation = {
  __typename?: 'Mutation';
  assignUserToTask: {
    __typename?: 'Task';
    id: number;
    assignees: Array<{
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null>;
    maintainer?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null;
  };
};

export type CreateNoteMutationVariables = Exact<{
  data: CreateNoteInput;
}>;

export type CreateNoteMutation = {
  __typename?: 'Mutation';
  createNote: {
    __typename?: 'Note';
    id: number;
    createdAt: string;
    chatId?: number | null;
    taskId?: number | null;
    content?: string | null;
    ownerId: number;
    owner?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      fullName?: string | null;
      image?: string | null;
      createdAt?: string | null;
      role?: string | null;
    } | null;
  };
};

export type CreateProjectMutationVariables = Exact<{
  data: CreateProjectInput;
}>;

export type CreateProjectMutation = {
  __typename?: 'Mutation';
  createProject: {
    __typename: 'Project';
    id: number;
    name: string;
    number?: number | null;
    createdAt: string;
    updatedAt: string;
    poligon?: { __typename?: 'Poligon'; id: number } | null;
    author?: {
      __typename?: 'User';
      id?: number | null;
      image?: string | null;
      login?: string | null;
    } | null;
    tasks: {
      __typename: 'TasksList';
      count: number;
      rows: Array<{
        __typename?: 'Task';
        id: number;
        number: number;
        name: string;
        code?: string | null;
        startDate?: any | null;
        closeDate?: any | null;
        endDate?: any | null;
        realizationPerMonthAmount?: number | null;
        realizationPrice?: number | null;
        status?: { __typename?: 'Status'; id: number; color: string } | null;
        project: { __typename?: 'Project'; id: number; number?: number | null };
        author?: {
          __typename?: 'User';
          id?: number | null;
          image?: string | null;
          login?: string | null;
          role?: string | null;
        } | null;
        assignees: Array<{
          __typename?: 'User';
          id?: number | null;
          image?: string | null;
          login?: string | null;
          role?: string | null;
        } | null>;
        maintainer?: {
          __typename?: 'User';
          id?: number | null;
          login?: string | null;
          image?: string | null;
        } | null;
        tags: {
          __typename?: 'TagList';
          count: number;
          rows: Array<{
            __typename?: 'Tag';
            id: number;
            name: string;
            color?: string | null;
            createdAt: string;
            updatedAt: string;
          }>;
        };
      } | null>;
    };
  };
};

export type CreateSubtaskMutationVariables = Exact<{
  data: CreateSubtaskInput;
}>;

export type CreateSubtaskMutation = {
  __typename?: 'Mutation';
  createSubtask: {
    __typename?: 'Subtask';
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    number: number;
    code?: string | null;
    endDate?: any | null;
    task: {
      __typename?: 'Task';
      id: number;
      number: number;
      code?: string | null;
      project: { __typename?: 'Project'; id: number; number?: number | null };
    };
    status?: { __typename?: 'Status'; id: number; color: string } | null;
    author?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null;
    maintainer?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null;
    tags: {
      __typename?: 'TagList';
      count: number;
      rows: Array<{
        __typename?: 'Tag';
        id: number;
        name: string;
        color?: string | null;
        createdAt: string;
        updatedAt: string;
      }>;
    };
  };
};

export type CreateTaskMutationVariables = Exact<{
  data: CreateTaskInput;
}>;

export type CreateTaskMutation = {
  __typename?: 'Mutation';
  createTask: {
    __typename?: 'Task';
    id: number;
    number: number;
    name: string;
    code?: string | null;
    startDate?: any | null;
    closeDate?: any | null;
    endDate?: any | null;
    realizationPerMonthAmount?: number | null;
    realizationPrice?: number | null;
    status?: { __typename?: 'Status'; id: number; color: string } | null;
    project: { __typename?: 'Project'; id: number; number?: number | null };
    author?: {
      __typename?: 'User';
      id?: number | null;
      image?: string | null;
      login?: string | null;
      role?: string | null;
    } | null;
    assignees: Array<{
      __typename?: 'User';
      id?: number | null;
      image?: string | null;
      login?: string | null;
      role?: string | null;
    } | null>;
    maintainer?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null;
    tags: {
      __typename?: 'TagList';
      count: number;
      rows: Array<{
        __typename?: 'Tag';
        id: number;
        name: string;
        color?: string | null;
        createdAt: string;
        updatedAt: string;
      }>;
    };
  };
};

export type DeassignUserFromTaskMutationVariables = Exact<{
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
}>;

export type DeassignUserFromTaskMutation = {
  __typename?: 'Mutation';
  deassignUserFromTask: {
    __typename?: 'Task';
    id: number;
    assignees: Array<{
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null>;
  };
};

export type DeleteFileMutationVariables = Exact<{
  id: Scalars['Float'];
}>;

export type DeleteFileMutation = {
  __typename?: 'Mutation';
  deleteFile: { __typename?: 'StatusResponse'; status: string };
};

export type DeleteMessageMutationVariables = Exact<{
  messageId: Scalars['ID'];
}>;

export type DeleteMessageMutation = { __typename?: 'Mutation'; deleteMessage: boolean };

export type DeleteProjectMutationVariables = Exact<{
  id: Scalars['Int'];
  force?: InputMaybe<Scalars['Boolean']>;
}>;

export type DeleteProjectMutation = { __typename?: 'Mutation'; deleteProject: boolean };

export type DeleteSubtaskMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteSubtaskMutation = { __typename?: 'Mutation'; deleteSubtask: boolean };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteTaskMutation = { __typename?: 'Mutation'; deleteTask: boolean };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteUserMutation = { __typename?: 'Mutation'; deleteUser: boolean };

export type EditUserMutationVariables = Exact<{
  data: EditUserInput;
}>;

export type EditUserMutation = {
  __typename?: 'Mutation';
  editUser: {
    __typename: 'User';
    fullName?: string | null;
    login?: string | null;
    id?: number | null;
    role?: string | null;
    image?: string | null;
    theNote?: string | null;
    createdAt?: string | null;
    editDate?: string | null;
    lastConnect?: string | null;
    updatedAt?: string | null;
    registrationLink?: string | null;
    lastEditerUser?: { __typename?: 'User'; login?: string | null } | null;
    creator?: { __typename?: 'User'; login?: string | null } | null;
  };
};

export type GetOrCreatePrivateChatMutationVariables = Exact<{
  userId: Scalars['Float'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;

export type GetOrCreatePrivateChatMutation = {
  __typename?: 'Mutation';
  getOrCreatePrivateChat?: {
    __typename?: 'Chat';
    id: number;
    messagesList: {
      __typename?: 'MessagesList';
      count: number;
      rows: Array<{
        __typename?: 'Message';
        isRead?: boolean | null;
        id: number;
        text: string;
        createdAt: any;
        user: {
          __typename?: 'User';
          login?: string | null;
          image?: string | null;
          id?: number | null;
          onlineStatus: boolean;
        };
      } | null>;
    };
  } | null;
};

export type GetPrivateChatNotesMutationVariables = Exact<{
  id: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type GetPrivateChatNotesMutation = {
  __typename?: 'Mutation';
  getOrCreatePrivateChat?: {
    __typename?: 'Chat';
    notes: Array<{
      __typename: 'Note';
      id: number;
      createdAt: string;
      chatId?: number | null;
      taskId?: number | null;
      content?: string | null;
      owner?: {
        __typename?: 'User';
        id?: number | null;
        login?: string | null;
        image?: string | null;
        role?: string | null;
      } | null;
    } | null>;
  } | null;
};

export type LoadFileMutationVariables = Exact<{
  data: LoadFileInput;
}>;

export type LoadFileMutation = {
  __typename?: 'Mutation';
  loadFile: {
    __typename: 'File';
    id: number;
    fileName: string;
    path: string;
    size: number;
    user?: { __typename?: 'User'; id?: number | null } | null;
  };
};

export type LogoutMutationVariables = Exact<{
  data: LogoutUserInput;
}>;

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean };

export type ReadMessagesBeforeMutationVariables = Exact<{
  messageId: Scalars['Int'];
}>;

export type ReadMessagesBeforeMutation = { __typename?: 'Mutation'; readMessagesBefore: boolean };

export type ReadProjectActivitiesMutationVariables = Exact<{
  taskId?: InputMaybe<Scalars['Int']>;
  subtaskId?: InputMaybe<Scalars['Int']>;
}>;

export type ReadProjectActivitiesMutation = {
  __typename?: 'Mutation';
  readProjectActivities: boolean;
};

export type RefreshPushTokenMutationVariables = Exact<{
  data: PushTokenInput;
}>;

export type RefreshPushTokenMutation = {
  __typename?: 'Mutation';
  refreshPushToken: { __typename?: 'StatusResponse'; status: string };
};

export type RemoveNoteMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type RemoveNoteMutation = { __typename?: 'Mutation'; removeNote: boolean };

export type SendMessageMutationVariables = Exact<{
  data: CreateMessageInput;
}>;

export type SendMessageMutation = {
  __typename?: 'Mutation';
  sendMessage: {
    __typename?: 'Message';
    id: number;
    text: string;
    isRead?: boolean | null;
    createdAt: any;
    user: { __typename?: 'User'; login?: string | null; image?: string | null };
  };
};

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['Int'];
  data: UpdateProjectInput;
}>;

export type UpdateProjectMutation = {
  __typename?: 'Mutation';
  updateProject: {
    __typename?: 'Project';
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    number?: number | null;
  };
};

export type UpdateSubtaskMutationVariables = Exact<{
  data: UpdateSubtaskInput;
  id: Scalars['Int'];
}>;

export type UpdateSubtaskMutation = {
  __typename?: 'Mutation';
  updateSubtask: {
    __typename?: 'Subtask';
    id: number;
    name: string;
    status?: { __typename?: 'Status'; id: number; color: string } | null;
    author?: { __typename?: 'User'; id?: number | null; login?: string | null } | null;
    chat: { __typename?: 'Chat'; id: number };
    maintainer?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null;
    task: { __typename?: 'Task'; id: number };
    tags: {
      __typename?: 'TagList';
      count: number;
      rows: Array<{
        __typename?: 'Tag';
        id: number;
        name: string;
        color?: string | null;
        createdAt: string;
        updatedAt: string;
      }>;
    };
  };
};

export type UpdateTaskMutationVariables = Exact<{
  data: UpdateTaskInput;
  id: Scalars['Int'];
}>;

export type UpdateTaskMutation = {
  __typename?: 'Mutation';
  updateTask: {
    __typename?: 'Task';
    id: number;
    name: string;
    chat: { __typename?: 'Chat'; id: number };
    status?: { __typename?: 'Status'; id: number; color: string } | null;
    project: { __typename?: 'Project'; id: number; number?: number | null; name: string };
    maintainer?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null;
    tags: {
      __typename?: 'TagList';
      count: number;
      rows: Array<{
        __typename?: 'Tag';
        id: number;
        name: string;
        color?: string | null;
        createdAt: string;
        updatedAt: string;
      }>;
    };
  };
};

export type GetAllFilesQueryVariables = Exact<{
  data: GetFileInput;
}>;

export type GetAllFilesQuery = {
  __typename?: 'Query';
  getAllFiles: {
    __typename: 'GetAllFiles';
    count: number;
    rows: Array<{
      __typename: 'File';
      id: number;
      fileName: string;
      path: string;
      size: number;
      user?: { __typename?: 'User'; id?: number | null } | null;
    }>;
  };
};

export type GetTasksSubtasksQueryVariables = Exact<{
  data: GetTasksInput;
}>;

export type GetTasksSubtasksQuery = {
  __typename?: 'Query';
  getTasksSubtasks: {
    __typename?: 'TasksList';
    count: number;
    rows: Array<{
      __typename?: 'Task';
      id: number;
      createdAt: string;
      updatedAt: string;
      name: string;
      number: number;
      code?: string | null;
      startDate?: any | null;
      closeDate?: any | null;
      endDate?: any | null;
      parentId?: number | null;
      realizationPerMonthAmount?: number | null;
      realizationPrice?: number | null;
      project: { __typename?: 'Project'; id: number; name: string; number?: number | null };
      tags: {
        __typename?: 'TagList';
        rows: Array<{
          __typename?: 'Tag';
          id: number;
          name: string;
          color?: string | null;
          createdAt: string;
          updatedAt: string;
        }>;
      };
      status?: { __typename?: 'Status'; id: number; color: string } | null;
      subtasks: Array<{
        __typename?: 'Subtask';
        id: number;
        createdAt: string;
        updatedAt: string;
        name: string;
        number: number;
        code?: string | null;
        startDate?: any | null;
        closeDate?: any | null;
        endDate?: any | null;
        status?: { __typename?: 'Status'; id: number; color: string } | null;
        maintainer?: {
          __typename?: 'User';
          id?: number | null;
          login?: string | null;
          image?: string | null;
        } | null;
        task: {
          __typename?: 'Task';
          id: number;
          number: number;
          code?: string | null;
          project: { __typename?: 'Project'; id: number; name: string; number?: number | null };
        };
      } | null>;
      maintainer?: {
        __typename?: 'User';
        id?: number | null;
        login?: string | null;
        image?: string | null;
      } | null;
    } | null>;
  };
};

export type GetAllUsersQueryVariables = Exact<{
  input: GetUsersInput;
}>;

export type GetAllUsersQuery = {
  __typename?: 'Query';
  getAllUsers: {
    __typename?: 'GetAllUsers';
    count: number;
    rows: Array<{
      __typename: 'User';
      fullName?: string | null;
      login?: string | null;
      id?: number | null;
      role?: string | null;
      image?: string | null;
      theNote?: string | null;
      createdAt?: string | null;
      editDate?: string | null;
      lastConnect?: string | null;
      updatedAt?: string | null;
      registrationLink?: string | null;
      lastEditerUser?: { __typename?: 'User'; login?: string | null } | null;
      creator?: { __typename?: 'User'; login?: string | null } | null;
    }>;
  };
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: 'Query';
  getCurrentUser?: {
    __typename: 'User';
    fullName?: string | null;
    login?: string | null;
    id?: number | null;
    role?: string | null;
    image?: string | null;
    theNote?: string | null;
    createdAt?: string | null;
    editDate?: string | null;
    lastConnect?: string | null;
    updatedAt?: string | null;
    registrationLink?: string | null;
    lastEditerUser?: { __typename?: 'User'; login?: string | null } | null;
    creator?: { __typename?: 'User'; login?: string | null } | null;
  } | null;
};

export type GetMyProjectsRoleMaintainerQueryVariables = Exact<{
  data: GetMyProjectsInput;
  tagsId?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;

export type GetMyProjectsRoleMaintainerQuery = {
  __typename?: 'Query';
  getMyProjectsRoleMaintainer: {
    __typename?: 'MyProjectsList';
    count: number;
    rows: Array<{
      __typename?: 'MyProject';
      id: string;
      name: string;
      number?: number | null;
      myTaskSubTaskList: {
        __typename?: 'TasksList';
        count: number;
        rows: Array<{
          __typename?: 'Task';
          id: number;
          createdAt: string;
          name: string;
          code?: string | null;
          parentId?: number | null;
          maintainerComment?: string | null;
          realizationPrice?: number | null;
          realizationPerMonthAmount?: number | null;
          status?: { __typename?: 'Status'; id: number } | null;
          maintainer?: {
            __typename?: 'User';
            id?: number | null;
            login?: string | null;
            image?: string | null;
          } | null;
          tags: {
            __typename?: 'TagList';
            count: number;
            rows: Array<{
              __typename?: 'Tag';
              id: number;
              name: string;
              color?: string | null;
              createdAt: string;
              updatedAt: string;
            }>;
          };
          project: { __typename?: 'Project'; id: number; number?: number | null; name: string };
        } | null>;
      };
    } | null>;
  };
};

export type GetMyTasksSubtasksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tagsId?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;

export type GetMyTasksSubtasksQuery = {
  __typename?: 'Query';
  getCurrentUser?: {
    __typename?: 'User';
    id?: number | null;
    taskCount?: number | null;
    myTasksSubtasks: Array<{
      __typename?: 'Task';
      id: number;
      parentId?: number | null;
      name: string;
      code?: string | null;
      createdAt: string;
      updatedAt: string;
      status?: { __typename?: 'Status'; id: number; color: string } | null;
      project: { __typename?: 'Project'; id: number; name: string; number?: number | null };
      maintainer?: {
        __typename?: 'User';
        id?: number | null;
        login?: string | null;
        image?: string | null;
      } | null;
      tags: {
        __typename?: 'TagList';
        count: number;
        rows: Array<{
          __typename?: 'Tag';
          id: number;
          name: string;
          color?: string | null;
          createdAt: string;
          updatedAt: string;
        }>;
      };
    } | null>;
  } | null;
};

export type GetPrivateChatsQueryVariables = Exact<{
  data: GetChatsInput;
}>;

export type GetPrivateChatsQuery = {
  __typename?: 'Query';
  getPrivateChats: {
    __typename?: 'GetAllUsers';
    count: number;
    rows: Array<{
      __typename: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
      role?: string | null;
      onlineStatus: boolean;
      chats?: Array<{
        __typename?: 'Chat';
        id: number;
        unreadMessagesCount: number;
        name?: string | null;
      }> | null;
    }>;
  };
};

export type GetProjectActivitiesQueryVariables = Exact<{ [key: string]: never }>;

export type GetProjectActivitiesQuery = {
  __typename?: 'Query';
  getProjectActivities: Array<{
    __typename: 'ProjectActivity';
    id: number;
    action: string;
    createdAt: string;
    actioner: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    };
    project: { __typename?: 'Project'; id: number; name: string };
    task?: {
      __typename?: 'Task';
      id: number;
      name: string;
      code?: string | null;
      maintainer?: { __typename?: 'User'; login?: string | null; image?: string | null } | null;
    } | null;
    subtask?: {
      __typename?: 'Subtask';
      id: number;
      name: string;
      code?: string | null;
      maintainer?: { __typename?: 'User'; login?: string | null; image?: string | null } | null;
    } | null;
  }>;
};

export type GetProjectsQueryVariables = Exact<{
  data: GetProjectsInput;
}>;

export type GetProjectsQuery = {
  __typename?: 'Query';
  getProjects: {
    __typename?: 'ProjectsList';
    count: number;
    rows: Array<{
      __typename: 'Project';
      id: number;
      name: string;
      number?: number | null;
      createdAt: string;
      updatedAt: string;
      poligon?: { __typename?: 'Poligon'; id: number } | null;
      author?: {
        __typename?: 'User';
        id?: number | null;
        image?: string | null;
        login?: string | null;
      } | null;
      tasks: {
        __typename: 'TasksList';
        count: number;
        rows: Array<{
          __typename?: 'Task';
          id: number;
          number: number;
          name: string;
          code?: string | null;
          startDate?: any | null;
          closeDate?: any | null;
          endDate?: any | null;
          realizationPerMonthAmount?: number | null;
          realizationPrice?: number | null;
          status?: { __typename?: 'Status'; id: number; color: string } | null;
          project: { __typename?: 'Project'; id: number; number?: number | null };
          author?: {
            __typename?: 'User';
            id?: number | null;
            image?: string | null;
            login?: string | null;
            role?: string | null;
          } | null;
          assignees: Array<{
            __typename?: 'User';
            id?: number | null;
            image?: string | null;
            login?: string | null;
            role?: string | null;
          } | null>;
          maintainer?: {
            __typename?: 'User';
            id?: number | null;
            login?: string | null;
            image?: string | null;
          } | null;
          tags: {
            __typename?: 'TagList';
            count: number;
            rows: Array<{
              __typename?: 'Tag';
              id: number;
              name: string;
              color?: string | null;
              createdAt: string;
              updatedAt: string;
            }>;
          };
        } | null>;
      };
    } | null>;
  };
};

export type GetSubtaskChatQueryVariables = Exact<{
  id: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
}>;

export type GetSubtaskChatQuery = {
  __typename?: 'Query';
  getSubtask: {
    __typename: 'Subtask';
    id: number;
    chat: {
      __typename?: 'Chat';
      id: number;
      messagesList: {
        __typename?: 'MessagesList';
        count: number;
        rows: Array<{
          __typename?: 'Message';
          isRead?: boolean | null;
          id: number;
          text: string;
          createdAt: any;
          user: {
            __typename?: 'User';
            login?: string | null;
            image?: string | null;
            id?: number | null;
            onlineStatus: boolean;
          };
        } | null>;
      };
    };
  };
};

export type GetSubtaskNotesQueryVariables = Exact<{
  id: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
}>;

export type GetSubtaskNotesQuery = {
  __typename?: 'Query';
  getSubtask: {
    __typename?: 'Subtask';
    id: number;
    notes: Array<{
      __typename: 'Note';
      id: number;
      createdAt: string;
      chatId?: number | null;
      taskId?: number | null;
      content?: string | null;
      owner?: {
        __typename?: 'User';
        id?: number | null;
        login?: string | null;
        image?: string | null;
        role?: string | null;
      } | null;
    } | null>;
  };
};

export type GetSubtaskQueryVariables = Exact<{
  id: Scalars['Int'];
  type?: InputMaybe<Scalars['String']>;
}>;

export type GetSubtaskQuery = {
  __typename?: 'Query';
  getSubtask: {
    __typename?: 'Subtask';
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    number: number;
    code?: string | null;
    endDate?: any | null;
    chat: { __typename?: 'Chat'; id: number };
    task: {
      __typename?: 'Task';
      id: number;
      number: number;
      code?: string | null;
      project: { __typename?: 'Project'; id: number; number?: number | null };
    };
    status?: { __typename?: 'Status'; id: number; color: string } | null;
    author?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null;
    maintainer?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null;
    tags: {
      __typename?: 'TagList';
      count: number;
      rows: Array<{
        __typename?: 'Tag';
        id: number;
        name: string;
        color?: string | null;
        createdAt: string;
        updatedAt: string;
      }>;
    };
  };
};

export type GetTagsQueryVariables = Exact<{
  data?: InputMaybe<GetTagsInput>;
}>;

export type GetTagsQuery = {
  __typename?: 'Query';
  getTags: {
    __typename?: 'TagList';
    rows: Array<{
      __typename?: 'Tag';
      id: number;
      name: string;
      color?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
  };
};

export type GetTaskAssigneesQueryVariables = Exact<{
  id: Scalars['Int'];
  assigneesLimit: Scalars['Int'];
}>;

export type GetTaskAssigneesQuery = {
  __typename?: 'Query';
  getTask: {
    __typename?: 'Task';
    id: number;
    assignees: Array<{
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null>;
    maintainer?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null;
  };
};

export type GetTaskChatQueryVariables = Exact<{
  id: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
}>;

export type GetTaskChatQuery = {
  __typename?: 'Query';
  getTaskChat: {
    __typename?: 'Task';
    id: number;
    chat: {
      __typename?: 'Chat';
      id: number;
      messagesList: {
        __typename?: 'MessagesList';
        count: number;
        rows: Array<{
          __typename?: 'Message';
          isRead?: boolean | null;
          id: number;
          text: string;
          createdAt: any;
          user: {
            __typename?: 'User';
            login?: string | null;
            image?: string | null;
            id?: number | null;
            onlineStatus: boolean;
          };
        } | null>;
      };
    };
  };
};

export type GetTaskNotesQueryVariables = Exact<{
  id: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
}>;

export type GetTaskNotesQuery = {
  __typename?: 'Query';
  getTask: {
    __typename?: 'Task';
    id: number;
    notes: Array<{
      __typename: 'Note';
      id: number;
      createdAt: string;
      chatId?: number | null;
      taskId?: number | null;
      content?: string | null;
      owner?: {
        __typename?: 'User';
        id?: number | null;
        login?: string | null;
        image?: string | null;
        role?: string | null;
      } | null;
    } | null>;
  };
};

export type GetTaskSubtaskQueryVariables = Exact<{
  id: Scalars['Int'];
  type?: InputMaybe<Scalars['String']>;
  subtaskStatusId?: InputMaybe<Scalars['Int']>;
}>;

export type GetTaskSubtaskQuery = {
  __typename?: 'Query';
  getTask: {
    __typename?: 'Task';
    id: number;
    subtasks: Array<{
      __typename?: 'Subtask';
      id: number;
      createdAt: string;
      updatedAt: string;
      name: string;
      number: number;
      code?: string | null;
      endDate?: any | null;
      task: {
        __typename?: 'Task';
        id: number;
        number: number;
        code?: string | null;
        project: { __typename?: 'Project'; id: number; number?: number | null };
      };
      status?: { __typename?: 'Status'; id: number; color: string } | null;
      author?: {
        __typename?: 'User';
        id?: number | null;
        login?: string | null;
        image?: string | null;
      } | null;
      maintainer?: {
        __typename?: 'User';
        id?: number | null;
        login?: string | null;
        image?: string | null;
      } | null;
      tags: {
        __typename?: 'TagList';
        count: number;
        rows: Array<{
          __typename?: 'Tag';
          id: number;
          name: string;
          color?: string | null;
          createdAt: string;
          updatedAt: string;
        }>;
      };
    } | null>;
  };
};

export type GetTaskQueryVariables = Exact<{
  id: Scalars['Int'];
  type?: InputMaybe<Scalars['String']>;
}>;

export type GetTaskQuery = {
  __typename?: 'Query';
  getTask: {
    __typename?: 'Task';
    id: number;
    code?: string | null;
    name: string;
    chat: { __typename?: 'Chat'; id: number };
    status?: { __typename?: 'Status'; id: number; color: string } | null;
    project: { __typename?: 'Project'; id: number; number?: number | null; name: string };
    maintainer?: {
      __typename?: 'User';
      id?: number | null;
      login?: string | null;
      image?: string | null;
    } | null;
    tags: {
      __typename?: 'TagList';
      count: number;
      rows: Array<{
        __typename?: 'Tag';
        id: number;
        name: string;
        color?: string | null;
        createdAt: string;
        updatedAt: string;
      }>;
    };
  };
};

export type LoginUserQueryVariables = Exact<{
  data: LoginUserInput;
}>;

export type LoginUserQuery = {
  __typename?: 'Query';
  loginUser: {
    __typename?: 'UserSignIn';
    token: string;
    user: { __typename?: 'User'; login?: string | null };
  };
};

export type MessagesReadBeforeSubscriptionVariables = Exact<{
  chatId: Scalars['Int'];
}>;

export type MessagesReadBeforeSubscription = {
  __typename?: 'Subscription';
  messagesReadBefore: {
    __typename?: 'ReadMessageResponse';
    message: {
      __typename?: 'Message';
      id: number;
      text: string;
      createdAt: any;
      user: {
        __typename?: 'User';
        login?: string | null;
        image?: string | null;
        id?: number | null;
        onlineStatus: boolean;
      };
    };
  };
};

export type NewActivitySubscriptionVariables = Exact<{ [key: string]: never }>;

export type NewActivitySubscription = { __typename?: 'Subscription'; newActivity: string };

export type NewMessageSubscriptionVariables = Exact<{
  chatId: Scalars['Int'];
}>;

export type NewMessageSubscription = {
  __typename?: 'Subscription';
  newMessage: {
    __typename?: 'Message';
    id: number;
    text: string;
    createdAt: any;
    user: {
      __typename?: 'User';
      login?: string | null;
      image?: string | null;
      id?: number | null;
      onlineStatus: boolean;
    };
  };
};

export const MessageFragmentFragmentDoc = gql`
  fragment messageFragment on Message {
    id
    text
    createdAt
    user {
      login
      image
      id
      onlineStatus
    }
  }
`;
export const ChatFragmentFragmentDoc = gql`
  fragment chatFragment on Chat {
    id
    messagesList(limit: $limit, offset: $offset) {
      count
      rows {
        isRead
        ...messageFragment
      }
    }
  }
  ${MessageFragmentFragmentDoc}
`;
export const FileFragmentFragmentDoc = gql`
  fragment fileFragment on File {
    __typename
    id
    fileName
    path
    size
    user {
      id
    }
  }
`;
export const NotesFragmentFragmentDoc = gql`
  fragment notesFragment on Note {
    __typename
    id
    createdAt
    chatId
    taskId
    content
    owner {
      id
      login
      image
      role
    }
  }
`;
export const PrivatChatsFragmentFragmentDoc = gql`
  fragment privatChatsFragment on User {
    __typename
    id
    login
    image
    role
    onlineStatus
    chats {
      id
      unreadMessagesCount
      name
    }
  }
`;
export const ProjectActivityFragmentDoc = gql`
  fragment projectActivity on ProjectActivity {
    __typename
    id
    action
    createdAt
    actioner {
      id
      login
      image
    }
    project {
      id
      name
    }
    task {
      id
      name
      code
      maintainer {
        login
        image
      }
    }
    subtask {
      id
      name
      code
      maintainer {
        login
        image
      }
    }
  }
`;
export const TasksFragmentFragmentDoc = gql`
  fragment tasksFragment on Task {
    id
    number
    name
    code
    startDate
    closeDate
    endDate
    status {
      id
      color
    }
    project {
      id
      number
    }
    author {
      id
      image
      login
      role
    }
    assignees {
      id
      image
      login
      role
    }
    maintainer {
      id
      login
      image
    }
    tags(limit: 100) {
      count
      rows {
        id
        name
        color
        createdAt
        updatedAt
      }
    }
    realizationPerMonthAmount
    realizationPrice
  }
`;
export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    __typename
    fullName
    login
    id
    role
    image
    theNote
    createdAt
    editDate
    lastConnect
    updatedAt
    lastEditerUser {
      login
    }
    creator {
      login
    }
    registrationLink
  }
`;
export const AdminEditUserDocument = gql`
  mutation adminEditUser($data: EditStatusUserInput!) {
    adminEditUser(data: $data) {
      __typename
      status
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type AdminEditUserMutationFn = Apollo.MutationFunction<
  AdminEditUserMutation,
  AdminEditUserMutationVariables
>;

/**
 * __useAdminEditUserMutation__
 *
 * To run a mutation, you first call `useAdminEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminEditUserMutation, { data, loading, error }] = useAdminEditUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAdminEditUserMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminEditUserMutation, AdminEditUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AdminEditUserMutation, AdminEditUserMutationVariables>(
    AdminEditUserDocument,
    options,
  );
}
export type AdminEditUserMutationHookResult = ReturnType<typeof useAdminEditUserMutation>;
export type AdminEditUserMutationResult = Apollo.MutationResult<AdminEditUserMutation>;
export type AdminEditUserMutationOptions = Apollo.BaseMutationOptions<
  AdminEditUserMutation,
  AdminEditUserMutationVariables
>;
export const AssignUserToTaskDocument = gql`
  mutation assignUserToTask($taskId: Int!, $userId: Int!) {
    assignUserToTask(taskId: $taskId, userId: $userId) {
      id
      assignees {
        id
        login
        image
      }
      maintainer {
        id
        login
        image
      }
    }
  }
`;
export type AssignUserToTaskMutationFn = Apollo.MutationFunction<
  AssignUserToTaskMutation,
  AssignUserToTaskMutationVariables
>;

/**
 * __useAssignUserToTaskMutation__
 *
 * To run a mutation, you first call `useAssignUserToTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignUserToTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignUserToTaskMutation, { data, loading, error }] = useAssignUserToTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAssignUserToTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AssignUserToTaskMutation,
    AssignUserToTaskMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AssignUserToTaskMutation, AssignUserToTaskMutationVariables>(
    AssignUserToTaskDocument,
    options,
  );
}
export type AssignUserToTaskMutationHookResult = ReturnType<typeof useAssignUserToTaskMutation>;
export type AssignUserToTaskMutationResult = Apollo.MutationResult<AssignUserToTaskMutation>;
export type AssignUserToTaskMutationOptions = Apollo.BaseMutationOptions<
  AssignUserToTaskMutation,
  AssignUserToTaskMutationVariables
>;
export const CreateNoteDocument = gql`
  mutation createNote($data: CreateNoteInput!) {
    createNote(data: $data) {
      id
      createdAt
      chatId
      taskId
      content
      ownerId
      owner {
        id
        login
        fullName
        image
        createdAt
        role
      }
    }
  }
`;
export type CreateNoteMutationFn = Apollo.MutationFunction<
  CreateNoteMutation,
  CreateNoteMutationVariables
>;

/**
 * __useCreateNoteMutation__
 *
 * To run a mutation, you first call `useCreateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoteMutation, { data, loading, error }] = useCreateNoteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateNoteMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateNoteMutation, CreateNoteMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateNoteMutation, CreateNoteMutationVariables>(
    CreateNoteDocument,
    options,
  );
}
export type CreateNoteMutationHookResult = ReturnType<typeof useCreateNoteMutation>;
export type CreateNoteMutationResult = Apollo.MutationResult<CreateNoteMutation>;
export type CreateNoteMutationOptions = Apollo.BaseMutationOptions<
  CreateNoteMutation,
  CreateNoteMutationVariables
>;
export const CreateProjectDocument = gql`
  mutation createProject($data: CreateProjectInput!) {
    createProject(data: $data) {
      __typename
      id
      name
      number
      createdAt
      updatedAt
      poligon {
        id
      }
      author {
        id
        image
        login
      }
      tasks(data: { sort: { type: DESC, field: activity }, isTaskStorage: false }) {
        __typename
        count
        rows {
          ...tasksFragment
        }
      }
    }
  }
  ${TasksFragmentFragmentDoc}
`;
export type CreateProjectMutationFn = Apollo.MutationFunction<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(
    CreateProjectDocument,
    options,
  );
}
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;
export const CreateSubtaskDocument = gql`
  mutation createSubtask($data: CreateSubtaskInput!) {
    createSubtask(data: $data) {
      id
      createdAt
      updatedAt
      name
      number
      code
      task {
        id
        number
        code
        project {
          id
          number
        }
      }
      status {
        id
        color
      }
      author {
        id
        login
        image
      }
      maintainer {
        id
        login
        image
      }
      endDate
      tags(limit: 100) {
        count
        rows {
          id
          name
          color
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export type CreateSubtaskMutationFn = Apollo.MutationFunction<
  CreateSubtaskMutation,
  CreateSubtaskMutationVariables
>;

/**
 * __useCreateSubtaskMutation__
 *
 * To run a mutation, you first call `useCreateSubtaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubtaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubtaskMutation, { data, loading, error }] = useCreateSubtaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSubtaskMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateSubtaskMutation, CreateSubtaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateSubtaskMutation, CreateSubtaskMutationVariables>(
    CreateSubtaskDocument,
    options,
  );
}
export type CreateSubtaskMutationHookResult = ReturnType<typeof useCreateSubtaskMutation>;
export type CreateSubtaskMutationResult = Apollo.MutationResult<CreateSubtaskMutation>;
export type CreateSubtaskMutationOptions = Apollo.BaseMutationOptions<
  CreateSubtaskMutation,
  CreateSubtaskMutationVariables
>;
export const CreateTaskDocument = gql`
  mutation createTask($data: CreateTaskInput!) {
    createTask(data: $data) {
      ...tasksFragment
    }
  }
  ${TasksFragmentFragmentDoc}
`;
export type CreateTaskMutationFn = Apollo.MutationFunction<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
    CreateTaskDocument,
    options,
  );
}
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;
export const DeassignUserFromTaskDocument = gql`
  mutation deassignUserFromTask($taskId: Int!, $userId: Int!) {
    deassignUserFromTask(taskId: $taskId, userId: $userId) {
      id
      assignees {
        id
        login
        image
      }
    }
  }
`;
export type DeassignUserFromTaskMutationFn = Apollo.MutationFunction<
  DeassignUserFromTaskMutation,
  DeassignUserFromTaskMutationVariables
>;

/**
 * __useDeassignUserFromTaskMutation__
 *
 * To run a mutation, you first call `useDeassignUserFromTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeassignUserFromTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deassignUserFromTaskMutation, { data, loading, error }] = useDeassignUserFromTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeassignUserFromTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeassignUserFromTaskMutation,
    DeassignUserFromTaskMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeassignUserFromTaskMutation, DeassignUserFromTaskMutationVariables>(
    DeassignUserFromTaskDocument,
    options,
  );
}
export type DeassignUserFromTaskMutationHookResult = ReturnType<
  typeof useDeassignUserFromTaskMutation
>;
export type DeassignUserFromTaskMutationResult =
  Apollo.MutationResult<DeassignUserFromTaskMutation>;
export type DeassignUserFromTaskMutationOptions = Apollo.BaseMutationOptions<
  DeassignUserFromTaskMutation,
  DeassignUserFromTaskMutationVariables
>;
export const DeleteFileDocument = gql`
  mutation deleteFile($id: Float!) {
    deleteFile(id: $id) {
      status
    }
  }
`;
export type DeleteFileMutationFn = Apollo.MutationFunction<
  DeleteFileMutation,
  DeleteFileMutationVariables
>;

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFileMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteFileMutation, DeleteFileMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(
    DeleteFileDocument,
    options,
  );
}
export type DeleteFileMutationHookResult = ReturnType<typeof useDeleteFileMutation>;
export type DeleteFileMutationResult = Apollo.MutationResult<DeleteFileMutation>;
export type DeleteFileMutationOptions = Apollo.BaseMutationOptions<
  DeleteFileMutation,
  DeleteFileMutationVariables
>;
export const DeleteMessageDocument = gql`
  mutation deleteMessage($messageId: ID!) {
    deleteMessage(messageId: $messageId)
  }
`;
export type DeleteMessageMutationFn = Apollo.MutationFunction<
  DeleteMessageMutation,
  DeleteMessageMutationVariables
>;

/**
 * __useDeleteMessageMutation__
 *
 * To run a mutation, you first call `useDeleteMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMessageMutation, { data, loading, error }] = useDeleteMessageMutation({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useDeleteMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteMessageMutation, DeleteMessageMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteMessageMutation, DeleteMessageMutationVariables>(
    DeleteMessageDocument,
    options,
  );
}
export type DeleteMessageMutationHookResult = ReturnType<typeof useDeleteMessageMutation>;
export type DeleteMessageMutationResult = Apollo.MutationResult<DeleteMessageMutation>;
export type DeleteMessageMutationOptions = Apollo.BaseMutationOptions<
  DeleteMessageMutation,
  DeleteMessageMutationVariables
>;
export const DeleteProjectDocument = gql`
  mutation deleteProject($id: Int!, $force: Boolean) {
    deleteProject(id: $id, force: $force)
  }
`;
export type DeleteProjectMutationFn = Apollo.MutationFunction<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>;

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      force: // value for 'force'
 *   },
 * });
 */
export function useDeleteProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProjectMutation, DeleteProjectMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(
    DeleteProjectDocument,
    options,
  );
}
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>;
export type DeleteProjectMutationResult = Apollo.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>;
export const DeleteSubtaskDocument = gql`
  mutation deleteSubtask($id: Int!) {
    deleteSubtask(id: $id)
  }
`;
export type DeleteSubtaskMutationFn = Apollo.MutationFunction<
  DeleteSubtaskMutation,
  DeleteSubtaskMutationVariables
>;

/**
 * __useDeleteSubtaskMutation__
 *
 * To run a mutation, you first call `useDeleteSubtaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubtaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubtaskMutation, { data, loading, error }] = useDeleteSubtaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSubtaskMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteSubtaskMutation, DeleteSubtaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteSubtaskMutation, DeleteSubtaskMutationVariables>(
    DeleteSubtaskDocument,
    options,
  );
}
export type DeleteSubtaskMutationHookResult = ReturnType<typeof useDeleteSubtaskMutation>;
export type DeleteSubtaskMutationResult = Apollo.MutationResult<DeleteSubtaskMutation>;
export type DeleteSubtaskMutationOptions = Apollo.BaseMutationOptions<
  DeleteSubtaskMutation,
  DeleteSubtaskMutationVariables
>;
export const DeleteTaskDocument = gql`
  mutation deleteTask($id: Int!) {
    deleteTask(id: $id)
  }
`;
export type DeleteTaskMutationFn = Apollo.MutationFunction<
  DeleteTaskMutation,
  DeleteTaskMutationVariables
>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(
    DeleteTaskDocument,
    options,
  );
}
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<
  DeleteTaskMutation,
  DeleteTaskMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options,
  );
}
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const EditUserDocument = gql`
  mutation editUser($data: EditUserInput!) {
    editUser(data: $data) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type EditUserMutationFn = Apollo.MutationFunction<
  EditUserMutation,
  EditUserMutationVariables
>;

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditUserMutation(
  baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
}
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<
  EditUserMutation,
  EditUserMutationVariables
>;
export const GetOrCreatePrivateChatDocument = gql`
  mutation getOrCreatePrivateChat($userId: Float!, $offset: Int, $limit: Int) {
    getOrCreatePrivateChat(userId: $userId) {
      ...chatFragment
    }
  }
  ${ChatFragmentFragmentDoc}
`;
export type GetOrCreatePrivateChatMutationFn = Apollo.MutationFunction<
  GetOrCreatePrivateChatMutation,
  GetOrCreatePrivateChatMutationVariables
>;

/**
 * __useGetOrCreatePrivateChatMutation__
 *
 * To run a mutation, you first call `useGetOrCreatePrivateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetOrCreatePrivateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getOrCreatePrivateChatMutation, { data, loading, error }] = useGetOrCreatePrivateChatMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetOrCreatePrivateChatMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GetOrCreatePrivateChatMutation,
    GetOrCreatePrivateChatMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    GetOrCreatePrivateChatMutation,
    GetOrCreatePrivateChatMutationVariables
  >(GetOrCreatePrivateChatDocument, options);
}
export type GetOrCreatePrivateChatMutationHookResult = ReturnType<
  typeof useGetOrCreatePrivateChatMutation
>;
export type GetOrCreatePrivateChatMutationResult =
  Apollo.MutationResult<GetOrCreatePrivateChatMutation>;
export type GetOrCreatePrivateChatMutationOptions = Apollo.BaseMutationOptions<
  GetOrCreatePrivateChatMutation,
  GetOrCreatePrivateChatMutationVariables
>;
export const GetPrivateChatNotesDocument = gql`
  mutation getPrivateChatNotes($id: Float!, $limit: Int, $offset: Int) {
    getOrCreatePrivateChat(userId: $id) {
      notes(limit: $limit, offset: $offset) {
        ...notesFragment
      }
    }
  }
  ${NotesFragmentFragmentDoc}
`;
export type GetPrivateChatNotesMutationFn = Apollo.MutationFunction<
  GetPrivateChatNotesMutation,
  GetPrivateChatNotesMutationVariables
>;

/**
 * __useGetPrivateChatNotesMutation__
 *
 * To run a mutation, you first call `useGetPrivateChatNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetPrivateChatNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getPrivateChatNotesMutation, { data, loading, error }] = useGetPrivateChatNotesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetPrivateChatNotesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GetPrivateChatNotesMutation,
    GetPrivateChatNotesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<GetPrivateChatNotesMutation, GetPrivateChatNotesMutationVariables>(
    GetPrivateChatNotesDocument,
    options,
  );
}
export type GetPrivateChatNotesMutationHookResult = ReturnType<
  typeof useGetPrivateChatNotesMutation
>;
export type GetPrivateChatNotesMutationResult = Apollo.MutationResult<GetPrivateChatNotesMutation>;
export type GetPrivateChatNotesMutationOptions = Apollo.BaseMutationOptions<
  GetPrivateChatNotesMutation,
  GetPrivateChatNotesMutationVariables
>;
export const LoadFileDocument = gql`
  mutation loadFile($data: LoadFileInput!) {
    loadFile(data: $data) {
      ...fileFragment
    }
  }
  ${FileFragmentFragmentDoc}
`;
export type LoadFileMutationFn = Apollo.MutationFunction<
  LoadFileMutation,
  LoadFileMutationVariables
>;

/**
 * __useLoadFileMutation__
 *
 * To run a mutation, you first call `useLoadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loadFileMutation, { data, loading, error }] = useLoadFileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoadFileMutation(
  baseOptions?: Apollo.MutationHookOptions<LoadFileMutation, LoadFileMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoadFileMutation, LoadFileMutationVariables>(LoadFileDocument, options);
}
export type LoadFileMutationHookResult = ReturnType<typeof useLoadFileMutation>;
export type LoadFileMutationResult = Apollo.MutationResult<LoadFileMutation>;
export type LoadFileMutationOptions = Apollo.BaseMutationOptions<
  LoadFileMutation,
  LoadFileMutationVariables
>;
export const LogoutDocument = gql`
  mutation logout($data: LogoutUserInput!) {
    logout(data: $data)
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const ReadMessagesBeforeDocument = gql`
  mutation readMessagesBefore($messageId: Int!) {
    readMessagesBefore(messageId: $messageId)
  }
`;
export type ReadMessagesBeforeMutationFn = Apollo.MutationFunction<
  ReadMessagesBeforeMutation,
  ReadMessagesBeforeMutationVariables
>;

/**
 * __useReadMessagesBeforeMutation__
 *
 * To run a mutation, you first call `useReadMessagesBeforeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadMessagesBeforeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readMessagesBeforeMutation, { data, loading, error }] = useReadMessagesBeforeMutation({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useReadMessagesBeforeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ReadMessagesBeforeMutation,
    ReadMessagesBeforeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ReadMessagesBeforeMutation, ReadMessagesBeforeMutationVariables>(
    ReadMessagesBeforeDocument,
    options,
  );
}
export type ReadMessagesBeforeMutationHookResult = ReturnType<typeof useReadMessagesBeforeMutation>;
export type ReadMessagesBeforeMutationResult = Apollo.MutationResult<ReadMessagesBeforeMutation>;
export type ReadMessagesBeforeMutationOptions = Apollo.BaseMutationOptions<
  ReadMessagesBeforeMutation,
  ReadMessagesBeforeMutationVariables
>;
export const ReadProjectActivitiesDocument = gql`
  mutation readProjectActivities($taskId: Int, $subtaskId: Int) {
    readProjectActivities(taskId: $taskId, subtaskId: $subtaskId)
  }
`;
export type ReadProjectActivitiesMutationFn = Apollo.MutationFunction<
  ReadProjectActivitiesMutation,
  ReadProjectActivitiesMutationVariables
>;

/**
 * __useReadProjectActivitiesMutation__
 *
 * To run a mutation, you first call `useReadProjectActivitiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadProjectActivitiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readProjectActivitiesMutation, { data, loading, error }] = useReadProjectActivitiesMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      subtaskId: // value for 'subtaskId'
 *   },
 * });
 */
export function useReadProjectActivitiesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ReadProjectActivitiesMutation,
    ReadProjectActivitiesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ReadProjectActivitiesMutation, ReadProjectActivitiesMutationVariables>(
    ReadProjectActivitiesDocument,
    options,
  );
}
export type ReadProjectActivitiesMutationHookResult = ReturnType<
  typeof useReadProjectActivitiesMutation
>;
export type ReadProjectActivitiesMutationResult =
  Apollo.MutationResult<ReadProjectActivitiesMutation>;
export type ReadProjectActivitiesMutationOptions = Apollo.BaseMutationOptions<
  ReadProjectActivitiesMutation,
  ReadProjectActivitiesMutationVariables
>;
export const RefreshPushTokenDocument = gql`
  mutation refreshPushToken($data: PushTokenInput!) {
    refreshPushToken(data: $data) {
      status
    }
  }
`;
export type RefreshPushTokenMutationFn = Apollo.MutationFunction<
  RefreshPushTokenMutation,
  RefreshPushTokenMutationVariables
>;

/**
 * __useRefreshPushTokenMutation__
 *
 * To run a mutation, you first call `useRefreshPushTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshPushTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshPushTokenMutation, { data, loading, error }] = useRefreshPushTokenMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRefreshPushTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshPushTokenMutation,
    RefreshPushTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RefreshPushTokenMutation, RefreshPushTokenMutationVariables>(
    RefreshPushTokenDocument,
    options,
  );
}
export type RefreshPushTokenMutationHookResult = ReturnType<typeof useRefreshPushTokenMutation>;
export type RefreshPushTokenMutationResult = Apollo.MutationResult<RefreshPushTokenMutation>;
export type RefreshPushTokenMutationOptions = Apollo.BaseMutationOptions<
  RefreshPushTokenMutation,
  RefreshPushTokenMutationVariables
>;
export const RemoveNoteDocument = gql`
  mutation removeNote($id: Int!) {
    removeNote(id: $id)
  }
`;
export type RemoveNoteMutationFn = Apollo.MutationFunction<
  RemoveNoteMutation,
  RemoveNoteMutationVariables
>;

/**
 * __useRemoveNoteMutation__
 *
 * To run a mutation, you first call `useRemoveNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeNoteMutation, { data, loading, error }] = useRemoveNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveNoteMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveNoteMutation, RemoveNoteMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveNoteMutation, RemoveNoteMutationVariables>(
    RemoveNoteDocument,
    options,
  );
}
export type RemoveNoteMutationHookResult = ReturnType<typeof useRemoveNoteMutation>;
export type RemoveNoteMutationResult = Apollo.MutationResult<RemoveNoteMutation>;
export type RemoveNoteMutationOptions = Apollo.BaseMutationOptions<
  RemoveNoteMutation,
  RemoveNoteMutationVariables
>;
export const SendMessageDocument = gql`
  mutation sendMessage($data: CreateMessageInput!) {
    sendMessage(data: $data) {
      id
      text
      isRead
      createdAt
      user {
        login
        image
      }
    }
  }
`;
export type SendMessageMutationFn = Apollo.MutationFunction<
  SendMessageMutation,
  SendMessageMutationVariables
>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(
    SendMessageDocument,
    options,
  );
}
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<
  SendMessageMutation,
  SendMessageMutationVariables
>;
export const UpdateProjectDocument = gql`
  mutation updateProject($id: Int!, $data: UpdateProjectInput!) {
    updateProject(id: $id, data: $data) {
      id
      createdAt
      updatedAt
      name
      number
    }
  }
`;
export type UpdateProjectMutationFn = Apollo.MutationFunction<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProjectMutation, UpdateProjectMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(
    UpdateProjectDocument,
    options,
  );
}
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = Apollo.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>;
export const UpdateSubtaskDocument = gql`
  mutation updateSubtask($data: UpdateSubtaskInput!, $id: Int!) {
    updateSubtask(data: $data, id: $id) {
      id
      name
      status {
        id
        color
      }
      author {
        id
        login
      }
      chat {
        id
      }
      maintainer {
        id
        login
        image
      }
      task {
        id
      }
      tags {
        count
        rows {
          id
          name
          color
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export type UpdateSubtaskMutationFn = Apollo.MutationFunction<
  UpdateSubtaskMutation,
  UpdateSubtaskMutationVariables
>;

/**
 * __useUpdateSubtaskMutation__
 *
 * To run a mutation, you first call `useUpdateSubtaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubtaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubtaskMutation, { data, loading, error }] = useUpdateSubtaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateSubtaskMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateSubtaskMutation, UpdateSubtaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateSubtaskMutation, UpdateSubtaskMutationVariables>(
    UpdateSubtaskDocument,
    options,
  );
}
export type UpdateSubtaskMutationHookResult = ReturnType<typeof useUpdateSubtaskMutation>;
export type UpdateSubtaskMutationResult = Apollo.MutationResult<UpdateSubtaskMutation>;
export type UpdateSubtaskMutationOptions = Apollo.BaseMutationOptions<
  UpdateSubtaskMutation,
  UpdateSubtaskMutationVariables
>;
export const UpdateTaskDocument = gql`
  mutation updateTask($data: UpdateTaskInput!, $id: Int!) {
    updateTask(data: $data, id: $id) {
      id
      chat {
        id
      }
      name
      status {
        id
        color
      }
      project {
        id
        number
        name
      }
      maintainer {
        id
        login
        image
      }
      tags {
        count
        rows {
          id
          name
          color
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
    UpdateTaskDocument,
    options,
  );
}
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
export const GetAllFilesDocument = gql`
  query getAllFiles($data: GetFileInput!) {
    getAllFiles(data: $data) {
      __typename
      rows {
        ...fileFragment
      }
      count
    }
  }
  ${FileFragmentFragmentDoc}
`;

/**
 * __useGetAllFilesQuery__
 *
 * To run a query within a React component, call `useGetAllFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFilesQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetAllFilesQuery(
  baseOptions: Apollo.QueryHookOptions<GetAllFilesQuery, GetAllFilesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllFilesQuery, GetAllFilesQueryVariables>(GetAllFilesDocument, options);
}
export function useGetAllFilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllFilesQuery, GetAllFilesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllFilesQuery, GetAllFilesQueryVariables>(
    GetAllFilesDocument,
    options,
  );
}
export type GetAllFilesQueryHookResult = ReturnType<typeof useGetAllFilesQuery>;
export type GetAllFilesLazyQueryHookResult = ReturnType<typeof useGetAllFilesLazyQuery>;
export type GetAllFilesQueryResult = Apollo.QueryResult<
  GetAllFilesQuery,
  GetAllFilesQueryVariables
>;
export const GetTasksSubtasksDocument = gql`
  query getTasksSubtasks($data: GetTasksInput!) {
    getTasksSubtasks(data: $data) {
      count
      rows {
        id
        createdAt
        updatedAt
        name
        number
        code
        startDate
        closeDate
        endDate
        parentId
        project {
          id
          name
          number
        }
        tags {
          rows {
            id
            name
            color
            createdAt
            updatedAt
          }
        }
        status {
          id
          color
        }
        subtasks(data: { limit: 100 }) {
          id
          createdAt
          updatedAt
          name
          number
          code
          startDate
          closeDate
          endDate
          status {
            id
            color
          }
          maintainer {
            id
            login
            image
          }
          task {
            id
            number
            code
            project {
              id
              name
              number
            }
          }
        }
        maintainer {
          id
          login
          image
        }
        realizationPerMonthAmount
        realizationPrice
      }
    }
  }
`;

/**
 * __useGetTasksSubtasksQuery__
 *
 * To run a query within a React component, call `useGetTasksSubtasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksSubtasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksSubtasksQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetTasksSubtasksQuery(
  baseOptions: Apollo.QueryHookOptions<GetTasksSubtasksQuery, GetTasksSubtasksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTasksSubtasksQuery, GetTasksSubtasksQueryVariables>(
    GetTasksSubtasksDocument,
    options,
  );
}
export function useGetTasksSubtasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTasksSubtasksQuery, GetTasksSubtasksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTasksSubtasksQuery, GetTasksSubtasksQueryVariables>(
    GetTasksSubtasksDocument,
    options,
  );
}
export type GetTasksSubtasksQueryHookResult = ReturnType<typeof useGetTasksSubtasksQuery>;
export type GetTasksSubtasksLazyQueryHookResult = ReturnType<typeof useGetTasksSubtasksLazyQuery>;
export type GetTasksSubtasksQueryResult = Apollo.QueryResult<
  GetTasksSubtasksQuery,
  GetTasksSubtasksQueryVariables
>;
export const GetAllUsersDocument = gql`
  query getAllUsers($input: GetUsersInput!) {
    getAllUsers(input: $input) {
      count
      rows {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
}
export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options,
  );
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<
  GetAllUsersQuery,
  GetAllUsersQueryVariables
>;
export const GetCurrentUserDocument = gql`
  query getCurrentUser {
    getCurrentUser {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  );
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  );
}
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
>;
export const GetMyProjectsRoleMaintainerDocument = gql`
  query getMyProjectsRoleMaintainer($data: GetMyProjectsInput!, $tagsId: [ID!]) {
    getMyProjectsRoleMaintainer(data: $data) {
      rows {
        id
        name
        number
        myTaskSubTaskList(limit: 100, tagsId: $tagsId) {
          rows {
            id
            createdAt
            name
            code
            status {
              id
            }
            parentId
            maintainer {
              id
              login
              image
            }
            maintainerComment
            tags {
              count
              rows {
                id
                name
                color
                createdAt
                updatedAt
              }
            }
            project {
              id
              number
              name
            }
            realizationPrice
            realizationPerMonthAmount
          }
          count
        }
      }
      count
    }
  }
`;

/**
 * __useGetMyProjectsRoleMaintainerQuery__
 *
 * To run a query within a React component, call `useGetMyProjectsRoleMaintainerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyProjectsRoleMaintainerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyProjectsRoleMaintainerQuery({
 *   variables: {
 *      data: // value for 'data'
 *      tagsId: // value for 'tagsId'
 *   },
 * });
 */
export function useGetMyProjectsRoleMaintainerQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMyProjectsRoleMaintainerQuery,
    GetMyProjectsRoleMaintainerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetMyProjectsRoleMaintainerQuery,
    GetMyProjectsRoleMaintainerQueryVariables
  >(GetMyProjectsRoleMaintainerDocument, options);
}
export function useGetMyProjectsRoleMaintainerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyProjectsRoleMaintainerQuery,
    GetMyProjectsRoleMaintainerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMyProjectsRoleMaintainerQuery,
    GetMyProjectsRoleMaintainerQueryVariables
  >(GetMyProjectsRoleMaintainerDocument, options);
}
export type GetMyProjectsRoleMaintainerQueryHookResult = ReturnType<
  typeof useGetMyProjectsRoleMaintainerQuery
>;
export type GetMyProjectsRoleMaintainerLazyQueryHookResult = ReturnType<
  typeof useGetMyProjectsRoleMaintainerLazyQuery
>;
export type GetMyProjectsRoleMaintainerQueryResult = Apollo.QueryResult<
  GetMyProjectsRoleMaintainerQuery,
  GetMyProjectsRoleMaintainerQueryVariables
>;
export const GetMyTasksSubtasksDocument = gql`
  query getMyTasksSubtasks($limit: Int, $offset: Int, $tagsId: [ID!]) {
    getCurrentUser {
      id
      taskCount(tagsId: $tagsId)
      myTasksSubtasks(limit: $limit, offset: $offset, tagsId: $tagsId) {
        id
        parentId
        name
        code
        status {
          id
          color
        }
        project {
          id
          name
          number
        }
        createdAt
        updatedAt
        maintainer {
          id
          login
          image
        }
        tags {
          count
          rows {
            id
            name
            color
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;

/**
 * __useGetMyTasksSubtasksQuery__
 *
 * To run a query within a React component, call `useGetMyTasksSubtasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyTasksSubtasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyTasksSubtasksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      tagsId: // value for 'tagsId'
 *   },
 * });
 */
export function useGetMyTasksSubtasksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMyTasksSubtasksQuery, GetMyTasksSubtasksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyTasksSubtasksQuery, GetMyTasksSubtasksQueryVariables>(
    GetMyTasksSubtasksDocument,
    options,
  );
}
export function useGetMyTasksSubtasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyTasksSubtasksQuery,
    GetMyTasksSubtasksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyTasksSubtasksQuery, GetMyTasksSubtasksQueryVariables>(
    GetMyTasksSubtasksDocument,
    options,
  );
}
export type GetMyTasksSubtasksQueryHookResult = ReturnType<typeof useGetMyTasksSubtasksQuery>;
export type GetMyTasksSubtasksLazyQueryHookResult = ReturnType<
  typeof useGetMyTasksSubtasksLazyQuery
>;
export type GetMyTasksSubtasksQueryResult = Apollo.QueryResult<
  GetMyTasksSubtasksQuery,
  GetMyTasksSubtasksQueryVariables
>;
export const GetPrivateChatsDocument = gql`
  query getPrivateChats($data: GetChatsInput!) {
    getPrivateChats(data: $data) {
      rows {
        ...privatChatsFragment
      }
      count
    }
  }
  ${PrivatChatsFragmentFragmentDoc}
`;

/**
 * __useGetPrivateChatsQuery__
 *
 * To run a query within a React component, call `useGetPrivateChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrivateChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrivateChatsQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetPrivateChatsQuery(
  baseOptions: Apollo.QueryHookOptions<GetPrivateChatsQuery, GetPrivateChatsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPrivateChatsQuery, GetPrivateChatsQueryVariables>(
    GetPrivateChatsDocument,
    options,
  );
}
export function useGetPrivateChatsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPrivateChatsQuery, GetPrivateChatsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPrivateChatsQuery, GetPrivateChatsQueryVariables>(
    GetPrivateChatsDocument,
    options,
  );
}
export type GetPrivateChatsQueryHookResult = ReturnType<typeof useGetPrivateChatsQuery>;
export type GetPrivateChatsLazyQueryHookResult = ReturnType<typeof useGetPrivateChatsLazyQuery>;
export type GetPrivateChatsQueryResult = Apollo.QueryResult<
  GetPrivateChatsQuery,
  GetPrivateChatsQueryVariables
>;
export const GetProjectActivitiesDocument = gql`
  query getProjectActivities {
    getProjectActivities {
      ...projectActivity
    }
  }
  ${ProjectActivityFragmentDoc}
`;

/**
 * __useGetProjectActivitiesQuery__
 *
 * To run a query within a React component, call `useGetProjectActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectActivitiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProjectActivitiesQuery,
    GetProjectActivitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProjectActivitiesQuery, GetProjectActivitiesQueryVariables>(
    GetProjectActivitiesDocument,
    options,
  );
}
export function useGetProjectActivitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectActivitiesQuery,
    GetProjectActivitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProjectActivitiesQuery, GetProjectActivitiesQueryVariables>(
    GetProjectActivitiesDocument,
    options,
  );
}
export type GetProjectActivitiesQueryHookResult = ReturnType<typeof useGetProjectActivitiesQuery>;
export type GetProjectActivitiesLazyQueryHookResult = ReturnType<
  typeof useGetProjectActivitiesLazyQuery
>;
export type GetProjectActivitiesQueryResult = Apollo.QueryResult<
  GetProjectActivitiesQuery,
  GetProjectActivitiesQueryVariables
>;
export const GetProjectsDocument = gql`
  query getProjects($data: GetProjectsInput!) {
    getProjects(data: $data) {
      rows {
        __typename
        id
        name
        number
        createdAt
        updatedAt
        poligon {
          id
        }
        author {
          id
          image
          login
        }
        tasks(data: { isTaskStorage: false, limit: 100 }) {
          __typename
          count
          rows {
            ...tasksFragment
          }
        }
      }
      count
    }
  }
  ${TasksFragmentFragmentDoc}
`;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetProjectsQuery(
  baseOptions: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
}
export function useGetProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(
    GetProjectsDocument,
    options,
  );
}
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<
  GetProjectsQuery,
  GetProjectsQueryVariables
>;
export const GetSubtaskChatDocument = gql`
  query getSubtaskChat($id: Int!, $offset: Int, $limit: Int, $type: String) {
    getSubtask(id: $id, type: $type) {
      id
      __typename
      chat {
        ...chatFragment
      }
    }
  }
  ${ChatFragmentFragmentDoc}
`;

/**
 * __useGetSubtaskChatQuery__
 *
 * To run a query within a React component, call `useGetSubtaskChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubtaskChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubtaskChatQuery({
 *   variables: {
 *      id: // value for 'id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetSubtaskChatQuery(
  baseOptions: Apollo.QueryHookOptions<GetSubtaskChatQuery, GetSubtaskChatQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSubtaskChatQuery, GetSubtaskChatQueryVariables>(
    GetSubtaskChatDocument,
    options,
  );
}
export function useGetSubtaskChatLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSubtaskChatQuery, GetSubtaskChatQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSubtaskChatQuery, GetSubtaskChatQueryVariables>(
    GetSubtaskChatDocument,
    options,
  );
}
export type GetSubtaskChatQueryHookResult = ReturnType<typeof useGetSubtaskChatQuery>;
export type GetSubtaskChatLazyQueryHookResult = ReturnType<typeof useGetSubtaskChatLazyQuery>;
export type GetSubtaskChatQueryResult = Apollo.QueryResult<
  GetSubtaskChatQuery,
  GetSubtaskChatQueryVariables
>;
export const GetSubtaskNotesDocument = gql`
  query getSubtaskNotes($id: Int!, $offset: Int, $limit: Int, $type: String) {
    getSubtask(id: $id, type: $type) {
      id
      notes(limit: $limit, offset: $offset) {
        ...notesFragment
      }
    }
  }
  ${NotesFragmentFragmentDoc}
`;

/**
 * __useGetSubtaskNotesQuery__
 *
 * To run a query within a React component, call `useGetSubtaskNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubtaskNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubtaskNotesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetSubtaskNotesQuery(
  baseOptions: Apollo.QueryHookOptions<GetSubtaskNotesQuery, GetSubtaskNotesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSubtaskNotesQuery, GetSubtaskNotesQueryVariables>(
    GetSubtaskNotesDocument,
    options,
  );
}
export function useGetSubtaskNotesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSubtaskNotesQuery, GetSubtaskNotesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSubtaskNotesQuery, GetSubtaskNotesQueryVariables>(
    GetSubtaskNotesDocument,
    options,
  );
}
export type GetSubtaskNotesQueryHookResult = ReturnType<typeof useGetSubtaskNotesQuery>;
export type GetSubtaskNotesLazyQueryHookResult = ReturnType<typeof useGetSubtaskNotesLazyQuery>;
export type GetSubtaskNotesQueryResult = Apollo.QueryResult<
  GetSubtaskNotesQuery,
  GetSubtaskNotesQueryVariables
>;
export const GetSubtaskDocument = gql`
  query getSubtask($id: Int!, $type: String) {
    getSubtask(id: $id, type: $type) {
      id
      createdAt
      updatedAt
      name
      number
      code
      chat {
        id
      }
      task {
        id
        number
        code
        project {
          id
          number
        }
      }
      status {
        id
        color
      }
      code
      author {
        id
        login
        image
      }
      maintainer {
        id
        login
        image
      }
      endDate
      tags(limit: 100) {
        count
        rows {
          id
          name
          color
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * __useGetSubtaskQuery__
 *
 * To run a query within a React component, call `useGetSubtaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubtaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubtaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetSubtaskQuery(
  baseOptions: Apollo.QueryHookOptions<GetSubtaskQuery, GetSubtaskQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSubtaskQuery, GetSubtaskQueryVariables>(GetSubtaskDocument, options);
}
export function useGetSubtaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSubtaskQuery, GetSubtaskQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSubtaskQuery, GetSubtaskQueryVariables>(
    GetSubtaskDocument,
    options,
  );
}
export type GetSubtaskQueryHookResult = ReturnType<typeof useGetSubtaskQuery>;
export type GetSubtaskLazyQueryHookResult = ReturnType<typeof useGetSubtaskLazyQuery>;
export type GetSubtaskQueryResult = Apollo.QueryResult<GetSubtaskQuery, GetSubtaskQueryVariables>;
export const GetTagsDocument = gql`
  query getTags($data: GetTagsInput) {
    getTags(data: $data) {
      rows {
        id
        name
        color
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useGetTagsQuery__
 *
 * To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetTagsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
}
export function useGetTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
}
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<GetTagsQuery, GetTagsQueryVariables>;
export const GetTaskAssigneesDocument = gql`
  query getTaskAssignees($id: Int!, $assigneesLimit: Int!) {
    getTask(id: $id) {
      id
      assignees(limit: $assigneesLimit) {
        id
        login
        image
      }
      maintainer {
        id
        login
        image
      }
    }
  }
`;

/**
 * __useGetTaskAssigneesQuery__
 *
 * To run a query within a React component, call `useGetTaskAssigneesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskAssigneesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskAssigneesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      assigneesLimit: // value for 'assigneesLimit'
 *   },
 * });
 */
export function useGetTaskAssigneesQuery(
  baseOptions: Apollo.QueryHookOptions<GetTaskAssigneesQuery, GetTaskAssigneesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTaskAssigneesQuery, GetTaskAssigneesQueryVariables>(
    GetTaskAssigneesDocument,
    options,
  );
}
export function useGetTaskAssigneesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTaskAssigneesQuery, GetTaskAssigneesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTaskAssigneesQuery, GetTaskAssigneesQueryVariables>(
    GetTaskAssigneesDocument,
    options,
  );
}
export type GetTaskAssigneesQueryHookResult = ReturnType<typeof useGetTaskAssigneesQuery>;
export type GetTaskAssigneesLazyQueryHookResult = ReturnType<typeof useGetTaskAssigneesLazyQuery>;
export type GetTaskAssigneesQueryResult = Apollo.QueryResult<
  GetTaskAssigneesQuery,
  GetTaskAssigneesQueryVariables
>;
export const GetTaskChatDocument = gql`
  query getTaskChat($id: Int!, $offset: Int, $limit: Int, $type: String) {
    getTaskChat: getTask(id: $id, type: $type) {
      id
      chat {
        messagesList(limit: $limit, offset: $offset) {
          count
          rows {
            isRead
            id
            text
            createdAt
            user {
              login
              image
              id
              onlineStatus
            }
          }
        }
        id
      }
    }
  }
`;

/**
 * __useGetTaskChatQuery__
 *
 * To run a query within a React component, call `useGetTaskChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskChatQuery({
 *   variables: {
 *      id: // value for 'id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetTaskChatQuery(
  baseOptions: Apollo.QueryHookOptions<GetTaskChatQuery, GetTaskChatQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTaskChatQuery, GetTaskChatQueryVariables>(GetTaskChatDocument, options);
}
export function useGetTaskChatLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTaskChatQuery, GetTaskChatQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTaskChatQuery, GetTaskChatQueryVariables>(
    GetTaskChatDocument,
    options,
  );
}
export type GetTaskChatQueryHookResult = ReturnType<typeof useGetTaskChatQuery>;
export type GetTaskChatLazyQueryHookResult = ReturnType<typeof useGetTaskChatLazyQuery>;
export type GetTaskChatQueryResult = Apollo.QueryResult<
  GetTaskChatQuery,
  GetTaskChatQueryVariables
>;
export const GetTaskNotesDocument = gql`
  query getTaskNotes($id: Int!, $offset: Int, $limit: Int, $type: String) {
    getTask(id: $id, type: $type) {
      id
      notes(limit: $limit, offset: $offset) {
        ...notesFragment
      }
    }
  }
  ${NotesFragmentFragmentDoc}
`;

/**
 * __useGetTaskNotesQuery__
 *
 * To run a query within a React component, call `useGetTaskNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskNotesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetTaskNotesQuery(
  baseOptions: Apollo.QueryHookOptions<GetTaskNotesQuery, GetTaskNotesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTaskNotesQuery, GetTaskNotesQueryVariables>(
    GetTaskNotesDocument,
    options,
  );
}
export function useGetTaskNotesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTaskNotesQuery, GetTaskNotesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTaskNotesQuery, GetTaskNotesQueryVariables>(
    GetTaskNotesDocument,
    options,
  );
}
export type GetTaskNotesQueryHookResult = ReturnType<typeof useGetTaskNotesQuery>;
export type GetTaskNotesLazyQueryHookResult = ReturnType<typeof useGetTaskNotesLazyQuery>;
export type GetTaskNotesQueryResult = Apollo.QueryResult<
  GetTaskNotesQuery,
  GetTaskNotesQueryVariables
>;
export const GetTaskSubtaskDocument = gql`
  query getTaskSubtask($id: Int!, $type: String, $subtaskStatusId: Int) {
    getTask(id: $id, type: $type) {
      id
      subtasks(
        data: { limit: 100, sort: { type: ASC, field: status }, statusId: $subtaskStatusId }
      ) {
        id
        createdAt
        updatedAt
        name
        number
        code
        task {
          id
          number
          code
          project {
            id
            number
          }
        }
        status {
          id
          color
        }
        author {
          id
          login
          image
        }
        maintainer {
          id
          login
          image
        }
        endDate
        tags(limit: 100) {
          count
          rows {
            id
            name
            color
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;

/**
 * __useGetTaskSubtaskQuery__
 *
 * To run a query within a React component, call `useGetTaskSubtaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskSubtaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskSubtaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *      subtaskStatusId: // value for 'subtaskStatusId'
 *   },
 * });
 */
export function useGetTaskSubtaskQuery(
  baseOptions: Apollo.QueryHookOptions<GetTaskSubtaskQuery, GetTaskSubtaskQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTaskSubtaskQuery, GetTaskSubtaskQueryVariables>(
    GetTaskSubtaskDocument,
    options,
  );
}
export function useGetTaskSubtaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTaskSubtaskQuery, GetTaskSubtaskQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTaskSubtaskQuery, GetTaskSubtaskQueryVariables>(
    GetTaskSubtaskDocument,
    options,
  );
}
export type GetTaskSubtaskQueryHookResult = ReturnType<typeof useGetTaskSubtaskQuery>;
export type GetTaskSubtaskLazyQueryHookResult = ReturnType<typeof useGetTaskSubtaskLazyQuery>;
export type GetTaskSubtaskQueryResult = Apollo.QueryResult<
  GetTaskSubtaskQuery,
  GetTaskSubtaskQueryVariables
>;
export const GetTaskDocument = gql`
  query getTask($id: Int!, $type: String) {
    getTask(id: $id, type: $type) {
      id
      chat {
        id
      }
      code
      name
      status {
        id
        color
      }
      project {
        id
        number
        name
      }
      maintainer {
        id
        login
        image
      }
      tags {
        count
        rows {
          id
          name
          color
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * __useGetTaskQuery__
 *
 * To run a query within a React component, call `useGetTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetTaskQuery(
  baseOptions: Apollo.QueryHookOptions<GetTaskQuery, GetTaskQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
}
export function useGetTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTaskQuery, GetTaskQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
}
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskQueryResult = Apollo.QueryResult<GetTaskQuery, GetTaskQueryVariables>;
export const LoginUserDocument = gql`
  query loginUser($data: LoginUserInput!) {
    loginUser(data: $data) {
      user {
        login
      }
      token
    }
  }
`;

/**
 * __useLoginUserQuery__
 *
 * To run a query within a React component, call `useLoginUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginUserQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserQuery(
  baseOptions: Apollo.QueryHookOptions<LoginUserQuery, LoginUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoginUserQuery, LoginUserQueryVariables>(LoginUserDocument, options);
}
export function useLoginUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LoginUserQuery, LoginUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoginUserQuery, LoginUserQueryVariables>(LoginUserDocument, options);
}
export type LoginUserQueryHookResult = ReturnType<typeof useLoginUserQuery>;
export type LoginUserLazyQueryHookResult = ReturnType<typeof useLoginUserLazyQuery>;
export type LoginUserQueryResult = Apollo.QueryResult<LoginUserQuery, LoginUserQueryVariables>;
export const MessagesReadBeforeDocument = gql`
  subscription messagesReadBefore($chatId: Int!) {
    messagesReadBefore(chatId: $chatId) {
      message {
        ...messageFragment
      }
    }
  }
  ${MessageFragmentFragmentDoc}
`;

/**
 * __useMessagesReadBeforeSubscription__
 *
 * To run a query within a React component, call `useMessagesReadBeforeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessagesReadBeforeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesReadBeforeSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useMessagesReadBeforeSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    MessagesReadBeforeSubscription,
    MessagesReadBeforeSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    MessagesReadBeforeSubscription,
    MessagesReadBeforeSubscriptionVariables
  >(MessagesReadBeforeDocument, options);
}
export type MessagesReadBeforeSubscriptionHookResult = ReturnType<
  typeof useMessagesReadBeforeSubscription
>;
export type MessagesReadBeforeSubscriptionResult =
  Apollo.SubscriptionResult<MessagesReadBeforeSubscription>;
export const NewActivityDocument = gql`
  subscription newActivity {
    newActivity
  }
`;

/**
 * __useNewActivitySubscription__
 *
 * To run a query within a React component, call `useNewActivitySubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewActivitySubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewActivitySubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewActivitySubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    NewActivitySubscription,
    NewActivitySubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<NewActivitySubscription, NewActivitySubscriptionVariables>(
    NewActivityDocument,
    options,
  );
}
export type NewActivitySubscriptionHookResult = ReturnType<typeof useNewActivitySubscription>;
export type NewActivitySubscriptionResult = Apollo.SubscriptionResult<NewActivitySubscription>;
export const NewMessageDocument = gql`
  subscription newMessage($chatId: Int!) {
    newMessage(chatId: $chatId) {
      ...messageFragment
    }
  }
  ${MessageFragmentFragmentDoc}
`;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useNewMessageSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    NewMessageSubscription,
    NewMessageSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(
    NewMessageDocument,
    options,
  );
}
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessageSubscription>;
