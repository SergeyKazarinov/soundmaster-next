import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import audioPlayerStore from '../../model/store/audioPlayerStore';

import styles from '../styles/Button.module.scss';

interface ClosePlayerButtonProps {
  className?: string;
}

const ClosePlayerButton: FC<ClosePlayerButtonProps> = ({ className }) => {
  const { closePlayer } = audioPlayerStore;
  return <IoMdClose size={24} className={classNames(styles.button, className)} onClick={closePlayer} />;
};

export default observer(ClosePlayerButton);
