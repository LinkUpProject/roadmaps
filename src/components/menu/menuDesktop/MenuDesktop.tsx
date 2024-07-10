// 桌面模式下菜单组件

// 导入 第三方组件
import { NavbarContent, NavbarItem, Link } from "@nextui-org/react";
// 导入 全局状态管理
import { useSnapshot } from "valtio";
import { isPathActiveStore } from "../../../store/isPathActive";
// 导入 数据
import menuItems from "../../../data/menuItems";

interface MenuDesktopProps {
  justify?: "center" | "start" | "end";
}

const MenuDesktop: React.FC<MenuDesktopProps> = ({ justify }) => {
  const isPathActiveSnapshot = useSnapshot(isPathActiveStore);
  return (
    <NavbarContent className="hidden sm:flex gap-6" justify={justify}>
      {menuItems.map((item) => (
        <NavbarItem key={item.id}>
          <Link
            href={item.link}
            className={`text-black ${
              isPathActiveSnapshot.currentPath === item.link
                ? "text-pink-500 dark:text-pink-500/90 drop-shadow-[0_0_10px_rgba(236,72,153,1)]"
                : "hover:text-pink-500 dark:text-white/90 hover:drop-shadow-[0_0_10px_rgba(236,72,153,1)]"
            }`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
};
export default MenuDesktop;
