import { Box, Input } from 'native-base';
import React from 'react';

type Props = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onContentSizeChange: () => void;
};

export const MultilineInput = ({
  value,
  onChangeText,
  onContentSizeChange,
  placeholder,
}: Props) => {
  return (
    <Box bg='primary.100'>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        h='auto'
        onContentSizeChange={onContentSizeChange}
        multiline={true}
        minHeight={'36px'}
        textAlignVertical='top'
        scrollEnabled={false}
      />
    </Box>
  );
};
