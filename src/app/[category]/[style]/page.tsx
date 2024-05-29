import { FC, memo } from 'react';

import { StylePage } from '@/pages/style-page';
import { songsAPI } from '@/shared/api/api';
import { ISearchParams, ISongsResolve } from '@/shared/types/types';

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

export default memo(StylesPage);
