import { getQueryParams } from '../lib/url/getQueryParams';
import { ISearchParams } from '../types/types';

interface IApiProps {
  url: string;
  params?: ISearchParams;
}

export const Api = async ({ url, params }: IApiProps) => {
  try {
    const queryParams = params ? getQueryParams(params) : '';

    return await fetch(`${process.env.API_BASE_URL}${url}${queryParams}`).then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    });
  } catch (error: any) {
    console.log('Error request API', JSON.stringify(error.message, null, 2));
    return false;
  }
};

interface ICategoryApiProps {
  category: string;
  params?: ISearchParams;
}

export const categoryAPI = <RES>({ category, params }: ICategoryApiProps): Promise<RES> =>
  Api({ url: `/songs/getStyle/${category}`, params });

interface ISongsApiProps {
  category: string;
  style: string;
  params?: ISearchParams;
}

export const songsAPI = <RES>({ category, style, params }: ISongsApiProps): Promise<RES> =>
  Api({ url: `/songs/getSongsStyle/${style}`, params: { ...params, category } });
