import Image from "next/image";
import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-secondary/30 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming soon!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Image
          src="/logo-copy.png"
          alt="CursorCoLab Logo"
          width={500}
          height={109}
          className="mx-auto h-auto w-full max-w-2xl"
          priority
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-foreground/70 sm:text-lg"
          text="Join the waitlist to get early access to our developer-focused platform and receive updates on our progress!"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
