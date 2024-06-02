import { ChangeEvent, FC, useCallback, useState } from 'react';
import { MdVolumeUp } from 'react-icons/md';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { CSSVariables } from '@/shared/types/types';

import audioPlayerStore from '../../model/store/audioPlayerStore';

// import audioPlayerStore from '../../model/store/audioPlayerStore';
import styles from './VolumeButton.module.scss';

const VolumeButton: FC = () => {
  const [isVisibleVolume, setIsVisibleVolume] = useState(false);
  const { volume, setVolume } = audioPlayerStore;

  const handleVolumeClick = useCallback(() => {
    setIsVisibleVolume((state) => !state);
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setVolume(Number(e.target.value));
    },
    [setVolume]
  );
  const style: CSSVariables = { '--volume-var': `${volume}%` };

  return (
    <>
      <div className={styles.volume} style={style}>
        <MdVolumeUp
          size={24}
          onClick={handleVolumeClick}
          className={classNames('pointer', { [styles.activeIcon]: isVisibleVolume })}
        />
        <div className={classNames(styles.volumeRange, { [styles.activeVolume]: isVisibleVolume })}>
          <input
            className={styles.inputVolumeRange}
            type="range"
            id="volume"
            min={0}
            max={100}
            value={volume * 100}
            onChange={(e) => handleChange(e)}
          />
          <div className={styles.volumeRangeActive} />
          <div className={styles.dotVolume} />
        </div>
      </div>
      {/* <MdVolumeOff /> */}
    </>
  );
};

export default observer(VolumeButton);
