'use client';

import { FC } from 'react';
import { IoMdPlayCircle } from 'react-icons/io';
import { MdPauseCircle } from 'react-icons/md';
import { observer } from 'mobx-react-lite';

import audioPlayerStore from '../../model/store/audioPlayerStore';

interface NextButtonProps {}

const PlayButton: FC<NextButtonProps> = () => {
  const { pauseTrack, playTrack, isPlay } = audioPlayerStore;
  const handlePlayButton = () => {
    if (isPlay) {
      pauseTrack();
    } else {
      playTrack();
    }
  };

  return (
    <>
      {isPlay && <MdPauseCircle className="pointer" size={50} onClick={handlePlayButton} />}

      {!isPlay && <IoMdPlayCircle className="pointer" size={50} onClick={handlePlayButton} />}
    </>
  );
};

export default observer(PlayButton);
