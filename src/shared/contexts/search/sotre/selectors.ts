import { ISearchFilters } from "@shared/models";
import { ISearchState } from "./state";

export const getPageSize = (state: ISearchState) => state.pageSize;
export const getPageIndex = (state: ISearchState) => state.pageIndex;
export const getSearchText = (state: ISearchState) => state.searchText;
export const getSortByAttribute = (state: ISearchState) => state.sortOrder;
export const getSelectedGenre = (state: ISearchState) => state.selectedGenre;
export const getSelectedPlatform = (state: ISearchState) =>
  state.selectedPlatform;

export const selectSearchFilters = (state: ISearchState): ISearchFilters => {
  return {
    sortOrder: state.sortOrder,
    searchText: state.searchText,
    genreId: state.selectedGenre?.id,
    platformId: state.selectedPlatform?.id,
    pageSize: state.pageSize,
  };
};
