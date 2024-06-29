// 手机模式下菜单组件

// 导入 第三方组件
import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
// 导入 全局状态管理
import { useSnapshot } from "valtio";
import { isPathActiveStore } from "../../../store/isPathActive";
// 导入 数据
import menuItems from "../../../data/menuItems";

const MenuMobile: React.FC = () => {
  const isPathActiveSnapshot = useSnapshot(isPathActiveStore);
  return (
    <NavbarMenu>
      {menuItems.map((item) => (
        <NavbarMenuItem key={item.id}>
          <Link
            className={`w-full ${
              isPathActiveSnapshot.currentPath === item.link
                ? "text-pink-500"
                : "text-foreground"
            }`}
            href={item.link}
            size="lg"
          >
            {item.label}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};
export default MenuMobile;
