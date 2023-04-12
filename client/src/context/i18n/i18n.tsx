import React, { FC, Fragment } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IntlProvider } from 'react-intl';
import flatten from 'flat';
import messages from '../../messages';

import { LOCALES } from '../appContext/const';

interface Props {
  children: any,
  locale: string,
}

export const I18Provider: FC<Props> = (props) => {
  const { children, locale = LOCALES.ENGLISH } = props;

  return (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      messages={flatten(messages[locale])}
    >
      {children}
    </IntlProvider>
  );
};
