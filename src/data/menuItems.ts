// 导航栏数据

const menuItems: MenuItems[] = [
  { id: 1, label: "学习路线", link: "/" },
  { id: 2, label: "AI 路线", link: "/ai" },
  { id: 3, label: "关于我们", link: "/about" },
];

interface MenuItems {
  id: number;
  label: string;
  link: string;
}

export default menuItems;
