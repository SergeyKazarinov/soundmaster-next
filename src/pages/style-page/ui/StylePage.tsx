'use client';

import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { audioPlayerStore } from '@/features/audio-player';
import { ISearchParams, ISong, ISongsResolve } from '@/shared/types/types';
import { Card } from '@/shared/ui/card';
import { Stack } from '@/shared/ui/stack';
import { AudioPlayer } from '@/widgets/audio-player';
import { Pagination } from '@/widgets/pagination';
import { SongsList } from '@/widgets/songs-list';

interface StylePageProps {
  songsResolve: ISongsResolve;
  searchParams: ISearchParams;
}

const StylePage: FC<StylePageProps> = ({ songsResolve, searchParams }) => {
  const { setSongs, songs, setSelectedSong, selectedSong, setNextTrack, setPrevTrack } = audioPlayerStore;

  useEffect(() => {
    if (songsResolve) {
      setSongs(songsResolve.data);
    }
  }, [songsResolve, setSongs]);

  const handleSelectSong = (song: ISong) => {
    setSelectedSong(song);
  };

  return (
    <>
      <Card tagName="section">
        <Stack direction="column" gap="16" max align="center">
          <Pagination activeNumber={Number(searchParams.page)} totalItems={songsResolve.length} />
          <SongsList songs={songs} onClick={handleSelectSong} />
          <Pagination activeNumber={Number(searchParams.page)} totalItems={songsResolve.length} />
        </Stack>
      </Card>
      <AudioPlayer song={selectedSong} onNextTrack={setNextTrack} onPrevTrack={setPrevTrack} />
    </>
  );
};

export default observer(StylePage);
