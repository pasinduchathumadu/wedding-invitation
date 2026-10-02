import { motion } from "motion/react";
export function InvitationOpening() {
  return (
    <motion.div
      className="opening"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        ♥
      </motion.div>
    </motion.div>
  );
}
