// 搜索框输入框组件

// 导入第三方库
import { ComboboxInput } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
// 导入Hooks
import { useSearch } from "../../hooks/useSearchFilter";

const SearchInput = () => {
  const { setSearchText } = useSearch();

  return (
    <div className="relative">
      <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
      <ComboboxInput
        autoFocus
        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm outline-none border-none"
        placeholder="让我们搜索一些内容吧..."
        onChange={(event) => setSearchText(event.target.value)}
        onBlur={() => setSearchText("")}
      />
    </div>
  );
};
export default SearchInput;
