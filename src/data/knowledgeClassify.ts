// 知识卡片数据（大分类（小分类、完成状态、最后更新时间、图标））
// 暂时使用方案：不方便实时更新

const knowledgeClassify = [
  {
    title: "前端",
    items: [
      {
        title: "Next.js",
        status: "1",
        lastUpdate: "2024-01-01",
        icon: "https://curriculum.s3-us-east-1.ossfiles.com/tech/next.avif",
      },
      {
        title: "React",
        status: "3",
        lastUpdate: "2024-01-01",
        icon: "https://curriculum.s3-us-east-1.ossfiles.com/tech/react.avif",
      },
      {
        title: "Vue",
        status: "2",
        lastUpdate: "2024-01-01",
        icon: "https://curriculum.s3-us-east-1.ossfiles.com/tech/vue.avif",
      },
      {
        title: "TypeScript",
        status: "1",
        lastUpdate: "2024-01-01",
        icon: "https://curriculum.s3-us-east-1.ossfiles.com/tech/typescript.avif",
      },
      {
        title: "Vite",
        status: "1",
        lastUpdate: "2024-01-01",
        icon: "https://curriculum.s3-us-east-1.ossfiles.com/tech/vite.avif",
      },
      {
        title: "Golang",
        status: "1",
        lastUpdate: "2024-01-01",
        icon: "https://curriculum.s3-us-east-1.ossfiles.com/tech/golang.avif",
      },
      {
        title: "Tailwindcss",
        status: "1",
        lastUpdate: "2024-01-01",
        icon: "https://curriculum.s3-us-east-1.ossfiles.com/tech/tailwindcss.avif",
      },
      {
        title: "Node.js",
        status: "1",
        lastUpdate: "2024-01-01",
        icon: "https://curriculum.s3-us-east-1.ossfiles.com/tech/node.avif",
      },
      {
        title: "Python",
        status: "1",
        lastUpdate: "2024-01-01",
        icon: "https://curriculum.s3-us-east-1.ossfiles.com/tech/python.avif",
      },
    ],
  },
  {
    title: "初中",
    items: [
      { title: "初中语文", status: "1", lastUpdate: "2024-01-01", icon: "" },
      { title: "初中数学", status: "1", lastUpdate: "2024-01-01", icon: "" },
      { title: "初中英语", status: "1", lastUpdate: "2024-01-01", icon: "" },
    ],
  },
  {
    title: "高中",
    items: [
      { title: "高中语文", status: "1", lastUpdate: "2024-01-01", icon: "" },
      { title: "高中数学", status: "1", lastUpdate: "2024-01-01", icon: "" },
      { title: "高中英语", status: "1", lastUpdate: "2024-01-01", icon: "" },
    ],
  },
];

const keywords = knowledgeClassify
  .flatMap((category) => category.items.map((item) => item.title))
  .join(", ");

export { knowledgeClassify, keywords };
