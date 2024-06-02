import { CSSProperties } from 'react';

export interface ICategory {
  _id: string;
  name: string;
  _v: number;
  createdAt: string;
  imageURL: string;
  styleDir: string;
  updatedAt: string;
}

export interface ISong {
  _id: string;
  name: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
  imageURL: string;
  songUrl: string;
  album: string;
  artist: string;
  style: string;
  category: string;
}

export interface ISongsResolve {
  data: ISong[];
  success: boolean;
  length: number;
}
export interface ICategoryResolve {
  success: boolean;
  data: ICategory[];
  length: number;
}

export interface ISearchParams {
  [key: string]: string | string[] | undefined;
}

export type TMods = Record<string, boolean | string | undefined>;

export type CSSVariables = CSSProperties & { [key: string]: string | number };
