import { FC, memo } from 'react';
import classNames from 'classnames';

import { Stack } from '@/shared/ui/stack';

import styles from './TimeTracker.module.scss';

interface TimeTrackerProps {
  className?: string;
}

const TimeTracker: FC<TimeTrackerProps> = ({ className = '' }) => (
  <Stack className={classNames(styles.time, className)} max align="center">
    <span className={styles.currentTime}>0:00</span>
    <div className={styles.range}>
      <input className={styles.inputRange} type="range" id="time" min={0} max={100} />
      <div className={styles.range2} />
      <div className={styles.dot} />
    </div>
    <span className={styles.totalTime}>0:00</span>
  </Stack>
);

export default memo(TimeTracker);
