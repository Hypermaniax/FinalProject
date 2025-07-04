import { motion } from "framer-motion";

export default function WrapperContent({ children }) {
  return (
    <motion.div

      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 * 0.1 }}
      className="max-w-7xl  mx-auto"
    >
      {children}
    </motion.div>
  );
}
