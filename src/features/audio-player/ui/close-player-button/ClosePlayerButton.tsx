import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';
import { observer } from 'mobx-react-lite';

import audioPlayerStore from '../../model/store/audioPlayerStore';

interface ClosePlayerButtonProps {
  className?: string;
}

const ClosePlayerButton: FC<ClosePlayerButtonProps> = ({ className }) => {
  const { closePlayer } = audioPlayerStore;
  return <IoMdClose size={24} className={className} onClick={closePlayer} />;
};

export default observer(ClosePlayerButton);
