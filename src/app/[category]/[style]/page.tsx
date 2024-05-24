import { FC, memo } from 'react';

import { StylePage } from '@/pages/style-page';
import { ISearchParams } from '@/shared/types/types';

interface StylesPageProps {
  params: { category: string; style: string };
  searchParams: ISearchParams;
}

const StylesPage: FC<StylesPageProps> = ({ params, searchParams }) => (
  <StylePage params={params} searchParams={searchParams} />
);

export default memo(StylesPage);
