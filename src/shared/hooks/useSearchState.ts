import { useContext, useMemo } from "react";
import SearchContext from "../contexts/search/search-context";
import * as selector from "../contexts/search/sotre/selectors";

export const useSearchState = () => {
  const { state: contextState } = useContext(SearchContext);

  const state = useMemo(() => {
    return {
      searchFilters: selector.selectSearchFilters(contextState),
      genre: selector.getSelectedGenre(contextState),
      platform: selector.getSelectedPlatform(contextState),
      pageSize: selector.getPageSize(contextState),
    };
  }, [contextState]);

  return state;
};
