// 搜索框置顶框架（因为不能在astro中使用hooks）

// 导入第三方库
import { motion, AnimatePresence } from "framer-motion";
// 导入 全局状态管理
import { useSnapshot } from "valtio";
import { isSearchStore } from "../../store/isSearch";
// 导入组件
import Search from "./Search";

const SearchToTop = () => {
  const isSearchSnapshot = useSnapshot(isSearchStore);
  return (
    <AnimatePresence>
      {isSearchSnapshot.isSearch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex justify-center h-screen pt-24 pb-10"
        >
          <Search />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchToTop;
