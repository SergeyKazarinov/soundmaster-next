import { FC, memo } from 'react';
import Image from 'next/image';

import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
  imageUrl: string;
  title: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ imageUrl, title }) => (
  <article className={styles.card}>
    <div className={styles.imageWrapper}>
      <Image className={styles.image} src={imageUrl} alt={title} fill />
    </div>
    <p>{title}</p>
  </article>
);

export default memo(CategoryCard);
