import { useSnapshot } from "valtio";
import { isSearchStore } from "../../store/isSearch";
import { motion, AnimatePresence } from "framer-motion";
import Search from "./Search";

export default function SearchToTop() {
  const isSearchSnapshot = useSnapshot(isSearchStore);
  return (
    <AnimatePresence>
      {isSearchSnapshot.isSearch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed inset-0 z-50 flex justify-center h-screen pt-24 pb-10"
        >
          <Search />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
