import { FC, memo } from 'react';

interface CategoryPageProps {
  params: { category: string };
}

const CategoryPage: FC<CategoryPageProps> = ({ params }) => {
  console.log(params);
  return (
    <div style={{ zIndex: 1000 }}>
      categorfwef
      <div>sdlfjweoifjwoeifj</div>weeeeeeeeeeeeeeeeeeeeeey
      <div>sdlfjweoifjwoeifj</div>weeeeeeeeeeeeeeeeeeeeeey
      <div>sdlfjweoifjwoeifj</div>weeeeeeeeeeeeeeeeeeeeeey
      <div>sdlfjweoifjwoeifj</div>weeeeeeeeeeeeeeeeeeeeeey
      <div>sdlfjweoifjwoeifj</div>weeeeeeeeeeeeeeeeeeeeeey
    </div>
  );
};

export default memo(CategoryPage);
