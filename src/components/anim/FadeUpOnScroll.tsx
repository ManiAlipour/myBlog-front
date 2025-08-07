"use client";

import { motion, MotionProps } from "framer-motion";

type FadeUpOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  amount?: number;
  duration?: number;
} & MotionProps;

export default function FadeUpOnScroll({
  children,
  className,
  style,
  amount = 0.4,
  id = "",
  duration = 0.65,
  ...rest
}: FadeUpOnScrollProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: [0.43, 0, 0.2, 1] }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
