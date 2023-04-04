import { IGenre, IPlatform } from "@shared/models";

export interface ISearchState {
  pageSize: number;
  pageIndex: number;
  searchText: string;
  sortOrder: string;
  selectedGenre?: IGenre;
  selectedPlatform?: IPlatform;
}

export const initialState: ISearchState = {
  pageIndex: 0,
  pageSize: 10,
  searchText: "",
  sortOrder: "",
};
