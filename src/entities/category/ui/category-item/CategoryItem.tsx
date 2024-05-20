import { FC, memo } from 'react';
import Link from 'next/link';

import { ICategory } from '@/shared/types/types';
import { CategoryCard } from '@/shared/ui/category-card';

// import styles from './CategoryItem.module.scss';

interface CategoryItemProps {
  category: ICategory;
  categoryPath: string;
}

const CategoryItem: FC<CategoryItemProps> = ({ category, categoryPath }) => (
  <Link href={`/${categoryPath}/${category.name}`}>
    <CategoryCard title={category.name} imageUrl={category.imageURL} />
  </Link>
);

export default memo(CategoryItem);
