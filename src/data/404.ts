// 404 页面数据

import { BookOpenIcon, GiftIcon } from "@heroicons/react/24/solid";

const notFound: NotFound = {
  title: "您访问的页面不存在！",
  description: "您可以回到 首页 并 检查网址 是否正确",
  backText: "回到主页",
  links: [
    {
      name: "社区文档",
      href: "/",
      description: "快来看看如何快速的使用知途吧",
      icon: BookOpenIcon,
    },
    {
      name: "Github",
      href: "https://github.com/LingJueYa/roadmaps",
      description: "让我们使用 爱 与 知识共享 填充这个世界",
      icon: GiftIcon,
    },
  ],
};

interface NotFound {
  title: string;
  description: string;
  backText: string;
  links: NotFoundLink[];
}

export default notFound;
