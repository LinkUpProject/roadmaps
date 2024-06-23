{
  /*Header 组件 */
}
{
  /*导入 React */
}
import React, { useState, useEffect } from "react";
{
  /*导入 第三方库 */
}
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";
{
  /*导入 组件 */
}
import Logo from "../logo/Logo";
import SearchInput from "../search/SearchButton";
import MenuMobile from "../menu/menuMobile/MenuMobile";
import MenuDesktop from "../menu/menuDesktop/MenuDesktop";
import ThemeToggle from "../themeToggle/ThemeToggle";
{
  /*导入 全局状态管理 */
}
import { isPathActiveStore } from "../../store/isPathActive";
import { isSearchStore } from "../../store/isSearch";

interface HeaderComponentProps {
  currentPath: string;
  posts: Post[];
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  currentPath,
  posts,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  {
    /*获取url并存入状态 */
  }
  useEffect(() => {
    isPathActiveStore.currentPath = currentPath;
    isSearchStore.allContext = posts;
  }, [currentPath, posts]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/70 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 dark:bg-[#222222]/70"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      {/*桌面模式的菜单栏 */}
      <MenuDesktop justify="center" />
      {/*搜索框 */}
      <SearchInput justify="end" />
      <ThemeToggle  />
      {/*手机模式的菜单栏 */}
      <MenuMobile />
    </Navbar>
  );
};

export default HeaderComponent;
