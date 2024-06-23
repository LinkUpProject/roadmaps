import { proxy } from "valtio";

interface ThemeStore {
  isLight: boolean;
  theme: "light" | "dark";
  setTheme: () => void;
}

const themeStore = proxy<ThemeStore>({
  isLight: true,
  theme: "light", // 默认值设置为 'light'
  setTheme: () => {
    themeStore.isLight = !themeStore.isLight;
    themeStore.theme = themeStore.isLight ? "light" : "dark";
  },
});

export default themeStore;
