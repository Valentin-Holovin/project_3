import React from 'react';

import { Avatar } from '../../../components';
import { useEditUser, usePickImage } from '../../../hooks';
import { getPath } from '../../../utils';

type Props = {
  src?: string | null;
};

export const AccountAvatar = ({ src }: Props) => {
  const [editUser] = useEditUser();

  const { pickImage } = usePickImage();

  const [image, setImage] = React.useState(getPath(src));

  React.useEffect(() => {
    setImage(getPath(src));
  }, [src]);

  const changeImage = async () => {
    const pickedFile = await pickImage();
    if (pickedFile) {
      await editUser({
        variables: {
          data: {
            image: pickedFile,
          },
        },
      });
    }
  };

  return <Avatar width={81} height={81} image={image} changeImage={changeImage} />;
};
