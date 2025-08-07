"use client";
import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import React from "react";

// نکته: این تایپ هم پراپ‌های motion و هم React را پشتیبانی می‌کند
interface ZoomOutOnScrollProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  amount?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  initialScale?: number;
}

const ZoomOutOnScroll: React.FC<ZoomOutOnScrollProps> = ({
  children,
  amount = 0.4,
  duration = 0.7,
  delay = 0,
  once = false,
  initialScale = 1.2,
  ...rest
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount, once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: initialScale }}
      animate={
        inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: initialScale }
      }
      transition={{ duration, delay, ease: [0.33, 1, 0.68, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ZoomOutOnScroll;
