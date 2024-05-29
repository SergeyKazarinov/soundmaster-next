'use client';

import { FC, memo } from 'react';

import { ISong } from '@/shared/types/types';
import { Stack } from '@/shared/ui/stack';

import { SongCard } from '../song-card';

import styles from './SongsList.module.scss';

interface SongsListProps {
  songs: ISong[];
  onClick: (song: ISong) => void;
}

const SongsList: FC<SongsListProps> = ({ songs, onClick }) => {
  const songsElement = songs?.map((song, index) => (
    <li key={song._id} className={styles.songItem}>
      {index + 1}
      <SongCard
        artist={song.artist}
        imageUrl={song.imageURL}
        name={song.name}
        songUrl={song.songUrl}
        date={song.createdAt}
        song={song}
        onClick={onClick}
      />
    </li>
  ));

  return (
    <Stack tagName="ul" direction="column" gap="16" max>
      {songsElement}
    </Stack>
  );
};

export default memo(SongsList);
