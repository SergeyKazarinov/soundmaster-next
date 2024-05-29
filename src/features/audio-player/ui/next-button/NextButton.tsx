'use client';

import { FC } from 'react';
import { MdSkipNext } from 'react-icons/md';
import { observer } from 'mobx-react-lite';

import audioPlayerStore from '../../model/store/audioPlayerStore';

interface NextButtonProps {}

const NextButton: FC<NextButtonProps> = () => {
  const { setNextTrack } = audioPlayerStore;
  return <MdSkipNext className="pointer" size={32} onClick={setNextTrack} />;
};

export default observer(NextButton);
