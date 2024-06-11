import { FC } from 'react';

import { songsAPI } from '@/shared/api/api';
import { ISearchParams, ISongsResolve } from '@/shared/types/types';

import { StylePage } from '@/views/style-page';

interface StylesPageProps {
  params: { category: string; style: string };
  searchParams: ISearchParams;
}

const StylesPage: FC<StylesPageProps> = async ({ params, searchParams }) => {
  const songsResolve = await songsAPI<ISongsResolve>({
    category: params.category,
    style: params.style,
    params: searchParams,
  });

  return <StylePage songsResolve={songsResolve} searchParams={searchParams} />;
};

export default StylesPage;
