'use client';

import { ChangeEvent, FC } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { CSSVariables } from '@/shared/types/types';
import { Stack } from '@/shared/ui/stack';

import audioPlayerStore from '../../model/store/audioPlayerStore';

import styles from './TimeTracker.module.scss';

interface TimeTrackerProps {
  className?: string;
}

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
        <div className={styles.progressBar} />
        <div className={styles.bufferBar} />
        <div className={styles.progressDot} />
      </div>
      <span className={styles.totalTime}>{totalTime}</span>
    </Stack>
  );
};

export default observer(TimeTracker);
