// 搜索框组件

// 导入第三方库
import {
  Combobox,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
// 导入Hooks
import { useSearch } from "../../hooks/useSearchFilter";
// 导入组件
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import SearchHelp from "./SearchHelp";

export default function Search() {
  const { isSearch, setIsSearch, setSearchText, searchText } = useSearch();

  return (
    <div className="fixed inset-0 flex justify-center w-screen h-screen pt-24 pb-10 bg-white/60 backdrop-blur-sm">
      <Dialog
        className="relative z-50"
        open={isSearch}
        onClose={() => {
          setIsSearch();
          setSearchText("");
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
              <SearchInput />
              <SearchResults />
              <SearchHelp />
              <div className="flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700">
                请输入{" "}
                <kbd
                  className={`mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2",
                    ${
                      searchText === "?"
                        ? "border-indigo-600 text-indigo-600"
                        : "border-gray-400 text-gray-900"
                    }
                  `}
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
