// 筛选出的内容组件

// 导入React
import React from "react";
// 导入hooks
import useStatusText from "../../hooks/useStatusText";

interface FilteredItemsProps {
  filteredItems: {
    icon?: string;
    title: string;
    lastUpdate: string;
    status: string;
  }[];
}

const FilteredItems: React.FC<FilteredItemsProps> = ({ filteredItems }) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
      {filteredItems.map((item, itemIdx) => (
        <div
          key={itemIdx}
          className="group overflow-hidden rounded-xl border border-gray-200 hover:border-gary-300 hover:shadow-lg transition duration-300 ease-in-out transform-gpu"
        >
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <img
              src={item.icon}
              alt={item.title}
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900 group-hover:text-sun transition duration-300 ease-in-out transform-gpu">
              {item.title}
            </div>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">最新更新时间</dt>
              <dd className="text-gray-700">
                <span>{item.lastUpdate}</span>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">完成状态</dt>
              <dd className="flex items-start gap-x-2">
                <div
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                    useStatusText(item.status).color
                  }`}
                >
                  {useStatusText(item.status).text}
                </div>
              </dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
};

export default FilteredItems;
