import { useModalsContext } from '../../context/modal-context/modal-context';
import * as GENERATED from '../../graphql/generated/index';
import { getStatusNameById } from '../../utils';
import { useSendMessagesMutation } from '..';

export const useUpdateSubtaskMutation = () => {
  const [sendMessageMutation] = useSendMessagesMutation();

  const { modalsProps } = useModalsContext();
  const { chatId } = modalsProps;

  return GENERATED.useUpdateSubtaskMutation({
    onCompleted: async (response) => {
      if (response?.updateSubtask?.id) {
        await sendMessageMutation({
          variables: {
            data: {
              chatId: Number(chatId),
              text: `Изменен статус на ${getStatusNameById(
                response?.updateSubtask?.status?.id,
              )} цвет!`,
            },
          },
        });
      }
    },
  });
};
