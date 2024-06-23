const knowledgeClassify = [
  {
    title: "前端",
    items: ["React"],
  },
  {
    title: "初中",
    items: ["初中语文", "初中数学", "初中英语"],
  },
  {
    title: "高中",
    items: ["高中语文", "高中数学", "高中英语"],
  },
];

const keywords = knowledgeClassify
  .flatMap((category) => category.items)
  .join(", ");

export { knowledgeClassify, keywords };
