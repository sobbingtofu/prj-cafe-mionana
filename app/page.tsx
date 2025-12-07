"use client";

import {useApplyScrollEffect} from "@/hooks/useScrollSection";
import {sections} from "@/store/constantStore";
import zustandStore from "@/store/zustandStore";
import {useRef} from "react";

export default function Home() {
  const {currentSectionIndex} = zustandStore();

  const containerRef = useRef<HTMLDivElement>(null);

  const {offset} = useApplyScrollEffect({
    targetContainerRef: containerRef,
    totalSectionsCount: sections.length,
    scrollThreshold: 8,
    resetDelay: 350,
    maxOffset: 30,
  });

  return (
    <div ref={containerRef} className="h-screen w-screen overflow-y-hidden">
      <div
        style={{
          transform: `translateY(calc(-${currentSectionIndex * 100}vh + ${offset}vh))`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {sections.map((section) => {
          const SectionComponent = section.component;
          return <SectionComponent key={section.id} />;
        })}
      </div>
    </div>
  );
}
