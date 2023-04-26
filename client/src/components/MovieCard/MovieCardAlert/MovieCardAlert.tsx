import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FC, useMemo } from 'react';
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

  const message = useMemo(() => intl.formatMessage({
    id: `movieCardAlert.${cardAction}`,
  }), [cardAction, intl]);

  const colorAlert = cardAction === CARD_ACTION.ActionAdded ? 'success' : 'error';

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
        severity={colorAlert}
      >
        {message}
      </Alert>
    </Box>
  );
};
