import { FC, memo } from 'react';

import { ICategory } from '@/shared/types/types';

import CategoryItem from '../category-item/CategoryItem';

import styles from './CategoryList.module.scss';

interface CategoryListProps {
  categories: ICategory[];
  categoryPath: string;
}

const CategoryList: FC<CategoryListProps> = ({ categories, categoryPath }) => {
  const getList = categories.map((category) => (
    <li key={category._id}>
      <CategoryItem category={category} categoryPath={categoryPath} />
    </li>
  ));

  return <ul className={styles.categories}>{getList}</ul>;
};

export default memo(CategoryList);
