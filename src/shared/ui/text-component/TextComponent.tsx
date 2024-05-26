import { CSSProperties, FC, memo } from 'react';
import classNames from 'classnames';

import s from './TextComponent.module.scss';

export type TTextVariant = 'primary' | 'accent' | 'error';

export type TTextAlignVariant = 'right' | 'center' | 'left';

export type TTextSize = 'size_h1' | 'size_h2' | 'size_h3' | 'size_h4' | 'navigator' | 'text';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TTextVariant;
  align?: TTextAlignVariant;
  size?: TTextSize;
  bold?: boolean;
  style?: CSSProperties;
}

type THeaderTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

const mapSizeToHeaderTag: Record<TTextSize, THeaderTag> = {
  size_h1: 'h1',
  size_h2: 'h2',
  size_h3: 'h3',
  size_h4: 'h4',
  navigator: 'p',
  text: 'p',
};

const TextComponent: FC<TextProps> = ({
  className,
  title,
  text,
  variant = 'primary',
  align = 'left',
  size = 'size_h2',
  bold,
  style = {},
}) => {
  const HeaderTag = mapSizeToHeaderTag[size];

  const mods = {
    [s.bold]: bold,
  };

  return (
    <div className={classNames(s.textComponent, mods, [className, s[variant], s[align], s[size]])}>
      {title && <HeaderTag className={s.title}>{title}</HeaderTag>}
      {text && (
        <p className={s.text} style={style}>
          {text}
        </p>
      )}
    </div>
  );
};

export default memo(TextComponent);
