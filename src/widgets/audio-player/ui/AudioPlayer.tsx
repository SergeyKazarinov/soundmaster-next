'use client';

import { FC, memo, useEffect, useState } from 'react';
import { IoMdClose, IoMdCloudDownload } from 'react-icons/io';
import classNames from 'classnames';
import Image from 'next/image';

import { SongTitle } from '@/entities/song-title';
import { NextButton, PlayButton, PrevButton, TimeTracker, VolumeButton } from '@/features/audio-player';
import { DownloadButton } from '@/features/download-button';
import { ISong } from '@/shared/types/types';
import { Stack } from '@/shared/ui/stack';

import styles from './AudioPlayer.module.scss';

interface AudioPlayerProps {
  song?: ISong | null;
}

const AudioPlayer: FC<AudioPlayerProps> = ({ song }) => {
  const [isVisiblePlayer, setIsVisiblePlayer] = useState(false);

  const handleClose = () => {
    setIsVisiblePlayer(false);
  };

  useEffect(() => {
    if (song && !isVisiblePlayer) {
      setIsVisiblePlayer(true);
    }
  }, [song]);

  if (!song) {
    return null;
  }

  return (
    <section className={classNames(styles.player, { [styles.active]: isVisiblePlayer })}>
      <div className={styles.imageWrapper}>
        <Image src={song.imageURL} alt={song.name} fill />
      </div>
      <SongTitle className={styles.songInfo} name={song.name} artist={song.artist} />
      <Stack justify="center" className={styles.buttons}>
        <VolumeButton />
        <PrevButton />
        <PlayButton />
        <NextButton />
        <DownloadButton url={song.songUrl} type="link">
          <IoMdCloudDownload size={24} />
        </DownloadButton>
      </Stack>
      <TimeTracker className={styles.time} />
      {/* <div className={styles.volume}>volume</div> */}
      <IoMdClose size={24} className={styles.close} onClick={handleClose} />
    </section>
  );
};

export default memo(AudioPlayer);
