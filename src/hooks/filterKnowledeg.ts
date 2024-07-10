// 筛选知识库

import { useState } from "react";
import { knowledgeClassify } from "../data/knowledgeClassify";

const useFilterKnowledge = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>(["全选"]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "全选") {
      if (selectedCategory.includes("全选")) {
        setSelectedCategory([]);
      } else {
        setSelectedCategory(["全选"]);
      }
    } else {
      setSelectedCategory((prev) => {
        if (prev.includes(value)) {
          return prev.filter((category) => category !== value);
        } else {
          return prev.filter((category) => category !== "全选").concat(value);
        }
      });
    }
  };

  const filteredItems = selectedCategory.includes("全选")
    ? knowledgeClassify.flatMap((category) => category.items)
    : knowledgeClassify
        .filter((category) => selectedCategory.includes(category.title))
        .flatMap((category) => category.items);

  return { selectedCategory, handleCategoryChange, filteredItems };
};

export default useFilterKnowledge;
