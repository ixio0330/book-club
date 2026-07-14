import { useEffect } from "react";
import { SlideLayout } from "../components/SlideLayout";
import { SlideTitle } from "../components/SlideTitle";
import { ChapterSlide } from "../components/ChapterSlide";
import { TableOfContentsSlide } from "../components/TableOfContentsSlide";
import { SlidePageNumber } from "../components/SlidePageNumber";
import { SlideSubtitle, SlideDate } from "../components/Typography";

import { useNavigate, useSearch } from "@tanstack/react-router";

export function DoItBook() {
  const navigate = useNavigate({ from: '/doit' });
  const search = useSearch({ from: '/doit' });
  const currentSlide = search.slide;
  const totalSlides = 7;

  const nextSlide = () => navigate({ search: { slide: Math.min(currentSlide + 1, totalSlides - 1) } });
  const prevSlide = () => navigate({ search: { slide: Math.max(currentSlide - 1, 0) } });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate({ to: "/" });
      } else if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, currentSlide, totalSlides]);

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-8 font-sans relative overflow-hidden">
      {/* Back Button (Top Left outside slide) */}
      <button 
        onClick={() => navigate({ to: "/" })}
        className="absolute top-8 left-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 text-white/50 hover:text-white backdrop-blur-sm transition-all z-50 cursor-pointer shadow-lg"
        title="뒤로 가기"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      {/* Left Navigation Zone */}
      <div 
        className="absolute left-0 top-0 w-[100px] h-full z-40 cursor-pointer hover:bg-white/5 transition-colors" 
        onClick={prevSlide}
        title="이전 슬라이드"
      />
      
      {/* Right Navigation Zone */}
      <div 
        className="absolute right-0 top-0 w-[100px] h-full z-40 cursor-pointer hover:bg-white/5 transition-colors" 
        onClick={nextSlide}
        title="다음 슬라이드"
      />

      <div className="w-full max-w-[1280px] relative z-0 shadow-2xl">
        {/* Global Header Layer */}
        <div className="absolute top-6 left-0 w-full px-8 flex justify-between text-white/50 text-sm font-medium z-50 tracking-tight pointer-events-none">
          <span>성과를 내고 싶으면 실행하라</span>
          <SlidePageNumber current={currentSlide + 1} total={totalSlides} />
        </div>

        {currentSlide === 0 && (
          <SlideLayout variant="beige">
            <SlideTitle>
              도토리{"\n"}독서모임
            </SlideTitle>
            <SlideSubtitle>성과를 내고 싶으면 실행하라</SlideSubtitle>
            <SlideDate>2025년 10월 11일 (토) 13:00 ~</SlideDate>
          </SlideLayout>
        )}

        {currentSlide === 1 && (
          <TableOfContentsSlide
            items={[
              "1. 근황토크",
              "2. 사실 책의 핵심은 모두 알고있다",
              "3. 4가지 원칙 (진짜로) 실행해보자!",
              "4. 마무리"
            ]}
          />
        )}

        {currentSlide === 2 && (
          <ChapterSlide title="근황토크" chapterNumber="01" />
        )}

        {currentSlide === 3 && (
          <SlideLayout variant="dark">
            <div className="text-center">
              <h2 className="text-[90px] font-extrabold mb-6 tracking-[-3px]">우리는 지금</h2>
              <h2 className="text-[110px] font-extrabold mb-6 tracking-[-4px]">'회오리바람'에</h2>
              <h2 className="text-[90px] font-extrabold tracking-[-3px]">휩쓸리고 있다</h2>
              <p className="text-[40px] font-bold mt-12 tracking-[-1px]">(아님 말구요)</p>
            </div>
          </SlideLayout>
        )}

        {currentSlide === 4 && (
          <SlideLayout variant="dark">
            <div className="flex justify-center items-center h-full">
              <h2 className="text-[100px] font-extrabold tracking-[-3px]">달성 가능한가요?</h2>
            </div>
          </SlideLayout>
        )}

        {currentSlide === 5 && (
          <ChapterSlide title="마무리" chapterNumber="04" />
        )}

        {currentSlide === 6 && (
          <SlideLayout variant="beige">
            <SlideTitle>감사합니다</SlideTitle>
          </SlideLayout>
        )}
      </div>
    </div>
  );
}
