"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  repeat?: boolean;
  className?: string;
  cursor?: boolean | string;
  delay?: number;
  /** اگر true باشد انیمیشن شروع می‌شود */
  trigger?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 70,
  repeat = false,
  className,
  cursor = true,
  delay = 0,
  trigger = true, // دیفالت: همیشه فعال (برای بک‌وارد سازگاری)
}) => {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!trigger) {
      setDisplayed(""); // وقتی خارج دید باشه متن پاک شه (آپشنال)
      return;
    }
    let timeout: NodeJS.Timeout;
    let i = 0;
    let active = true;
    const startType = () => {
      if (!active) return;
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        timeout = setTimeout(startType, speed);
      } else if (repeat) {
        setTimeout(() => {
          i = 0;
          setDisplayed("");
          startType();
        }, 1000);
      }
    };
    if (delay) {
      timeout = setTimeout(startType, delay);
    } else {
      startType();
    }
    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [text, speed, repeat, delay, trigger]);

  useEffect(() => {
    if (!cursor) return;
    const interval = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <span className={className}>
      {displayed}
      {cursor && (
        <span style={{ opacity: showCursor ? 1 : 0 }}>
          {typeof cursor === "string" ? cursor : "|"}
        </span>
      )}
    </span>
  );
};

export default Typewriter;
