# 카페 미오앤나나 (Mio&Nana) 홈페이지

## 프로젝트 개요

카페 미오앤나나의 웹/모바일 홈페이지 프로젝트입니다.
Next.js와 TypeScript를 기반으로 제작되었으며,
방문객들에게 카페의 메뉴, 위치, 루프탑 전경 등을 소개하는
인터랙티브 싱글 페이지 애플리케이션입니다.

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **Map Integration**: Kakao Map API

## 주요 기능

- **섹션 기반 네비게이션**: 데스크탑의 세로 스크롤 동작 또는 모바일 터치 스와이프 동작 기반의 부드러운 섹션 전환.
- **다국어 지원**: 한국어 및 영어 언어 전환.
- **메뉴 소개**: 카테고리 별 메뉴 동적 필터링.
- **루프탑 갤러리**: 카페 루프탑 전경 이미지 감상용 이미지 슬라이드쇼 UI.
- **오시는 길**: 카카오맵 API 연동 통한 지도 상의 정확한 위치 및 주소 복사 등의 편의성.
- **반응형 디자인**: 모바일, 데스크탑 및 다양한 화면 비율에서 기능/UI 상의 큰 이상 없이 동작하도록 설계.

## 프로젝트 구조 (Project Structure)

```
src/
├── app/                # Next.js App Router 페이지 및 전역 레이아웃
├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── BackgroundImage # 배경 이미지 처리
│   ├── KakaoMap        # 카카오맵 연동 컴포넌트
│   ├── MenuCards       # 메뉴 아이템 표시 컴포넌트
│   └── ...
├── sections/           # 메인 페이지를 구성하는 주요 섹션 컴포넌트
│   ├── MainSection     # 메인 홈 화면
│   ├── MenuSection     # 메뉴 소개 화면
│   ├── RooftopSection  # 루프탑 소개 화면
│   └── LocationSection # 위치 정보 화면
├── hooks/              # 커스텀 훅 (스크롤/스와이프 로직, 클립보드 복사 등)
├── store/              # 전역 상태 관리 (Zustand) 및 상수 데이터
├── icons/              # SVG 아이콘 컴포넌트 모음
└── fonts/              # 폰트 설정 파일
```
