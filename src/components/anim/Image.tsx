// components/AnimatedImage.tsx
"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

type AnimatedImageProps = ImageProps & {
  /**
   * مدت زمان افکت (ثانیه)
   * @default 0.7
   */
  duration?: number;
  /**
   * شدت بزرگ‌نمایی اولیه
   * @default 0.94
   */
  initialScale?: number;
};

export default function AnimatedImage({
  duration = 0.7,
  initialScale = 0.94,
  ...rest
}: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration, ease: [0.43, 0.13, 0.23, 0.96] }}
      style={{
        display: "inline-block",
        overflow: "hidden",
        borderRadius: "inherit",
      }}
    >
      <Image {...rest} />
    </motion.div>
  );
}
