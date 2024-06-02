'use client';

import { ChangeEvent, CSSProperties, FC } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Stack } from '@/shared/ui/stack';

import audioPlayerStore from '../../model/store/audioPlayerStore';

import styles from './TimeTracker.module.scss';

interface TimeTrackerProps {
  className?: string;
}

type CSSVariables = CSSProperties & { [key: string]: string | number };
const TimeTracker: FC<TimeTrackerProps> = ({ className = '' }) => {
  const { currentTime, totalTime, progressBar, changeCurrentTime, bufferBar } = audioPlayerStore;
  const style: CSSVariables = { '--progress-bar': `${progressBar}%`, '--buffer-bar': `${bufferBar}%` };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeCurrentTime(Number(e.target.value));
  };

  return (
    <Stack className={classNames(styles.time, className)} max align="center">
      <span className={styles.currentTime}>{currentTime}</span>
      <div style={style} className={styles.range}>
        <input
          className={styles.inputRange}
          type="range"
          id="time"
          min={0}
          max={100}
          value={progressBar}
          onChange={handleChange}
        />
        <div className={styles.range2} />
        <div className={styles.buffer} />
        <div className={styles.dot} />
      </div>
      <span className={styles.totalTime}>{totalTime}</span>
    </Stack>
  );
};

export default observer(TimeTracker);
