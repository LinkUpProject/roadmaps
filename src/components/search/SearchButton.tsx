{
  /*搜索框组件 */
}
{
  /*导入 第三方组件 */
}
import { NavbarContent } from "@nextui-org/react";
{
  /*导入 搜索图标组件 */
}
import { SearchIcon } from "./SearchIcon";
{
  /*导入 全局状态 */
}
import { isSearchStore } from "../../store/isSearch";

interface SearchInputProps {
  justify?: "center" | "start" | "end";
}

const SearchInput: React.FC<SearchInputProps> = ({ justify }) => {
  return (
    <NavbarContent as="div" className="items-center" justify={justify}>
      <button
        onClick={isSearchStore.setIsSearch}
        className="flex items-center pl-2 pr-8 py-2 rounded-xl text-default-500 bg-default-100"
      >
        <SearchIcon size={18} />
        <span className="ml-2">搜索一些东西...</span>
      </button>
    </NavbarContent>
  );
};
export default SearchInput;
