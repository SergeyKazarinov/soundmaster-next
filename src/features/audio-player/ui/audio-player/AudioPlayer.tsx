'use client';

import { FC } from 'react';
import { IoMdCloudDownload } from 'react-icons/io';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { SongTitle } from '@/entities/song-title';
import { DownloadButton } from '@/features/download-button';
import { Stack } from '@/shared/ui/stack';

import audioPlayerStore from '../../model/store/audioPlayerStore';
import ClosePlayerButton from '../close-player-button/ClosePlayerButton';
import NextButton from '../next-button/NextButton';
import PlayButton from '../play-button/PlayButton';
import PrevButton from '../prev-button/PrevButton';
import TimeTracker from '../time-tracker/TimeTracker';
import VolumeButton from '../volume-button/VolumeButton';

import styles from './AudioPlayer.module.scss';

const AudioPlayer: FC = () => {
  const { selectedSong } = audioPlayerStore;

  if (!selectedSong) {
    return null;
  }

  return (
    <section className={classNames(styles.player, { [styles.active]: selectedSong })}>
      <div className={styles.imageWrapper}>
        <Image src={selectedSong.imageURL} alt={selectedSong.name} fill />
      </div>
      <SongTitle className={styles.songInfo} name={selectedSong.name} artist={selectedSong.artist} />
      <Stack justify="center" className={styles.buttons}>
        <VolumeButton />
        <PrevButton />
        <PlayButton />
        <NextButton />
        <DownloadButton url={selectedSong.songUrl} type="link">
          <IoMdCloudDownload size={24} />
        </DownloadButton>
      </Stack>
      <TimeTracker className={styles.time} />
      <ClosePlayerButton className={styles.close} />
    </section>
  );
};

export default observer(AudioPlayer);
