'use client';

import { FC, memo, useCallback, useState } from 'react';
import { IoMdClose, IoMdCloudDownload, IoMdPlayCircle } from 'react-icons/io';
import { MdSkipNext, MdSkipPrevious, MdVolumeUp } from 'react-icons/md';
import classNames from 'classnames';
import Image from 'next/image';

import { SongTitle } from '@/entities/song-title';
import { DownloadButton } from '@/features/download-button';
import { ISong } from '@/shared/types/types';
import { Stack } from '@/shared/ui/stack';

import styles from './AudioPlayer.module.scss';

interface AudioPlayerProps {
  song?: ISong;
}

const AudioPlayer: FC<AudioPlayerProps> = ({ song }) => {
  const [isVisibleVolume, setIsVisibleVolume] = useState(false);

  const handleVolumeClick = useCallback(() => {
    setIsVisibleVolume((state) => !state);
  }, []);

  if (!song) {
    return null;
  }

  return (
    <div className={styles.player}>
      <div className={styles.imageWrapper}>
        <Image src={song.imageURL} alt={song.name} fill />
      </div>
      <SongTitle className={styles.songInfo} name={song.name} artist={song.artist} />
      <Stack justify="center" className={styles.buttons}>
        <div className={styles.volume}>
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
        <MdSkipPrevious size={32} />
        <IoMdPlayCircle size={50} />
        {/* <MdPauseCircle size={50} /> */}
        <MdSkipNext size={32} />
        <DownloadButton url={song.songUrl} type="link">
          <IoMdCloudDownload size={24} />
        </DownloadButton>
      </Stack>
      <Stack className={styles.time} max align="center">
        <span className={styles.currentTime}>0:00</span>
        <div className={styles.range}>
          <input className={styles.inputRange} type="range" id="time" min={0} max={100} />
          <div className={styles.range2} />
          <div className={styles.dot} />
        </div>
        <span className={styles.totalTime}>0:00</span>
      </Stack>
      {/* <div className={styles.volume}>volume</div> */}
      <IoMdClose size={24} className={styles.close} />
    </div>
  );
};

export default memo(AudioPlayer);
