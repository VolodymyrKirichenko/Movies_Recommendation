import Button from '@mui/material/Button';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormattedMessage } from 'react-intl';
import React from 'react';

export const SubmitField = () => {
  return (
    <Button
      variant="contained"
      type="submit"
      size="large"
      sx={{ height: 'max-content' }}
    >
      <FormattedMessage id="submit" />
    </Button>
  );
};
