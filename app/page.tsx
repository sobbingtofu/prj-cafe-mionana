"use client";

import {useApplyScrollEffect} from "@/hooks/useScrollSection";
import LocationSection from "@/sections/LocationSection/LocationSection";
import MainSection from "@/sections/MainSection/MainSection";
import MenuSection from "@/sections/MenuSection/MenuSection";
import {useRef} from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    {id: 0, component: MainSection},
    {id: 1, component: MenuSection},
    {id: 2, component: LocationSection},
  ];

  const {currentSection, offset} = useApplyScrollEffect({
    targetContainerRef: containerRef,
    totalSectionsCount: sections.length,
    scrollThreshold: 10,
    resetDelay: 400,
    maxOffset: 30,
  });

  return (
    <div ref={containerRef} className="h-screen w-screen overflow-y-hidden">
      <div
        style={{
          transform: `translateY(calc(-${currentSection * 100}vh + ${offset}vh))`,
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
