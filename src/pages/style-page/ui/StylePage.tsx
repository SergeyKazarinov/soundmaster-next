'use client';

import { FC, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { audioPlayerStore } from '@/features/audio-player';
import { ISearchParams, ISong, ISongsResolve } from '@/shared/types/types';
import { Card } from '@/shared/ui/card';
import { Stack } from '@/shared/ui/stack';
import { Pagination } from '@/widgets/pagination';
import { SongsList } from '@/widgets/songs-list';

interface StylePageProps {
  songsResolve: ISongsResolve;
  searchParams: ISearchParams;
}

const StylePage: FC<StylePageProps> = ({ songsResolve, searchParams }) => {
  const { setSongs, getSongs, setSelectedSong, getSelectedSongs } = audioPlayerStore;

  useEffect(() => {
    if (songsResolve) {
      setSongs(songsResolve.data);
    }
  }, [songsResolve, setSongs]);

  const handleSelectSong = useCallback(
    (song: ISong) => {
      setSelectedSong(song);
    },
    [setSelectedSong]
  );

  return (
    <Card tagName="section">
      <Stack direction="column" gap="16" max align="center">
        <Pagination activeNumber={Number(searchParams.page)} totalItems={songsResolve.length} />
        <SongsList songs={getSongs} onClick={handleSelectSong} selectedSong={getSelectedSongs} />
        <Pagination activeNumber={Number(searchParams.page)} totalItems={songsResolve.length} />
      </Stack>
    </Card>
  );
};

export default observer(StylePage);
