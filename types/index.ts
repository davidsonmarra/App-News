export { ITheme } from "./theme";

export interface NewsDTO {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: Date;
}
export interface IRootState {
  news: {
    newsData: NewsDTO[];
    isEnd: boolean;
  };
}

export interface IFormSearch {
  search: string;
  language: string;
}
