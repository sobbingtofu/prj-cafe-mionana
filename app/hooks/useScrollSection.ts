import {useEffect, useRef, useState, useCallback, RefObject} from "react";

interface UseScrollSectionOptions {
  targetContainerRef: RefObject<HTMLElement | null>; // 스크롤 효과 적용할 컨테이너 ref
  totalSectionsCount: number; // 컨테이너 내 섹션의 개수
  scrollThreshold?: number; // 섹션 전환을 위한 스크롤 횟수 임계값
  resetDelay?: number; // 마지막 스크롤 후 초기화까지 기다릴 시간
  maxOffset?: number; // 현재 섹션에서 다음 섹션이 얼마나 보이도록 할 지 최대값 (vh 단위)
  transitionDelay?: number; // 섹션 이동 후 대기 시간
}

export function useApplyScrollEffect({
  targetContainerRef,
  totalSectionsCount,
  scrollThreshold = 5,
  resetDelay = 350,
  maxOffset = 30,
  transitionDelay = 200,
}: UseScrollSectionOptions) {
  // 현재 위치한 섹션의 인덱스
  const [currentSection, setCurrentSection] = useState(0);

  // 현재 섹션에서 다음 섹션이 얼마나 보이도록 할 지 관리할 state (vh 단위)
  const [offset, setOffset] = useState(0);

  // 스크롤이 멈추면 딜레이 후 원래 섹션으로 돌아가는 타이머 저장해둘 ref
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 연속된 같은 방향 스크롤의 횟수 저장해둘 ref
  const scrollCountRef = useRef(0);

  // 마지막 스크롤 방향 저장해둘 ref
  const lastDirectionRef = useRef(0);

  // 섹션 전환 중 여부를 저장해둘 ref
  const isTransitioningRef = useRef(false);

  // 현재 섹션 내 이동치, 스크롤 횟수, 방향 등 전부 초기화하는 리셋 함수
  const resetScroll = useCallback(() => {
    setOffset(0);
    scrollCountRef.current = 0;
    lastDirectionRef.current = 0;

    isTransitioningRef.current = true;
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, transitionDelay);
  }, [transitionDelay]);

  useEffect(() => {
    // 스크롤 발생 시 호출되는 핸들러 함수
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // 섹션 전환 중이면 동작 X
      if (isTransitioningRef.current) {
        return;
      }

      // 스크롤 방향 확인
      const direction = e.deltaY > 0 ? 1 : -1;

      // 스크롤 방향 기준으로 이동하게 될 섹션 확인
      const nextSection = currentSection + direction;

      // console.log("스크롤 발생", {direction, currentSection, count: scrollCountRef.current});

      // 섹션 범위 확인, 벗어나면 동작 X
      if (nextSection < 0 || nextSection >= totalSectionsCount) {
        return;
      }

      // 새로운 스크롤 발생했으므로 이전 스크롤에 대한 기존 타이머 취소
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      let newCount: number;

      // 이번에 새로 발생한 스크롤의 방향이 이전 스크롤의 방향과 다르다면 스크롤 횟수 count 초기화
      if (lastDirectionRef.current !== 0 && lastDirectionRef.current !== direction) {
        newCount = 1;
        scrollCountRef.current = 1;
        lastDirectionRef.current = direction;
        setOffset((-direction * maxOffset) / scrollThreshold);
      } else {
        // 이번에 새로 발생한 스크롤의 방향이 이전 스크롤의 방향과 같다면
        // offset 값 계산 및 반영
        newCount = scrollCountRef.current + 1;
        scrollCountRef.current = newCount;
        lastDirectionRef.current = direction;

        const progress = Math.min(newCount, scrollThreshold);
        setOffset((-direction * maxOffset * progress) / scrollThreshold);

        // 임계값 도달하면 섹션 이동
        if (newCount >= scrollThreshold) {
          isTransitioningRef.current = true;

          setCurrentSection(nextSection);
          scrollCountRef.current = 0;
          lastDirectionRef.current = 0;
          setOffset(0);

          // transitionDelay 후 스크롤 다시 활성화
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, transitionDelay);

          return;
        }
      }

      // 마지막 스크롤 동작 후 일정 시간 지나면 원래 섹션으로 돌아오도록 타이머 실행
      scrollTimeoutRef.current = setTimeout(() => {
        resetScroll();
      }, resetDelay);
    };

    const container = targetContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, {passive: false});
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [
    currentSection,
    totalSectionsCount,
    scrollThreshold,
    resetDelay,
    maxOffset,
    targetContainerRef,
    resetScroll,
    transitionDelay,
  ]);

  return {
    currentSection,
    offset,
  };
}
