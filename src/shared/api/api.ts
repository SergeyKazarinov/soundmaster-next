import { getQueryParams } from '../lib/url/getQueryParams';

interface IApiProps {
  category: string;
  params: Record<string, string>;
}

export const categoryAPI = async ({ category, params }: IApiProps) => {
  try {
    const URL = getQueryParams(params);

    return await fetch(`${process.env.API_BASE_URL}/songs/getStyle/${category}${URL ?? `?page=1`}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.message);
        } else {
          return res;
        }
      });
  } catch (error: any) {
    console.log('Error request API', JSON.stringify(error.message, null, 2));
    return false;
  }
};
