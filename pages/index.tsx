import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

const DURATION = 90;

export const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const [timer, setTimer] = useState(DURATION);
  const [runningInterval, setRunningInterval] = useState<NodeJS.Timeout>();

  const _start = useCallback(() => {
    if (runningInterval) return;
    setTimer(DURATION);
    const int = setInterval(() => {
      setTimer((timer) => {
        if (timer <= 0) {
          setRunningInterval(undefined);
          return 0;
        }
        return timer - 1;
      });
    }, 1000);
    setRunningInterval(int);
  }, [timer, runningInterval]);

  const _cancel = useCallback(() => {
    if (runningInterval) clearInterval(runningInterval);
    setTimer(DURATION);
  }, [timer, runningInterval]);

  return (
    <div className="app">
      <p
        className={`timer ${
          timer <= 10 && timer !== 0 ? 'timer-end' : ''
        }`.trim()}
        data-cy="timer"
      >
        {timer > 0 && timer}
        {timer === 0 && t('home.safe-to-go')}
      </p>
      <div
        className={`dungeon ${
          timer <= 10 && timer !== 0 ? 'dungeon-pulse' : ''
        }`}
      >
        {timer > 0 && (
          <img src="open-dg.png" data-cy="open-dg" className="dungeon-img" />
        )}
        {timer === 0 && (
          <img
            src="closed-dg.png"
            data-cy="closed-dg"
            className="dungeon-img"
          />
        )}
      </div>
      <div className="controls">
        {!runningInterval && (
          <div className="button start-button" data-cy="start" onClick={_start}>
            {t('home.start-button')}
          </div>
        )}
        {runningInterval && (
          <div
            className="button cancel-button"
            data-cy="cancel"
            onClick={_cancel}
          >
            {t('home.cancel-button')}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
