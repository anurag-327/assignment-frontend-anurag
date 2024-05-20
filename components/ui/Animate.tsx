import { AnimatePresence, motion } from "framer-motion";

export default function Animate({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
