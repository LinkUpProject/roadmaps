// 筛选栏组件

// 导入 React
import React from "react";
// 导入数据
import { knowledgeClassify } from "../../data/knowledgeClassify";

interface FilterFormProps {
  selectedCategory: string[];
  handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({
  selectedCategory,
  handleCategoryChange,
}) => {
  return (
    <form className="space-y-10 divide-y divide-gray-200">
      <div>
        <fieldset>
          <legend className="block text-sm font-medium text-gray-900">
            分类
          </legend>
          <div className="space-y-3 pt-6">
            <div className="flex items-center">
              <input
                id="all"
                name="category"
                type="checkbox"
                value="全选"
                checked={selectedCategory.includes("全选")}
                onChange={handleCategoryChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="all" className="ml-3 text-sm text-gray-600">
                全选
              </label>
            </div>
            {knowledgeClassify.map((category, categoryIdx) => (
              <div key={category.title} className="flex items-center">
                <input
                  id={`category-${categoryIdx}`}
                  name="category"
                  type="checkbox"
                  value={category.title}
                  checked={selectedCategory.includes(category.title)}
                  onChange={handleCategoryChange}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={`category-${categoryIdx}`}
                  className="ml-3 text-sm text-gray-600"
                >
                  {category.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </form>
  );
};

export default FilterForm;
