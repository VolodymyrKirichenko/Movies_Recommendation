import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import {
  EmailIcon,
  ViberIcon,
  TwitterIcon,
  TelegramIcon,
  FacebookIcon,
  LinkedinIcon,
  ViberShareButton,
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
} from 'react-share';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';

interface Props {
  url: string,
}

export const ModalShare: FC<Props> = (props) => {
  const { url } = props;

  return (
    <Box sx={{ position: 'absolute', bottom: 30 }}>
      <Typography variant="h6" sx={{ pb: 1 }}>
        <FormattedMessage id="share_with_friends" />
      </Typography>

      <Stack direction="row" spacing={1}>
        <TelegramShareButton url={url}>
          <TelegramIcon round size="32" />
        </TelegramShareButton>

        <TwitterShareButton url={url}>
          <TwitterIcon round size="32" />
        </TwitterShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon round size="32" />
        </LinkedinShareButton>

        <FacebookShareButton url={url}>
          <FacebookIcon round size="32" />
        </FacebookShareButton>

        <ViberShareButton url={url}>
          <ViberIcon round size="32" />
        </ViberShareButton>

        <EmailShareButton url={url}>
          <EmailIcon round size="32" />
        </EmailShareButton>
      </Stack>
    </Box>
  );
};
