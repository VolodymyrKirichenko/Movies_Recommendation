import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FC } from 'react';
import { useIntl } from 'react-intl';
import { CARD_ACTION } from '../../typedefs/typedefs';

interface Props {
  cardAction: CARD_ACTION;
  onChangeAlert: () => void;
}

export const MovieCardAlert: FC<Props> = (props) => {
  const {
    cardAction,
    onChangeAlert,
  } = props;

  const intl = useIntl();

  const message = cardAction === CARD_ACTION.ActionAdded
    ? intl.formatMessage({ id: 'movieCardAlert.added' })
    : intl.formatMessage({ id: 'movieCardAlert.deleted' });

  return (
    <Box sx={{
      height: '10%',
      position: 'sticky',
      zIndex: 5,
      top: 0,
    }}
    >
      <Alert
        action={(
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onChangeAlert}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          )}
        sx={{ mb: 2 }}
      >
        {message}
      </Alert>
    </Box>
  );
};
