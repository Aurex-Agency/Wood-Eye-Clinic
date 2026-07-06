import Link from "next/link";
import React from "react";

type GlassProps = {
  children: React.ReactNode;
  className?: string;
  tint?: boolean;
  strong?: boolean;
  distort?: boolean;
  href?: string;
};

/*
 * Glass panel used across the site, adapted from the client's approved
 * liquid-glass reference component. Layered: distortion backdrop, frost
 * wash, inner highlight, then content.
 */
export default function Glass({
  children,
  className = "",
  tint = false,
  strong = false,
  distort = false,
  href,
}: GlassProps) {
  const content = (
    <div
      className={`glass-surface relative overflow-hidden rounded-3xl transition-all duration-700 ${
        tint ? "glass-tint" : ""
      } ${strong ? "glass-strong" : ""} ${className}`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.6)",
      }}
    >
      {distort && (
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl"
          style={{
            backdropFilter: "blur(3px)",
            filter: "url(#glass-distortion)",
            isolation: "isolate",
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  ) : (
    content
  );
}
