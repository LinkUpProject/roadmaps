{
  /*内容搜索组件*/
}

{
  /*导入React */
}
import { useMemo, useCallback } from "react";
{
  /*导入 第三方库 */
}
import { Link, Input } from "@nextui-org/react";
{
  /*导入 全局状态 管理 */
}
import { useSnapshot } from "valtio";
import { isSearchStore } from "../../store/isSearch";
{
  /*导入 组件 */
}
import { SearchIcon } from "./SearchIcon";
import Notification from "../notification/Notification";

const Search: React.FC = () => {
  const { allContext, isSearch, searchText, setIsSearch } =
    useSnapshot(isSearchStore);

  {
    /*匹配出的数据 */
  }
  const filteredData = useMemo(() => {
    if (searchText) {
      return allContext.filter((post: Post) =>
        post.data.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return allContext;
  }, [searchText, allContext]);

  {
    /*转跳弹窗 */
  }
  const handleLinkClick = useCallback((describe: string, title: string) => {
    Notification({ describe, title });
    isSearchStore.setIsSearch();
  }, []);

  const containerClass = useMemo(
    () =>
      isSearch
        ? "fixed inset-0 flex justify-center w-screen h-screen pt-24 pb-10 bg-white/60 backdrop-blur-sm text-xl z-50"
        : "",
    [isSearch]
  );

  const stopPropagation = useCallback(
    (e: React.MouseEvent) => e.stopPropagation(),
    []
  );

  const handleButtonClick = useCallback(() => setIsSearch(), []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    isSearchStore.searchText = e.target.value;
  }, []);

  return (
    <div className={`${containerClass}`} onClick={stopPropagation}>
      <div className="flex flex-col max-w-[800px] sm:min-w-[600px] mx-4 sm:mx-0 py-4 px-6 bg-white rounded-2xl shadow-xl">
        <div className="flex justify-between border-b border-gray-50">
          <div className="pl-2 text-xl font-bold text-pink-500">搜索</div>
          <button
            className="mb-1 p-2.5 rounded-xl text-black hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all duration-500 ease-in-out transform-gpu"
            onClick={handleButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="relative">
          <Input
            classNames={{
              base: "max-w-full h-10 my-4",
              mainWrapper: "h-full",
              input: "text-lg bg-transparent outline-none border-none",
              innerWrapper: "pl-2 bg-transparent",
              inputWrapper:
                "h-full font-normal text-default-500 bg-white hover:bg-white focus-within:!bg-white border border-gary-300 transition duration-500 ease-in-out transform-gpu hover:border-[#425aef] active:border-[#425aef] focus:outline-none focus:border-[#425aef]",
            }}
            placeholder="请输入关键词快速查找..."
            size="sm"
            value={searchText}
            onChange={handleChange}
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </div>
        <div className="h-fit overflow-y-auto">
          {filteredData.map((item: Post) => (
            <div
              className="text-lg font-bold text-black my-3 hover:text-pink-500"
              key={item.id}
            >
              <Link
                href={`/blog/${item.slug}/`}
                onClick={() => handleLinkClick("文章", item.data.title)}
                showAnchorIcon
              >
                {item.data.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Search;
