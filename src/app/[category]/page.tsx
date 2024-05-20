import { FC } from 'react';

import { CategoriesPage } from '@/pages/categories-page';

interface CategoryPageProps {
  params: { category: string };
}

const CategoryPage: FC<CategoryPageProps> = ({ params }) => <CategoriesPage categoryPath={params.category} />;

export default CategoryPage;
