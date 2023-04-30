import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { isDevelopement } from "@shared/utils";

export interface SearchFilters {
  sortOrder: string;
  pageSize: number;
  page: number;
  searchText?: string;
  genreId?: number;
  platformId?: number;
}

interface SearchQueryStore {
  searchQuery: SearchFilters;

  // ACTIONS
  setSearchText: (keyword: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const initialState: SearchFilters = {
  pageSize: 15,
  page: 1,
  sortOrder: "",
};

export const useSearchQueryStore = create<SearchQueryStore>((set) => ({
  searchQuery: { ...initialState },
  setSearchText: (searchText) =>
    set(({ searchQuery }) => ({ searchQuery: { ...searchQuery, searchText } })),
  setGenreId: (genreId) =>
    set(({ searchQuery }) => ({ searchQuery: { ...searchQuery, genreId } })),
  setPlatformId: (platformId) =>
    set(({ searchQuery }) => ({ searchQuery: { ...searchQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set(({ searchQuery }) => ({ searchQuery: { ...searchQuery, sortOrder } })),
}));

// if (isDevelopement()) {
//   mountStoreDevtool("searchQuery", useSearchQueryStore);
// }
