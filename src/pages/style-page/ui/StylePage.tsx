import { FC, memo } from 'react';

import { SongsList } from '@/entities/songs';
import { songsAPI } from '@/shared/api/api';
import { ISearchParams, ISongsResolve } from '@/shared/types/types';

interface StylePageProps {
  params: { category: string; style: string };
  searchParams: ISearchParams;
}

const StylePage: FC<StylePageProps> = async ({ params, searchParams }) => {
  console.log(searchParams);
  const songsResolve = await songsAPI<ISongsResolve>({
    category: params.category,
    style: params.style,
    params: searchParams,
  });

  return <SongsList songs={songsResolve.data} />;
};

export default memo(StylePage);
