import { ElementType, FC, memo, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Card.module.scss';

interface CardProps {
  className?: string;
  children: ReactNode;
  tagName?: ElementType;
}

const Card: FC<CardProps> = ({ className, children, tagName: Tag = 'div' }) => (
  <Tag className={classNames(styles.card, className)}>{children}</Tag>
);

export default memo(Card);
