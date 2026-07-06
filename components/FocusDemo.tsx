"use client";

import React, { useState } from "react";

const chartRows = [
  { letters: "E", size: "text-6xl md:text-7xl" },
  { letters: "F P", size: "text-4xl md:text-5xl" },
  { letters: "T O Z", size: "text-3xl md:text-4xl" },
  { letters: "L P E D", size: "text-2xl md:text-3xl" },
  { letters: "P E C F D", size: "text-xl md:text-2xl" },
  { letters: "E D F C Z P", size: "text-base md:text-lg" },
];

/*
 * Interactive "blurry vision vs. after care" demo. Visitors drag the slider
 * to bring the eye chart into focus, mirroring the experience of getting
 * the right prescription at Wood Eye Clinic.
 */
export default function FocusDemo() {
  const [focus, setFocus] = useState(15);
  const blur = ((100 - focus) / 100) * 9;

  return (
    <div className="glass-surface glass-strong relative overflow-hidden rounded-4xl p-6 sm:p-8">
      <div className="mb-5 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-widest">
        <span className={focus < 50 ? "text-brand" : "text-ink/40"}>Blurry vision</span>
        <span className={focus >= 50 ? "text-brand" : "text-ink/40"}>
          Clear with Wood Eye Clinic
        </span>
      </div>

      <div
        className="select-none rounded-2xl bg-white/80 px-4 py-8 text-center font-bold tracking-[0.35em] text-ink shadow-inner"
        style={{ filter: `blur(${blur}px)`, transition: "filter 150ms linear" }}
        aria-hidden="true"
      >
        {chartRows.map((row) => (
          <div key={row.letters} className={`${row.size} leading-relaxed`}>
            {row.letters}
          </div>
        ))}
      </div>

      <label className="mt-6 block">
        <span className="sr-only">Drag to bring the eye chart into focus</span>
        <input
          type="range"
          min={0}
          max={100}
          value={focus}
          onChange={(e) => setFocus(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-mist accent-brand"
          aria-label="Drag to bring the eye chart into focus"
        />
      </label>
      <p className="mt-3 text-center text-sm text-ink/60">
        Drag the slider to see the difference the right care makes.
      </p>
    </div>
  );
}
