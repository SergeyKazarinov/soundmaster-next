import { DetailedHTMLProps, ElementType, FC, memo, ReactNode } from 'react';
import classNames from 'classnames';

import { TMods } from '@/shared/types/types';

import styles from './Stack.module.scss';

export type TFlexJustify = 'start' | 'center' | 'end' | 'between';
export type TFlexAlign = 'start' | 'center' | 'end';
export type TFlexDirection = 'row' | 'column';
export type TFlexWrap = 'nowrap' | 'wrap';
export type TFlexGap = '4' | '8' | '16' | '24' | '32';

const justifyClasses: Record<TFlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};
const alignClasses: Record<TFlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const directionClasses: Record<TFlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const gapClasses: Record<TFlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  24: styles.gap24,
  32: styles.gap32,
};

type DivProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: TFlexJustify;
  align?: TFlexAlign;
  direction?: TFlexDirection;
  gap?: TFlexGap;
  max?: boolean;
  wrap?: TFlexWrap;
  tagName?: ElementType;
}

const Stack: FC<FlexProps> = ({
  className = '',
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap = '8',
  max = false,
  wrap = 'nowrap',
  tagName: TagName = 'div',
  ...otherProps
}) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
    styles[wrap],
  ];

  const mods: TMods = {
    [styles.max]: max,
  };
  return (
    <TagName className={classNames(styles.flex, mods, classes)} {...otherProps}>
      {children}
    </TagName>
  );
};

export default memo(Stack);
