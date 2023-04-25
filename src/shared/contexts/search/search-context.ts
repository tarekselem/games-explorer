import React from "react";
import { SearchAction } from "./sotre/actions";
import { initialState, ISearchState } from "./sotre/state";

export type SearchContextType = {
  state: ISearchState;
  dispatch: React.Dispatch<SearchAction>;
};

const SearchContext = React.createContext<SearchContextType>({
  state: initialState,
  dispatch: () => null,
});
export default SearchContext;
