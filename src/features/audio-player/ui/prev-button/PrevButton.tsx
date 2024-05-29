'use client';

import { FC } from 'react';
import { MdSkipPrevious } from 'react-icons/md';
import { observer } from 'mobx-react-lite';

import audioPlayerStore from '../../model/store/audioPlayerStore';

interface NextButtonProps {}

const PrevButton: FC<NextButtonProps> = () => {
  const { setPrevTrack } = audioPlayerStore;
  return <MdSkipPrevious className="pointer" size={32} onClick={setPrevTrack} />;
};

export default observer(PrevButton);
