'use client';

import { FC, memo } from 'react';

import { ISong } from '@/shared/types/types';
import { SongCard } from '@/shared/ui/song-card';
import Stack from '@/shared/ui/stack/Stack';

import styles from './SongsList.module.scss';

interface SongsListProps {
  songs: ISong[];
}

const SongsList: FC<SongsListProps> = ({ songs }) => {
  const songsElement = songs?.map((song) => (
    <li key={song._id} className={styles.songItem}>
      <SongCard
        artist={song.artist}
        imageUrl={song.imageURL}
        name={song.name}
        songUrl={song.songUrl}
        date={song.createdAt}
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
