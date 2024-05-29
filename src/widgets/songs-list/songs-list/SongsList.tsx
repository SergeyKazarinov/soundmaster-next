'use client';

import { FC, memo } from 'react';

import { ISong } from '@/shared/types/types';
import { Stack } from '@/shared/ui/stack';

import { SongCard } from '../song-card';

import styles from './SongsList.module.scss';

interface SongsListProps {
  songs: ISong[];
  selectedSong: ISong | null;
  onClick: (song: ISong) => void;
}

const SongsList: FC<SongsListProps> = ({ songs, selectedSong, onClick }) => {
  const songsElement = songs?.map((song) => (
    <li key={song._id} className={styles.songItem}>
      <SongCard
        artist={song.artist}
        imageUrl={song.imageURL}
        name={song.name}
        songUrl={song.songUrl}
        date={song.createdAt}
        song={song}
        selectedSong={selectedSong}
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
