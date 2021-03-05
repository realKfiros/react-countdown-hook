import { useState, useMemo, useEffect } from 'react';
import { intervalToDuration, subSeconds, compareAsc } from 'date-fns';
import { formatter } from './format';

const useCountdown = ({ finishTime, format = '', onFinish = () => {} }) => {
  const [time, setTime] = useState(new Date());
  const [finished, setFinished] = useState(false);
  const countdown = useMemo(
    () =>
      intervalToDuration({
        start: finishTime,
        end: new Date(),
      }),
    [time]
  );
  const formattedText = useMemo(() => formatter(countdown, format), [
    countdown,
    format,
  ]);

  useEffect(() => {
    if (compareAsc(finishTime, new Date()) <= 0) {
      setFinished(true);
      setTime(new Date());
      return;
    } else {
      let interval = setInterval(() => {
        if (compareAsc(finishTime, new Date()) <= 0) {
          clearInterval(interval);
          setFinished(true);
          setTime(new Date());
        } else {
          setTime(subSeconds(time, 1));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (finished) {
      onFinish();
    }
  }, [finished]);

  return { countdown, formattedText };
};

export { useCountdown };
