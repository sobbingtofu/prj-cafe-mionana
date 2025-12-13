"use client";

import {useRef, useMemo} from "react";
import zustandStore from "../store/zustandStore";
import {useApplyScrollEffect} from "../hooks/useScrollSection";
import {SECTIONS} from "../store/constantStore";
import {menuContainerRef} from "../store/refStore";

export default function Home() {
  const currentSectionIndex = zustandStore((state) => state.currentSectionIndex);

  const containerRef = useRef<HTMLDivElement>(null);
  const exceptionRefs = useMemo(() => [menuContainerRef], []);

  const {offset} = useApplyScrollEffect({
    targetContainerRef: containerRef,
    totalSectionsCount: SECTIONS.length,
    scrollThreshold: 7,
    resetDelay: 450,
    maxOffset: 30,
    exceptionContainerRefs: exceptionRefs,
  });

  return (
    <div ref={containerRef} className="h-screen w-screen overflow-x-hidden bg-black select-none">
      <div
        className="flex flex-row"
        style={{
          transform: `translateX(calc(-${currentSectionIndex * 100}vw + ${offset}vw))`,
          transition: "transform 0.5s cubic-bezier(0, 0, 0.24, 1.01)",
        }}
      >
        <div className="w-[300%] absolute inset-0 bg-linear-to-b from-black/50 to-black/90 z-10" />
        {SECTIONS.map((section) => {
          const SectionComponent = section.component;
          return <SectionComponent key={section.id} />;
        })}
      </div>
    </div>
  );
}
