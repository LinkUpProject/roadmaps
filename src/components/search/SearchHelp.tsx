// 搜索帮助组件

// 导入第三方库
import {
  LifebuoyIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
// 导入Hooks
import useSearchFilter from "../../hooks/useSearchFilter";

const SearchHelp = () => {
  const { searchText, filteredData } = useSearchFilter();

  if (searchText === "?") {
    return (
      <div className="px-6 py-14 text-center text-sm sm:px-14">
        <LifebuoyIcon
          className="mx-auto h-6 w-6 text-gray-400"
          aria-hidden="true"
        />
        <p className="mt-4 font-semibold text-gray-900">✨ 搜索说明书</p>
        <p className="mt-2 text-gray-500">
          您可以使用它来查找本站上的内容，如输入：高中语文
        </p>
      </div>
    );
  } else if (searchText !== "?" && filteredData().length === 0) {
    return (
      <div className="px-6 py-14 text-center text-sm sm:px-14">
        <ExclamationTriangleIcon
          className="mx-auto h-6 w-6 text-gray-400"
          aria-hidden="true"
        />
        <p className="mt-4 font-semibold text-gray-900">
          没有找到您要搜索的内容哟
        </p>
        <p className="mt-2 text-gray-500">请您调整搜索内容重试一次吧</p>
      </div>
    );
  }

  return null;
};
export default SearchHelp;
