'use client';

import { FC, memo } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { SongTitle } from '@/entities/song-title';
import { DownloadButton } from '@/features/download-button';
import { getFullDate } from '@/shared/lib/date/getFullDate';
import { ISong } from '@/shared/types/types';
import { Stack } from '@/shared/ui/stack';

import styles from './SongCard.module.scss';

interface SongCardProps {
  imageUrl: string;
  artist: string;
  name: string;
  date: string;
  songUrl: string;
  className?: string;
  song: ISong;
  selectedSong: ISong | null;
  onClick: (song: ISong) => void;
}

const SongCard: FC<SongCardProps> = ({
  imageUrl,
  artist,
  name,
  date,
  songUrl,
  className = '',
  song,
  onClick,
  selectedSong,
}) => {
  const isSelectedSong = song._id === selectedSong?._id;
  const handleClick = () => {
    onClick(song);
  };
  return (
    <article
      className={classNames(styles.card, className, { [styles.selected]: isSelectedSong })}
      onClick={handleClick}
      aria-hidden="true"
    >
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} fill alt={name} className={styles.image} />
      </div>
      <SongTitle name={name} artist={artist} />
      <Stack direction="column" align="end">
        <p>{getFullDate(date)}</p>
        <DownloadButton type="button" url={songUrl} fileName={`${artist} - ${name}`} />
      </Stack>
    </article>
  );
};
export default memo(SongCard);
