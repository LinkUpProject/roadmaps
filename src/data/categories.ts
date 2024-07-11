// 知识卡片数据（大分类（小分类、完成状态、最后更新时间、图标））
// 暂时使用方案：不方便实时更新
// src/data/data.ts

// Test
export interface Content {
  type: "article" | "video";
  data: string;
}

export interface RoadmapItem {
  name: string;
  displayName: string;
  content: Content;
}

export interface Subcategory {
  name: string;
  displayName: string;
  roadmap: RoadmapItem[];
}

export interface Category {
  name: string;
  displayName: string;
  subcategories: Subcategory[];
}

export const categories: Category[] = [
  {
    name: "frontend",
    displayName: "前端",
    subcategories: [
      {
        name: "react",
        displayName: "React",
        roadmap: [
          {
            name: "props",
            displayName: "Props",
            content: {
              type: "article",
              data: "/content/props.md",
            },
          },
          {
            name: "state",
            displayName: "State",
            content: {
              type: "video",
              data: "https://www.youtube.com/embed/example",
            },
          },
        ],
      },
      {
        name: "vue",
        displayName: "Vue",
        roadmap: [],
      },
      {
        name: "typeScript",
        displayName: "TypeScript",
        roadmap: [],
      },
      {
        name: "vite",
        displayName: "Vite",
        roadmap: [],
      },
      {
        name: "tailwindcss",
        displayName: "Tailwindcss",
        roadmap: [],
      },

      {
        name: "typeScript",
        displayName: "TypeScript",
        roadmap: [],
      },
      {
        name: "typeScript",
        displayName: "TypeScript",
        roadmap: [],
      },
    ],
  },
  {
    name: "backend",
    displayName: "后端",
    subcategories: [
      {
        name: "nodejs",
        displayName: "Node.js",
        roadmap: [],
      },
      {
        name: "golang",
        displayName: "Golang",
        roadmap: [],
      },
    ],
  },
  {
    name: "python",
    displayName: "Python",
    subcategories: [],
  },
  {
    name: "backend",
    displayName: "初中语文",
    subcategories: [],
  },
  {
    name: "backend",
    displayName: "初中数学",
    subcategories: [],
  },
  {
    name: "backend",
    displayName: "初中英语",
    subcategories: [],
  },
  {
    name: "backend",
    displayName: "高中语文",
    subcategories: [],
  },
  {
    name: "backend",
    displayName: "高中数学",
    subcategories: [],
  },
  {
    name: "backend",
    displayName: "高中英语",
    subcategories: [],
  },
];
