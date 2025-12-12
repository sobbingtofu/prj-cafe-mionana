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
    scrollThreshold: 7,
    resetDelay: 350,
    maxOffset: 30,
  });

  return (
    <div ref={containerRef} className="h-screen w-screen overflow-x-hidden bg-black select-none">
      <div
        className="flex flex-row"
        style={{
          transform: `translateX(calc(-${currentSectionIndex * 100}vw + ${offset}vw))`,
          transition: "transform 0.4s cubic-bezier(0, 0, 0.24, 1.01)",
        }}
      >
        <div className="w-[300%] absolute inset-0 bg-linear-to-b from-black/50 to-black/90 z-10 backdrop-blur-[1px]" />
        {sections.map((section) => {
          const SectionComponent = section.component;
          return <SectionComponent key={section.id} />;
        })}
      </div>
    </div>
  );
}
