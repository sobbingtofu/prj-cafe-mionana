import {useEffect, useRef, RefObject} from "react";
import zustandStore from "../store/zustandStore";

interface useSwipeSectionProps {
  targetContainerRef: RefObject<HTMLElement | null>;
  totalSectionsCount: number;
  swipeThreshold?: number; // 섹션 전환을 위한 최소 스와이프 거리 (px)
  velocityThreshold?: number; // 빠른 스와이프 감지를 위한 속도 임계값 (px/ms)
  minSwipeDistance?: number; // 스와이프로 인식하기 위한 최소 이동 거리 (px)
  transitionDelay?: number; // 섹션 이동 후 대기 시간
  exceptionContainerRefs?: RefObject<HTMLElement | null>[];
}

export function useSwipeSection({
  targetContainerRef,
  totalSectionsCount,
  swipeThreshold = 50,
  velocityThreshold = 0.5,
  minSwipeDistance = 10,
  transitionDelay = 300,
  exceptionContainerRefs = [],
}: useSwipeSectionProps) {
  const currentSectionIndex = zustandStore((state) => state.currentSectionIndex);
  const setCurrentSectionIndex = zustandStore((state) => state.setCurrentSectionIndex);

  const currentSectionIndexRef = useRef(currentSectionIndex);

  useEffect(() => {
    currentSectionIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  // 터치 시작/현재 위치 및 시간 저장
  const touchStartXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);
  const touchStartTimeRef = useRef<number>(0);
  const touchCurrentXRef = useRef<number>(0);

  const isTransitioningRef = useRef(false);
  const isSwipingRef = useRef(false);
  const isExceptionTargetRef = useRef(false);

  useEffect(() => {
    const isInExceptionContainer = (target: EventTarget | null): boolean => {
      if (!target || exceptionContainerRefs.length === 0) return false;
      return exceptionContainerRefs.some((ref) => ref.current && ref.current.contains(target as Node));
    };

    const container = targetContainerRef.current;

    const handleTouchStart = (e: TouchEvent) => {
      // 예외 영역(메뉴, 지도 등)에서 발생한 터치인지 확인
      isExceptionTargetRef.current = isInExceptionContainer(e.target);

      if (isExceptionTargetRef.current || isTransitioningRef.current) {
        return;
      }

      const touch = e.touches[0];
      touchStartXRef.current = touch.clientX;
      touchStartYRef.current = touch.clientY;
      touchCurrentXRef.current = touch.clientX;
      touchStartTimeRef.current = Date.now();
      isSwipingRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isExceptionTargetRef.current || isTransitioningRef.current) {
        return;
      }

      const touch = e.touches[0];
      touchCurrentXRef.current = touch.clientX;

      const deltaX = Math.abs(touch.clientX - touchStartXRef.current);
      const deltaY = Math.abs(touch.clientY - touchStartYRef.current);

      // 수평 이동이 수직 이동보다 크고, 최소 거리 이상 이동하면 스와이프로 인식
      if (!isSwipingRef.current && deltaX > deltaY && deltaX > minSwipeDistance) {
        isSwipingRef.current = true;
      }

      // 스와이프 중에는 기본 스크롤 동작 방지
      if (isSwipingRef.current) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      if (isExceptionTargetRef.current || isTransitioningRef.current || !isSwipingRef.current) {
        isSwipingRef.current = false;
        isExceptionTargetRef.current = false;
        return;
      }

      const deltaX = touchCurrentXRef.current - touchStartXRef.current;
      const deltaTime = Date.now() - touchStartTimeRef.current;
      const velocity = Math.abs(deltaX) / deltaTime;

      let direction = 0;
      const distanceCondition = Math.abs(deltaX) > swipeThreshold;
      const velocityCondition = velocity > velocityThreshold;

      // 스와이프인지 아닌지를 거리 + 속도 조합으로 판단
      if (distanceCondition && velocityCondition) {
        direction = deltaX > 0 ? -1 : 1;
      } else if (velocityCondition && Math.abs(deltaX) > minSwipeDistance * 2) {
        direction = deltaX > 0 ? -1 : 1;
      } else if (distanceCondition && velocity > velocityThreshold * 0.5) {
        direction = deltaX > 0 ? -1 : 1;
      }

      isSwipingRef.current = false;
      isExceptionTargetRef.current = false;

      if (direction === 0) {
        return;
      }

      const nextSection = currentSectionIndexRef.current + direction;

      if (nextSection < 0 || nextSection >= totalSectionsCount) {
        return;
      }

      isTransitioningRef.current = true;
      setCurrentSectionIndex(nextSection);

      // transition 완료 감지: transitionend 이벤트 우선, setTimeout은 fallback
      const transitionEndTimeout = setTimeout(() => {
        isTransitioningRef.current = false;
      }, transitionDelay + 50);

      const handleTransitionEnd = () => {
        clearTimeout(transitionEndTimeout);
        isTransitioningRef.current = false;
        container?.removeEventListener("transitionend", handleTransitionEnd);
      };

      container?.addEventListener("transitionend", handleTransitionEnd, {once: true});
    };

    if (container) {
      container.addEventListener("touchstart", handleTouchStart, {passive: true});
      container.addEventListener("touchmove", handleTouchMove, {passive: false});
      container.addEventListener("touchend", handleTouchEnd, {passive: true});
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [
    setCurrentSectionIndex,
    totalSectionsCount,
    swipeThreshold,
    velocityThreshold,
    minSwipeDistance,
    transitionDelay,
    targetContainerRef,
    exceptionContainerRefs,
  ]);
}
