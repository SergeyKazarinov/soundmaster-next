import { FC, memo } from 'react';

import { Stack } from '@/shared/ui/stack';

import styles from './SongTitle.module.scss';

interface SongTitleProps {
  name: string;
  artist: string;
  className?: string;
}

const SongTitle: FC<SongTitleProps> = ({ name, artist, className }) => (
  <Stack direction="column" gap="4" align="start" className={className}>
    <p className={styles.trackName}>{name}</p>
    <p className={styles.trackArtist}>{artist}</p>
  </Stack>
);

export default memo(SongTitle);
