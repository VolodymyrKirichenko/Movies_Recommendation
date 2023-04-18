import { FC, Fragment, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import flatten from 'flat';
import messages from '../../messages';

import { LOCALES } from '../appContext/const';

interface Props {
  children: ReactNode,
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
