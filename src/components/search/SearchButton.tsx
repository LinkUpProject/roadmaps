// 搜索框组件

// 导入 搜索图标组件
import SearchIcon from "./SearchIcon";
// 导入 全局状态
import { isSearchStore } from "../../store/isSearch";

const SearchInput = () => {
  return (
    <button
      aria-label="搜索"
      onClick={isSearchStore.setIsSearch}
      className="flex justify-center items-center px-4 py-[6px] rounded-full border border-neutral-100/50 shadow-sm"
    >
      <SearchIcon size={18} />
    </button>
  );
};
export default SearchInput;
