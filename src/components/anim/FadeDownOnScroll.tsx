"use client";
import { motion, useInView, HTMLMotionProps } from "framer-motion";
import React, { useRef } from "react";

interface FadeDownOnScrollProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  amount?: number; // چه درصدی از عنصر داخل view باشه اجرا شه (۰.۵ = نصف)
  duration?: number;
  delay?: number;
  once?: boolean; // فقط یک بار اجرا شه
  offset?: number; // فاصله شروع Y (پیکسل)
}

const FadeDownOnScroll: React.FC<FadeDownOnScrollProps> = ({
  children,
  amount = 0.5,
  duration = 0.7,
  delay = 0,
  once = true,
  offset = -40, // مقدار منفی یعنی حرکت از بالا به پایین
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
      transition={{ duration, delay, ease: [0.33, 1, 0.68, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeDownOnScroll;
