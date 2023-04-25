import { useContext } from "react";
import { IGenre, IPlatform } from "@shared/models";
import SearchContext from "../contexts/search/search-context";
import * as actions from "../contexts/search/sotre/actions";

export const useSearchActions = () => {
  const { dispatch } = useContext(SearchContext);

  const selectGenre = (genre: IGenre) =>
    dispatch(new actions.SetSelectedGenreAction(genre));

  const selectPlatform = (platform: IPlatform) =>
    dispatch(new actions.SetSelectedPlatformAction(platform));

  const setSearchText = (searchText: string) =>
    dispatch(new actions.SetSearchTextAction(searchText));

  const setSortOrder = (sortOrder: string) =>
    dispatch(new actions.SetSortByAttributeAction(sortOrder));

  return {
    selectGenre,
    selectPlatform,
    setSearchText,
    setSortOrder,
  };
};
