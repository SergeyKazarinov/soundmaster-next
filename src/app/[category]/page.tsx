import { FC } from 'react';

import { CategoriesPage } from '@/pages/categories-page';
import { ISearchParams } from '@/shared/types/types';

interface CategoryPageProps {
  params: { category: string };
  searchParams: ISearchParams;
}

const CategoryPage: FC<CategoryPageProps> = ({ params, searchParams }) => (
  <CategoriesPage categoryPath={params.category} searchParams={searchParams} />
);

export default CategoryPage;
