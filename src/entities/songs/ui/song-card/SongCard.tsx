'use client';

import { FC, memo } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { getFullDate } from '@/shared/lib/date/getFullDate';

import { Stack } from '../../../../shared/ui/stack';
import SongTitle from '../song-title/SongTitle';

import styles from './SongCard.module.scss';

interface SongCardProps {
  imageUrl: string;
  artist: string;
  name: string;
  date: string;
  songUrl: string;
  className?: string;
}

const SongCard: FC<SongCardProps> = ({ imageUrl, artist, name, date, songUrl, className = '' }) => (
  // const handleClick = () => {
  //   downloadFile(songUrl, `${artist} - ${name}`);
  // };

  <article className={classNames(styles.card, className)}>
    <div className={styles.imageWrapper}>
      <Image src={imageUrl} fill alt={name} className={styles.image} />
    </div>
    <SongTitle name={name} artist={artist} />
    <Stack direction="column" align="end">
      <p>{getFullDate(date)}</p>
      <a download href={songUrl} target="_blank" rel="noreferrer">
        Скачать
      </a>
    </Stack>
  </article>
);
export default memo(SongCard);
