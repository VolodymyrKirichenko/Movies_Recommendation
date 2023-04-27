import React, { FC } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface Props {
  text: string,
}

export const HomeError: FC<Props> = (props) => {
  const { text } = props;

  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {`${text} `}
      <strong>Try again!</strong>
    </Alert>
  );
};
