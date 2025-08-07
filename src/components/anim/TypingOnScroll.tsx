"use client";
import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import Typewriter from "./TypingAnimation";

interface Props {
  text: string;
  className?: string;
  speed?: number;
  cursor?: boolean | string;
  delay?: number;
}

export default function TypewriterOnScroll({
  text,
  className = "",
  speed = 70,
  cursor = true,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6, once: true });

  return (
    <div ref={ref}>
      <Typewriter
        text={text}
        trigger={inView}
        className={className}
        speed={speed}
        cursor={cursor}
        delay={delay}
      />
    </div>
  );
}
