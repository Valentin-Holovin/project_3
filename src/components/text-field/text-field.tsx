import { useField, useFormikContext } from 'formik';
import { Box, FormControl, IInputProps, Input, Pressable } from 'native-base';
import React from 'react';

import { phoneTapRegex } from '../../constants';
import { EyePasswordIcon } from '../icons';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  InputRightElement?: JSX.Element | JSX.Element[];
  inputProps?: IInputProps;
  wrapperProps?: IInputProps;
  errorsWrapperProps?: IInputProps;
  errorsProps?: IInputProps;
  isDisabled?: boolean;
};

export const TextField = ({
  name,
  label,
  placeholder,
  InputRightElement,
  inputProps,
  wrapperProps,
  errorsWrapperProps,
  errorsProps,
  isDisabled = false,
}: Props) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleChangeInput = (value: string) => {
    if (inputProps?.keyboardType === 'phone-pad') {
      if (!phoneTapRegex.test(value)) {
        setFieldValue(name, value);
      }
    } else {
      setFieldValue(name, value);
    }
  };

  const isPassword = inputProps?.type === 'password';
  const hasError = Boolean(meta.error && meta.touched);

  return (
    <FormControl isInvalid={hasError} {...wrapperProps}>
      <FormControl.Label
        mb={'6px'}
        mt={'0'}
        _text={{
          color: 'primary.700',
          fontSize: 'md',
        }}
      >
        {label}
      </FormControl.Label>
      <Input
        InputRightElement={
          isPassword ? (
            <Pressable onPress={() => setPasswordVisible((prev) => !prev)} mr={4}>
              <EyePasswordIcon size={5} fill={passwordVisible ? 'gray.400' : 'black'} />
            </Pressable>
          ) : (
            InputRightElement
          )
        }
        isDisabled={isDisabled}
        placeholder={placeholder}
        value={field.value}
        onChangeText={(value) => handleChangeInput(value)}
        {...inputProps}
        type={isPassword && !passwordVisible ? 'password' : 'text'}
      />
      <Box h={'25px'} {...errorsWrapperProps}>
        <FormControl.ErrorMessage pl={3} mt={0} h={25} {...errorsProps}>
          {meta.error}
        </FormControl.ErrorMessage>
      </Box>
    </FormControl>
  );
};
