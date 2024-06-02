import { FC, memo, MouseEvent, ReactNode } from 'react';

import { downloadFile } from '../../api/downloadFile';

// import styles from './DownloadButton.module.scss';

type TTypeButton = 'link' | 'button';

interface DownloadButtonProps {
  children?: ReactNode;
  url: string;
  type?: TTypeButton;
  fileName?: string;
}

const DownloadButton: FC<DownloadButtonProps> = ({ children = 'скачать', url, type = 'button', fileName = 'file' }) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    downloadFile(url, fileName);
  };

  if (type === 'link') {
    return (
      <a href={url} target="_blank" download rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={(e) => handleClick(e)}>
      {children}
    </button>
  );
};

export default memo(DownloadButton);
