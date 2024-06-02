'use client';

import { FC } from 'react';
import { MdSkipPrevious } from 'react-icons/md';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import audioPlayerStore from '../../model/store/audioPlayerStore';

import styles from '../styles/Button.module.scss';

interface NextButtonProps {}

const PrevButton: FC<NextButtonProps> = () => {
  const { setPrevTrack } = audioPlayerStore;
  return <MdSkipPrevious className={classNames(styles.button, 'pointer')} size={32} onClick={setPrevTrack} />;
};

export default observer(PrevButton);
