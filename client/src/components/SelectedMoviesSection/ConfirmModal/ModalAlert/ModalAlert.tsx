import { FC } from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormattedMessage } from 'react-intl';

interface Props {
  onOpen: (value: boolean) => void,
}

export const ModalAlert: FC<Props> = (props) => {
  const { onOpen } = props;

  return (
    <Paper elevation={7}>
      <Alert
        action={(
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => onOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        )}
        sx={{ mb: 2 }}
      >
        <FormattedMessage id="copied" />
      </Alert>
    </Paper>
  );
};
