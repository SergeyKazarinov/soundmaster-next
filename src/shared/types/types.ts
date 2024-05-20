export interface ICategory {
  _id: string;
  name: string;
  _v: number;
  createdAt: string;
  imageURL: string;
  styleDir: string;
  updatedAt: string;
}

export interface ICategoryResolve {
  success: boolean;
  data: ICategory[];
  length: number;
}
