import { FC } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Divider from '@mui/material/Divider';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

interface Props {
  url: string,
  copy: () => void,
}

export const ModalInput: FC<Props> = (props) => {
  const { copy, url } = props;

  const path = url.split('?')[1];

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        marginTop: '24px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
      }}
      elevation={7}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="List URL"
        inputProps={{ 'aria-label': 'list URL' }}
        value={url}
      />

      <IconButton
        component={Link}
        to={`/recommend?${path}`}
        target="_blank"
        sx={{ p: '10px' }}
        aria-label="preview"
      >
        <VisibilityIcon />
      </IconButton>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton
        color="primary"
        sx={{ p: '10px' }}
        aria-label="copy to clipboard"
        onClick={copy}
      >
        <ContentCopyIcon />
      </IconButton>
    </Paper>
  );
};
