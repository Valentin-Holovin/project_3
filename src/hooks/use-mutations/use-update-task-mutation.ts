import { useModalsContext } from '../../context/modal-context/modal-context';
import * as GENERATED from '../../graphql/generated/index';
import { getStatusNameById } from '../../utils';
import { useSendMessagesMutation } from '..';

export const useUpdateTaskMutation = () => {
  const [sendMessageMutation] = useSendMessagesMutation();

  const { modalsProps } = useModalsContext();
  const { chatId } = modalsProps;

  return GENERATED.useUpdateTaskMutation({
    onCompleted: async (response) => {
      if (response?.updateTask?.id) {
        await sendMessageMutation({
          variables: {
            data: {
              chatId: Number(chatId),
              text: `Изменен статус на ${getStatusNameById(
                response?.updateTask?.status?.id,
              )} цвет!`,
            },
          },
        });
      }
    },
  });
};
