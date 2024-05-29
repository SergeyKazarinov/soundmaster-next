import { FC, useCallback, useState } from 'react';
import { MdVolumeUp } from 'react-icons/md';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

// import audioPlayerStore from '../../model/store/audioPlayerStore';
import styles from './VolumeButton.module.scss';

const VolumeButton: FC = () => {
  const [isVisibleVolume, setIsVisibleVolume] = useState(false);

  const handleVolumeClick = useCallback(() => {
    setIsVisibleVolume((state) => !state);
  }, []);

  // const {} = audioPlayerStore;
  return (
    <>
      <div className={`${styles.volume} pointer`}>
        <MdVolumeUp
          size={24}
          onClick={handleVolumeClick}
          className={classNames({ [styles.activeIcon]: isVisibleVolume })}
        />
        <div className={classNames(styles.volumeRange, { [styles.activeVolume]: isVisibleVolume })}>
          <input className={styles.inputVolumeRange} type="range" id="volume" min={0} max={100} />
          <div className={styles.volumeRangeActive} />
          <div className={styles.dotVolume} />
        </div>
      </div>
      {/* <MdVolumeOff /> */}
    </>
  );
};

export default observer(VolumeButton);
