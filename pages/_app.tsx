import '../styles/styles.scss';
import '../i18n';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { locale } = useRouter();
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return <Component {...pageProps} />;
}

export default MyApp;
