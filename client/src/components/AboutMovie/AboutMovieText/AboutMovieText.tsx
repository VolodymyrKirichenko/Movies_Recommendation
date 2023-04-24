import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const LineOfText = styled(Typography)(() => ({
  variant: 'subtitle1',
  textShadow: '0px 0px 10px #fff',
}));

interface Props {
  info: string | number,
  textId: string,
}

export const AboutMovieText: FC<Props> = (props) => {
  const { textId, info } = props;

  return (
    <LineOfText>
      <strong>
        <FormattedMessage id={`${textId}`} />
      </strong>
      {`: ${info}`}
    </LineOfText>
  );
};
