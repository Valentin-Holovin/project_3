import { Box } from 'native-base';
import React from 'react';

import { useAdminEditUser, usePickImage } from '../../../hooks';
import { getPath } from '../../../utils';
import { Avatar } from '../../index';

type Props = {
  src?: string | null;
  userId: string;
};

export const UserAvatar = ({ src, userId }: Props) => {
  const [adminEditUser] = useAdminEditUser();

  const { pickImage } = usePickImage();

  const [image, setImage] = React.useState(getPath(src));

  React.useEffect(() => {
    setImage(getPath(src));
  }, [src]);

  const changeImage = async () => {
    const pickedFile = await pickImage();
    if (pickedFile) {
      const result = await adminEditUser({
        variables: {
          data: {
            idUser: `${userId}`,
            image: pickedFile,
          },
        },
      });
      await setImage(getPath(result?.data?.adminEditUser?.user?.image));
    }
  };

  return (
    <Box marginBottom={'20px'}>
      <Avatar changeImage={changeImage} height={100} width={100} image={image} />
    </Box>
  );
};
