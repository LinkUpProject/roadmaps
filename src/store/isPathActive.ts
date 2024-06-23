{
  /*
    判断当前路径是否为激活状态
    传入：Astro获取的路径
    传出：boolean 
    */
}
import { proxy } from "valtio";

interface IsPathActive {
  currentPath: string;
  isPathActive(path: string): boolean;
}

export const isPathActiveStore = proxy<IsPathActive>({
  currentPath: "",
  isPathActive(path: string): boolean {
    const normalize = (p: string): string => p.replace(/(^\/+|\/+$)/g, "");
    return normalize(this.currentPath) === normalize(path);
  },
});
