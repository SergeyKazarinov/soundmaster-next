import { FC, memo } from 'react';

import { SongsList } from '@/entities/songs';
import { songsAPI } from '@/shared/api/api';
import { ISearchParams, ISongsResolve } from '@/shared/types/types';
import { Stack } from '@/shared/ui/stack';
import { Pagination } from '@/widgets/pagination';

interface StylePageProps {
  params: { category: string; style: string };
  searchParams: ISearchParams;
}

const StylePage: FC<StylePageProps> = async ({ params, searchParams }) => {
  const songsResolve = await songsAPI<ISongsResolve>({
    category: params.category,
    style: params.style,
    params: searchParams,
  });

  return (
    <Stack tagName="section" direction="column" gap="16" max align="center">
      <Pagination activeNumber={Number(searchParams.page)} totalItems={songsResolve.length} />
      <SongsList songs={songsResolve.data} />
      <Pagination activeNumber={Number(searchParams.page)} totalItems={songsResolve.length} />
    </Stack>
  );
};

export default memo(StylePage);
