import { FC, memo } from 'react';

import { Stack } from '@/shared/ui/stack';
import { TextComponent } from '@/shared/ui/text-component';

interface SongTitleProps {
  name: string;
  artist: string;
  className?: string;
}

const SongTitle: FC<SongTitleProps> = ({ name, artist, className }) => (
  <Stack direction="column" gap="4" align="start" className={className}>
    <TextComponent size="text" text={name} />
    <TextComponent size="text" text={artist} color="secondary" />
  </Stack>
);

export default memo(SongTitle);
