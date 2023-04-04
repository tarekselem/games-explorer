import { PropsWithChildren, useReducer } from "react";
import SearchContext from "./search-context";
import { initialState, searchReducer } from "./sotre";

export const SearchStateProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const value = { state: { ...initialState, ...state }, dispatch };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
