"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Glass-framed photograph with the clinic's signature "into focus" animation:
 * it enters softly blurred and slightly enlarged (uncorrected vision) and
 * sharpens into focus as it scrolls into view. Hover gently zooms the image.
 */
export default function Photo({
  src,
  alt,
  className = "",
  rounded = "rounded-3xl",
  priority = false,
  sheen = true,
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  sheen?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(priority);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (priority) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFocused(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [priority]);

  const scale = !focused ? 1.08 : hover ? 1.06 : 1;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`glass-surface group relative overflow-hidden p-1.5 ${rounded} ${className}`}
    >
      <div className={`relative h-full w-full overflow-hidden ${rounded}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? undefined : "lazy"}
          className="h-full w-full object-cover"
          style={{
            filter: focused ? "none" : "blur(14px)",
            opacity: focused ? 1 : 0.6,
            transform: `scale(${scale})`,
            transition:
              "filter 1000ms cubic-bezier(0.22,1,0.36,1), opacity 1000ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        {sheen && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 40%)",
            }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
