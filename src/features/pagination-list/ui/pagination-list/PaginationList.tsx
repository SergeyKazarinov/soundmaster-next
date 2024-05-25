'use client';

import { FC, memo } from 'react';

import { Stack } from '@/shared/ui/stack';

import styles from './PaginationList.module.scss';

interface PaginationProps {
  totalItems: number;
  activeNumber: number;
  onChangePaginationItem(number: number): void;
}

const PaginationList: FC<PaginationProps> = ({ totalItems, activeNumber, onChangePaginationItem }) => {
  const handleChangePaginationItem = (number: number) => {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    onChangePaginationItem(number);
  };

  const numberPagination = Math.ceil(totalItems / 50);

  if (numberPagination <= 1) {
    return null;
  }

  return (
    <Stack gap="8">
      {activeNumber > 2 && (
        <button type="button" onClick={() => handleChangePaginationItem(1)}>
          {`<<`}
        </button>
      )}
      {activeNumber > 3 && (
        <button type="button" onClick={() => handleChangePaginationItem(2)}>
          {2}
        </button>
      )}
      {activeNumber > 3 && (
        <button type="button" disabled>
          ...
        </button>
      )}
      {activeNumber > 1 && (
        <button type="button" key={activeNumber - 1} onClick={() => handleChangePaginationItem(activeNumber - 1)}>
          {activeNumber - 1}
        </button>
      )}
      <button type="button" onClick={() => handleChangePaginationItem(activeNumber)} className={styles.activeButton}>
        {activeNumber}
      </button>

      {activeNumber < numberPagination && (
        <button type="button" key={activeNumber + 1} onClick={() => handleChangePaginationItem(activeNumber + 1)}>
          {activeNumber + 1}
        </button>
      )}
      {activeNumber < numberPagination - 3 && (
        <button type="button" disabled>
          ...
        </button>
      )}
      {activeNumber < numberPagination - 1 && numberPagination > 3 && (
        <button type="button" onClick={() => handleChangePaginationItem(numberPagination - 1)}>
          {numberPagination - 1}
        </button>
      )}
      {activeNumber < numberPagination - 1 && (
        <button type="button" onClick={() => handleChangePaginationItem(numberPagination)}>
          {`>>`}
        </button>
      )}
    </Stack>
  );
};

export default memo(PaginationList);
