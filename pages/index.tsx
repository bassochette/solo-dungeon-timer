import { useTranslation } from 'react-i18next';

export const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="app">
      <img src="/banner/banner.webp" alt="" />
      <h1>{t('home.title')}</h1>
      <div>
        <img
          src="https://coveralls.io/repos/github/Webeleon/Next-JS-starter-project/badge.svg?branch=main"
          alt={t('home.alt.coverage')}
        />
        <img
          src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"
          alt={t('home.alt.prettier')}
        />
        <img
          src="https://github.com/webeleon/Next-JS-starter-project/workflows/Test%20and%20coverage/badge.svg"
          alt={t('home.alt.testAndCoverage')}
        />
      </div>
      <div>
        <a href="https://github.com/Webeleon/Next-JS-starter-project">
          {t('home.useMeOnGithub')}
        </a>
      </div>
      <div>
        <a href="https://webeleon.dev">{t('home.byWebeleon')}</a>
      </div>
      <div>
        <p>{t('copyright.header', { end: new Date().getFullYear() })}</p>
        <p>{t('copyright.permission')}</p>
        <p>{t('copyright.condition')}</p>
        <p>{t('copyright.warranty')}</p>
      </div>
    </div>
  );
};

export default Home;
