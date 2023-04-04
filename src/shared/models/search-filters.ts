import { IGenre } from "./genre";
import { IPlatform } from "./platform";

export interface ISearchFilters {
  sortOrder: string;
  searchText: string;
  pageSize: number;
  genre?: IGenre;
  platform?: IPlatform;
}
