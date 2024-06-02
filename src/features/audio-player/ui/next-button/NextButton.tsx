'use client';

import { FC } from 'react';
import { MdSkipNext } from 'react-icons/md';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import audioPlayerStore from '../../model/store/audioPlayerStore';

import styles from '../styles/Button.module.scss';

interface NextButtonProps {}

const NextButton: FC<NextButtonProps> = () => {
  const { setNextTrack } = audioPlayerStore;
  return <MdSkipNext className={classNames(styles.button, 'pointer')} size={32} onClick={setNextTrack} />;
};

export default observer(NextButton);
