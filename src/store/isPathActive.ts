//当前路径状态

import { proxy } from "valtio";

interface IsPathActive {
  currentPath: string;
}

export const isPathActiveStore = proxy<IsPathActive>({
  currentPath: "/",
});
