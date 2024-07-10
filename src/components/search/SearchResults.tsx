// 搜索结果组件

// 导入第三方库
import { ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { FolderIcon } from "@heroicons/react/24/outline";
// 导入Hooks
import useSearchFilter from "../../hooks/useSearchFilter";

const SearchResults = () => {
  const { filteredData } = useSearchFilter();

  return filteredData().length > 0 ? (
    <ComboboxOptions
      static
      as="ul"
      className="max-h-80 transform-gpu scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
    >
      <li>
        <ul className="-mx-4 text-sm text-gray-700">
          {filteredData().map((item: Post) => (
            <ComboboxOption
              as="li"
              key={item.id}
              value={item}
              className={({ focus }) =>
                `flex cursor-default select-none items-center px-4 py-2 ${focus && "bg-[#ff7c7c] text-white}"}`}
            >
              {({ focus }) => (
                <>
                  <FolderIcon
                    className={`h-6 w-6 flex-none
                      ${focus ? "text-white" : "text-gray-400"}`}
                    aria-hidden="true"
                  />
                  <span className="ml-3 flex-auto truncate">
                    {item.data.title}
                  </span>
                </>
              )}
            </ComboboxOption>
          ))}
        </ul>
      </li>
    </ComboboxOptions>
  ) : null;
};

export default SearchResults;
