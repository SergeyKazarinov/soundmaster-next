import { FC } from 'react';

import { CategoryList } from '@/entities/category';
import { categoryAPI } from '@/shared/api/api';
import { apiCategoryConfig } from '@/shared/consts/routes';
import { ICategoryResolve, ISearchParams } from '@/shared/types/types';
import { Stack } from '@/shared/ui/stack';
import { Pagination } from '@/widgets/pagination';

import styles from './CategoriesPage.module.scss';

// const fetchCategory = async (category: string): Promise<ICategoryResolve> => {
//   const categoryResolve = await fetch(`${process.env.API_BASE_URL}songs/getStyle/${category}`);
//   if (!categoryResolve.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return categoryResolve.json();
// };

interface CategoriesPageProps {
  categoryPath: string;
  searchParams: ISearchParams;
}

const CategoriesPage: FC<CategoriesPageProps> = async ({ categoryPath, searchParams }) => {
  const categoryRoute = apiCategoryConfig[`${categoryPath}`];
  const categories = await categoryAPI<ICategoryResolve>({ category: categoryRoute, params: searchParams });

  return (
    <Stack tagName="section" className={styles.page} direction="column" gap="16" max align="center">
      <Pagination activeNumber={Number(searchParams.page)} totalItems={categories.length} />
      <CategoryList categories={categories.data} categoryPath={categoryPath} />

      <Pagination activeNumber={Number(searchParams.page)} totalItems={categories.length} />
    </Stack>
  );
};

export default CategoriesPage;
