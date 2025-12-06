"use client";

import {useRef} from "react";
import {useApplyScrollEffect} from "./hooks/useScrollSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    {id: 0, title: "섹션 A"},
    {id: 1, title: "섹션 B"},
    {id: 2, title: "섹션 C"},
  ];

  const {currentSection, offset} = useApplyScrollEffect({
    targetContainerRef: containerRef,
    totalSectionsCount: sections.length,
    scrollThreshold: 10,
    resetDelay: 400,
    maxOffset: 30,
  });

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden">
      <div
        style={{
          transform: `translateY(calc(-${currentSection * 100}vh + ${offset}vh))`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {sections.map((section) => (
          <section
            key={section.id}
            className="h-screen w-full flex items-center justify-center"
            style={{
              background: section.id === 0 ? "#f5e6d3" : section.id === 1 ? "#d4c4a8" : "#b8a88a",
            }}
          >
            <h1 className="text-6xl font-bold text-gray-800">{section.title}</h1>
          </section>
        ))}
      </div>
    </div>
  );
}
