import { Box, Center, Spinner } from 'native-base';
import React from 'react';

type PropsTypes = {
  showSpinner: boolean;
};

export const ListFooterComponent = (props: PropsTypes) => {
  return <Center mt={'5px'}>{props.showSpinner ? <Spinner /> : <Box height={'20px'} />}</Center>;
};
