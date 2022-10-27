import { AllProjectActions } from '../constants';
import { IFiles } from '../types/chat';

export const getAllProjectActionsValue = (props: IFiles) => {
  switch (props.type) {
    case AllProjectActions.chat:
      return props.chatId;

    case AllProjectActions.subtask:
      return props.subtaskId;

    case AllProjectActions.task:
      return props.taskId;

    default:
      return null;
  }
};
