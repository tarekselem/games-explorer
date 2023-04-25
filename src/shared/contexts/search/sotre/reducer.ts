import { Reducer } from "react";
import { SearchAction, SearchActionTypes } from "./actions";
import { ISearchState } from "./state";

export const searchReducer: Reducer<ISearchState, SearchAction> = (
  state,
  action
) => {
  switch (action.type) {
    case SearchActionTypes.setPageSize:
      return { ...state, pageSize: action.pageSize };
    case SearchActionTypes.setPageIndex:
      return { ...state, pageIndex: action.pageIndex };
    case SearchActionTypes.SetSearchText:
      return { ...state, searchText: action.searchText };
    case SearchActionTypes.setSortByAttribute:
      return { ...state, sortOrder: action.sortByAttribute };
    case SearchActionTypes.setSelectedGenre:
      return { ...state, selectedGenre: action.selectedGenre };
    case SearchActionTypes.setSelectedPlatform:
      return { ...state, selectedPlatform: action.selectedPlatform };

    default:
      return state;
  }
};
