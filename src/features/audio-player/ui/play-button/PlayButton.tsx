'use client';

import { FC, useState } from 'react';
import { IoMdPlayCircle } from 'react-icons/io';
import { MdPauseCircle } from 'react-icons/md';
import { observer } from 'mobx-react-lite';

interface NextButtonProps {}

const PlayButton: FC<NextButtonProps> = () => {
  const [isPlay, setIsPlay] = useState(false);

  const handlePlayButton = () => {
    setIsPlay((prev) => !prev);
  };
  return (
    <>
      {isPlay && <MdPauseCircle className="pointer" size={50} onClick={handlePlayButton} />}

      {!isPlay && <IoMdPlayCircle className="pointer" size={50} onClick={handlePlayButton} />}
    </>
  );
};

export default observer(PlayButton);
