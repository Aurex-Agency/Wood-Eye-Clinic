"use client";

import React, { useEffect, useRef, useState } from "react";

/*
 * Blur-to-clear scroll reveal: content enters slightly blurred (like
 * uncorrected vision) and sharpens into focus as it scrolls into view.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setClear(true), delay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-blur ${clear ? "reveal-clear" : ""} ${className}`}>
      {children}
    </div>
  );
}
