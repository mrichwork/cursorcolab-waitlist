import Image from "next/image";
import { motion } from "framer-motion";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-0 z-[50] flex items-center justify-start m-4">
      <motion.div variants={itemVariants}>
        <Image
          src="/logo-copy.png"
          alt="CursorCoLab Logo"
          width={150}
          height={33}
          className="h-auto w-40"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
