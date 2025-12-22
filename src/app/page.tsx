"use client";

import {useRef, useMemo} from "react";
import zustandStore from "../store/zustandStore";
import {useApplyScrollEffect} from "../hooks/useScrollSection";
import {useSwipeSection} from "../hooks/useSwipeSection";
import {SECTIONS} from "../store/constantStore";
import {kakaoMapContainerRef, menuContainerRef} from "../store/refStore";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";

export default function Home() {
  const currentSectionIndex = zustandStore((state) => state.currentSectionIndex);

  const containerRef = useRef<HTMLDivElement>(null);
  const exceptionRefs = useMemo(() => [menuContainerRef, kakaoMapContainerRef], []);

  const {offset} = useApplyScrollEffect({
    targetContainerRef: containerRef,
    totalSectionsCount: SECTIONS.length,
    scrollThreshold: 7,
    resetDelay: 450,
    maxOffset: 30,
    exceptionContainerRefs: exceptionRefs,
  });

  useSwipeSection({
    targetContainerRef: containerRef,
    totalSectionsCount: SECTIONS.length,
    swipeThreshold: 50,
    velocityThreshold: 0.5,
    transitionDelay: 300,
    exceptionContainerRefs: [],
  });

  return (
    <div ref={containerRef} className="min-h-[530px] min-w-screen bg-black select-none overflow-hidden">
      <LanguageSelector />
      <div
        className="flex flex-row w-full"
        style={{
          transform: `translateX(calc(-${currentSectionIndex * 100}vw + ${offset}vw))`,
          transition: "transform 0.5s cubic-bezier(0, 0, 0.24, 1.01)",
        }}
      >
        <div
          className="w-[300%] absolute inset-0 z-10 min-h-[530px]
          bg-linear-to-b from-black/50 to-black/90"
        />
        {SECTIONS.map((section) => {
          const SectionComponent = section.component;
          return <SectionComponent key={section.id} />;
        })}
      </div>
      <NavigationBar />
    </div>
  );
}
