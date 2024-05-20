import { FC, memo } from 'react';

import { CategoryList } from '@/entities/category';
import { apiCategoryConfig } from '@/shared/consts/routes';
import { ICategoryResolve } from '@/shared/types/types';

import styles from './CategoriesPage.module.scss';

const fetchCategory = async (category: string): Promise<ICategoryResolve> => {
  const categoryResolve = await fetch(`${process.env.API_BASE_URL}songs/getStyle/${category}`);
  if (!categoryResolve.ok) {
    throw new Error('Failed to fetch data');
  }
  return categoryResolve.json();
};

interface CategoriesPageProps {
  categoryPath: string;
}

const CategoriesPage: FC<CategoriesPageProps> = async ({ categoryPath }) => {
  const categoryRoute = apiCategoryConfig[`${categoryPath}`];
  const categories = await fetchCategory(categoryRoute);

  return (
    <div className={styles.page}>
      <CategoryList categories={categories.data} categoryPath={categoryPath} />
    </div>
  );
};

export default memo(CategoriesPage);
