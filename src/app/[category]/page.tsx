import { FC } from 'react';

import { ISearchParams } from '@/shared/types/types';

import { CategoriesPage } from '@/views/categories-page';

interface CategoryPageProps {
  params: { category: string };
  searchParams: ISearchParams;
}

const CategoryPage: FC<CategoryPageProps> = ({ params, searchParams }) => (
  <CategoriesPage categoryPath={params.category} searchParams={searchParams} />
);

export default CategoryPage;
