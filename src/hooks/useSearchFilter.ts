// 搜索筛选Hook
import { useSnapshot } from "valtio";
import { isSearchStore } from "../store/isSearch";

const useSearch = () => {
  const { allContext, isSearch, searchText } = useSnapshot(isSearchStore);

  const filteredData = (): Post[] => {
    if (searchText) {
      return (allContext as Post[]).filter((post: Post) =>
        post.data.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return allContext as Post[];
  };

  return {
    filteredData,
    isSearch,
    searchText,
    setIsSearch: isSearchStore.setIsSearch,
    setSearchText: (text: string) => (isSearchStore.searchText = text),
  };
};
export default useSearch;
