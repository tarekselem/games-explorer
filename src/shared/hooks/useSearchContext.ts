import { useContext, useMemo } from "react";
import SearchContext from "../context/search/search-context";
import * as selector from "../context/search/sotre/selectors";

export const useSearchContext = () => {
  const { state } = useContext(SearchContext);

  const context = useMemo(() => {
    return {
      searchFilters: selector.selectSearchFilters(state),
      genre: selector.getSelectedGenre(state),
      platform: selector.getSelectedPlatform(state),
      pageSize: selector.getPageSize(state),
    };
  }, [state]);

  return context;
};
