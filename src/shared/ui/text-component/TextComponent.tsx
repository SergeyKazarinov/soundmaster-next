import { CSSProperties, FC, memo } from 'react';
import classNames from 'classnames';

import s from './TextComponent.module.scss';

type TTextAlignVariant = 'right' | 'center' | 'left';

type TTextSize = 'size_h1' | 'size_h2' | 'size_h3' | 'size_h4' | 'navigator' | 'text';

type TTextColor = 'base' | 'secondary' | 'error' | 'bright-accent';

interface TextProps {
  className?: string;
  text?: string;
  align?: TTextAlignVariant;
  size?: TTextSize;
  bold?: boolean;
  style?: CSSProperties;
  color?: TTextColor;
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
  text,
  align = 'left',
  size = 'size_h2',
  bold,
  style = {},
  color = 'base',
}) => {
  const HeaderTag = mapSizeToHeaderTag[size];

  const mods = {
    [s.bold]: bold,
  };

  return (
    <HeaderTag className={classNames(s.textComponent, mods, className, s[align], s[color], s[size])} style={style}>
      {text}
    </HeaderTag>
  );
};

export default memo(TextComponent);
