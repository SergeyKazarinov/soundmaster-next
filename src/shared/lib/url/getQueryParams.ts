import { ISearchParams } from '@/shared/types/types';

export const getQueryParams = (params: ISearchParams) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, String(value));
    }
  });

  return `?${searchParams.toString()}`;
};
