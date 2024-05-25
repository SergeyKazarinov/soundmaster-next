'use client';

import { FC, memo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { PaginationList } from '@/features/pagination-list';
import { getQueryParams } from '@/shared/lib/url/getQueryParams';

interface PaginationProps {
  activeNumber: number;
  totalItems: number;
}

const Pagination: FC<PaginationProps> = ({ activeNumber, totalItems }) => {
  const router = useRouter();
  const path = usePathname();

  const handleChange = useCallback(
    (pageNumber: number) => {
      const queryParams = getQueryParams({ page: String(pageNumber) });
      router.push(`${path}${queryParams}`);
    },
    [router, path]
  );

  return <PaginationList activeNumber={activeNumber} totalItems={totalItems} onChangePaginationItem={handleChange} />;
};

export default memo(Pagination);
