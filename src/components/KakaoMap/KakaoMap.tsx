"use client";

import {kakaoMapContainerRef} from "@/src/store/refStore";
import {useEffect} from "react";

interface KakaoMapProps {
  className?: string;
  markerlatitude: number;
  markerlongitude: number;
  centerLatitude: number;
  centerLongitude: number;
}

interface KakaoMaps {
  LatLng: new (lat: number, lng: number) => unknown;
  Map: new (container: HTMLElement, options: unknown) => KakaoMapInstance;
  Marker: new (options: {position: unknown}) => KakaoMarker;
  load: (callback: () => void) => void;
}

interface KakaoMapInstance {
  setDraggable: (draggable: boolean) => void;
  setMaxLevel: (level: number) => void;
  setZoomable: (zoomable: boolean) => void;
  setLevel: (level: number) => void;
  getLevel: () => number;
  setCenter: (position: unknown) => void;
}

interface KakaoMarker {
  setMap: (map: KakaoMapInstance | null) => void;
}

declare global {
  interface Window {
    kakao: {
      maps: KakaoMaps;
    };
  }
}

function KakaoMap({
  className = "",
  markerlatitude = 37.56041070368093,
  markerlongitude = 126.99110964299093,
  centerLatitude = 37.56076203568551,
  centerLongitude = 126.99038524030453,
}: KakaoMapProps) {
  useEffect(() => {
    const centerMediaQueries: ResizeObserver[] = [];

    const initMap = () => {
      try {
        if (!kakaoMapContainerRef.current) {
          throw new Error("카카오맵 배치할 컨테이너 ref 정의되지 않은 상태임");
        }

        if (!window.kakao || !window.kakao.maps) {
          throw new Error("Kakao Maps SDK가 로드 오류 발생");
        }

        const isScreenLargerThanMd = window.matchMedia("(min-width: 670px)").matches;
        const isScreenLargerThanSm = window.matchMedia("(min-width: 340px)").matches;
        const mapLevel = isScreenLargerThanMd ? 3 : isScreenLargerThanSm ? 4 : 5;

        const centerPosition = new window.kakao.maps.LatLng(centerLatitude, centerLongitude);
        const markerPosition = new window.kakao.maps.LatLng(markerlatitude, markerlongitude);

        const options = {
          center: centerPosition,
          level: mapLevel,
        };

        const map = new window.kakao.maps.Map(kakaoMapContainerRef.current, options);

        map.setDraggable(false);
        map.setMaxLevel(5);
        map.setZoomable(false);

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // ResizeObserver로 레벨 및 중심 재지정
        let lastWidth = window.innerWidth;
        let resizeTimeout: NodeJS.Timeout;

        const resizeObserver = new ResizeObserver((entries) => {
          // debounce로 불필요한 호출 방지
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            const currentWidth = entries[0].contentRect.width;

            // 레벨 변경용 breakpoints
            const levelBreakpoints = [340, 670];

            // 중심 재지정용 breakpoints
            const centerBreakpoints = [360, 460, 560, 660, 760, 860, 960, 1060, 1160, 1260];

            // 레벨 breakpoint를 넘었는지 확인
            const crossedLevelBreakpoint = levelBreakpoints.some(
              (bp) => (lastWidth < bp && currentWidth >= bp) || (lastWidth >= bp && currentWidth < bp)
            );

            if (crossedLevelBreakpoint) {
              const isLargerThanMd = currentWidth >= 670;
              const isLargerThanSm = currentWidth >= 340;
              const newMapLevel = isLargerThanMd ? 3 : isLargerThanSm ? 4 : 5;
              console.log("카카오맵 레벨 변경:", currentWidth, newMapLevel);
              map.setLevel(newMapLevel);
            }

            // 중심 breakpoint를 넘었는지 확인
            const crossedCenterBreakpoint = centerBreakpoints.some(
              (bp) => (lastWidth < bp && currentWidth >= bp) || (lastWidth >= bp && currentWidth < bp)
            );

            if (crossedCenterBreakpoint) {
              map.setCenter(centerPosition);
            }

            lastWidth = currentWidth;
          }, 100); // 100ms debounce
        });

        if (kakaoMapContainerRef.current) {
          resizeObserver.observe(kakaoMapContainerRef.current);
        }

        // cleanup 함수에 추가할 변수 저장
        centerMediaQueries.push(resizeObserver);
      } catch (error) {
        console.error("카카오맵 초기화 중 오류 발생:", error);
      }
    };

    // 카카오 맵 SDK 로드
    if (!window.kakao) {
      try {
        const apiKey = process.env.NEXT_PUBLIC_KAKAO_API_JAVASCRIPT_KEY;

        if (!apiKey) {
          console.error("카카오맵 키가 환경 변수에 설정되지 않았음");
          return;
        }

        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
        script.async = true;

        script.onload = () => {
          try {
            window.kakao.maps.load(initMap);
          } catch (error) {
            console.error("카카오맵 SDK 로드 중 오류 발생:", error);
          }
        };

        script.onerror = () => {
          console.error("카카오맵 SDK 스크립트 로드 실패");
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error("카카오맵 스크립트 생성 중 오류 발생:", error);
      }
    } else {
      initMap();
    }

    return () => {
      // ResizeObserver cleanup
      centerMediaQueries.forEach((item) => {
        if (item instanceof ResizeObserver) {
          item.disconnect();
        }
      });
    };
  }, [markerlatitude, markerlongitude, centerLatitude, centerLongitude]);

  return <div ref={kakaoMapContainerRef} className={className} />;
}

export default KakaoMap;
