import { ReactNativeFile } from 'apollo-upload-client';
import * as ImagePicker from 'expo-image-picker';
import { useMediaLibraryPermissions } from 'expo-image-picker';

export const usePickImage = () => {
  const [status, requestPermission] = useMediaLibraryPermissions();

  const generateRNFile = (uri: string) => {
    const extension = uri?.substring(uri?.lastIndexOf('.') + 1);
    return new ReactNativeFile({
      uri: uri,
      name: 'avatar.jpg',
      type: `image/${extension}`,
    });
  };

  const pickImage = async () => {
    if (status?.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
      if (!result.cancelled) {
        return generateRNFile(result?.uri);
      }
    } else {
      await requestPermission();
      return null;
    }
  };

  return {
    pickImage,
  };
};
