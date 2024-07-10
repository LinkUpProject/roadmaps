// 搜索框状态

import { proxy } from "valtio";

interface IsSearch {
  searchText: string;
  isSearch: boolean;
  allContext: Post[];
  setIsSearch: () => void;
}

export const isSearchStore = proxy<IsSearch>({
  searchText: "",
  isSearch: false,
  allContext: [],
  setIsSearch: () => {
    isSearchStore.isSearch = !isSearchStore.isSearch;
  },
});
