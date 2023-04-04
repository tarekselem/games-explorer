import { IGenre, IPlatform } from "@shared/models";

export enum SearchActionTypes {
  setPageSize = "SET_PAGE_SIZE",
  setPageIndex = "SET_PAGE_INDEX",
  SetSearchText = "SET_SEARCH_TEXT",
  setSortByAttribute = "SET_SORT_BY_ATTRIBUTE",
  setSelectedGenre = "SET_SELECTED_GENRE",
  setSelectedPlatform = "SET_SELECTED_PLATFORM",
}

// IAction<{ pageSize: string }> is a generic type
export class SetPageSizeAction {
  readonly type = SearchActionTypes.setPageSize;
  constructor(public pageSize: number) {}
}

export class SetPageIndexAction {
  readonly type = SearchActionTypes.setPageIndex;
  constructor(public pageIndex: number) {}
}

export class SetSearchTextAction {
  readonly type = SearchActionTypes.SetSearchText;
  constructor(public searchText: string) {}
}

export class SetSortByAttributeAction {
  readonly type = SearchActionTypes.setSortByAttribute;
  constructor(public sortByAttribute: string) {}
}

export class SetSelectedGenreAction {
  readonly type = SearchActionTypes.setSelectedGenre;
  constructor(public selectedGenre?: IGenre) {}
}

export class SetSelectedPlatformAction {
  readonly type = SearchActionTypes.setSelectedPlatform;
  constructor(public selectedPlatform?: IPlatform) {}
}

export type SearchAction =
  | SetPageSizeAction
  | SetPageIndexAction
  | SetSearchTextAction
  | SetSortByAttributeAction
  | SetSelectedGenreAction
  | SetSelectedPlatformAction;
