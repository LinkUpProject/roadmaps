// 导航栏数据

export const navItems: NavItems[] = [
  {
    name: "主页",
    link: "/",
  },
  {
    name: "学习路线",
    link: "/roadmap",
  },
  {
    name: "大学信息差",
    link: "/Information-gap",
  },
];

interface NavItems {
  name: string;
  link: string;
}
