"use client";
import { HTMLMotionProps, motion, useAnimation, Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import React from "react";

interface ZoomInOnScrollProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  amount?: number; // Portion of element that must be visible to trigger, [0,1]
  duration?: number;
  delay?: number;
  once?: boolean; // trigger animation only once
  initialScale?: number; // starting scale
}

const ZoomInOnScroll: React.FC<ZoomInOnScrollProps> = ({
  children,
  amount = 0.4,
  duration = 0.7,
  delay = 0,
  once = false,
  initialScale = 0.85,
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

export default ZoomInOnScroll;
