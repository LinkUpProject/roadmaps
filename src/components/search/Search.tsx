{
  /*搜索框组件 */
}

{
  /*导入第三方库 */
}
import classNames from "classnames";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";

import {
  ExclamationTriangleIcon,
  FolderIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
{
  /*导入 全局状态 管理 */
}
import { useSnapshot } from "valtio";
import { isSearchStore } from "../../store/isSearch";

export default function Search() {
  const { allContext, isSearch, searchText, setIsSearch } =
    useSnapshot(isSearchStore);
  {
    /*匹配出的数据 */
  }
  const filteredData = (): Post[] => {
    if (searchText) {
      return (allContext as Post[]).filter((post: Post) =>
        post.data.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return allContext as Post[];
  };

  return (
    <div className="fixed inset-0 flex justify-center w-screen h-screen pt-24 pb-10 bg-white/60 backdrop-blur-sm">
      <Dialog
        className="relative z-50"
        open={isSearch}
        onClose={() => {
          setIsSearch();
          isSearchStore.searchText = "";
        }}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <DialogPanel
            transition
            className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <Combobox
              onChange={(item: Post) => {
                if (item) {
                  window.location.href = `/blog/${item.slug}/`;
                }
              }}
            >
              <div className="relative">
                <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <ComboboxInput
                  autoFocus
                  className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm outline-none border-none"
                  placeholder="让我们搜索一些内容吧..."
                  onChange={(event) =>
                    (isSearchStore.searchText = event.target.value)
                  }
                  onBlur={() => (isSearchStore.searchText = "")}
                />
              </div>
              {filteredData().length > 0 && (
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
                            classNames(
                              "flex cursor-default select-none items-center px-4 py-2",
                              focus && "bg-sun/90 text-white"
                            )
                          }
                        >
                          {({ focus }) => (
                            <>
                              <FolderIcon
                                className={classNames(
                                  "h-6 w-6 flex-none",
                                  focus ? "text-white" : "text-gray-400"
                                )}
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
              )}

              {searchText === "?" && (
                <div className="px-6 py-14 text-center text-sm sm:px-14">
                  <LifebuoyIcon
                    className="mx-auto h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <p className="mt-4 font-semibold text-gray-900">
                    ✨ 搜索说明书
                  </p>
                  <p className="mt-2 text-gray-500">
                    您可以使用它来查找本站上的内容，如输入：高中语文
                  </p>
                </div>
              )}

              {searchText !== "?" && filteredData().length === 0 && (
                <div className="px-6 py-14 text-center text-sm sm:px-14">
                  <ExclamationTriangleIcon
                    className="mx-auto h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <p className="mt-4 font-semibold text-gray-900">
                    没有找到您要搜索的内容哟
                  </p>
                  <p className="mt-2 text-gray-500">
                    请您调整搜索内容重试一次吧
                  </p>
                </div>
              )}

              <div className="flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700">
                请输入{" "}
                <kbd
                  className={classNames(
                    "mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2",
                    searchText === "?"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-gray-400 text-gray-900"
                  )}
                >
                  ?
                </kbd>{" "}
                查看搜索指南.
              </div>
            </Combobox>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
