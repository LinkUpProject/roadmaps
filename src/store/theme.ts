// 切换网站主题状态（待完善逻辑）
// TODO：根据用户系统主题自动切换主题（dark/light），优先级：1

import { proxy } from "valtio";

interface ThemeStore {
  isLight: boolean;
  theme: "light" | "dark";
  setTheme: () => void;
}

export const themeStore = proxy<ThemeStore>({
  isLight: true,
  theme: "light", // 默认值设置为 'light'
  setTheme: () => {
    themeStore.isLight = !themeStore.isLight;
    themeStore.theme = themeStore.isLight ? "light" : "dark";
  },
});
