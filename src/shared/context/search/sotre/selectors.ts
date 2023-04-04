import { ISearchFilters } from "@shared/models";
import { ISearchState } from "./state";

export const selectPageSize = (state: ISearchState) => state.pageSize;
export const selectPageIndex = (state: ISearchState) => state.pageIndex;
export const selectSearchText = (state: ISearchState) => state.searchText;
export const selectSortByAttribute = (state: ISearchState) => state.sortOrder;
export const getSelectedGenre = (state: ISearchState) => state.selectedGenre;
export const getSelectedPlatform = (state: ISearchState) =>
  state.selectedPlatform;

export const selectSearchFilters = (state: ISearchState): ISearchFilters => {
  return {
    sortOrder: state.sortOrder,
    searchText: state.searchText,
    genre: state.selectedGenre,
    platform: state.selectedPlatform,
    pageSize: state.pageSize,
  };
};
