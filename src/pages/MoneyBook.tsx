import { useState, useEffect } from "react";
import { SlideLayout } from "../components/SlideLayout";
import { SlideTitle } from "../components/SlideTitle";
import { SlidePageNumber } from "../components/SlidePageNumber";

interface MoneyBookProps {
  onBack: () => void;
}

export function MoneyBook({ onBack }: MoneyBookProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 1;

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onBack();
      } else if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onBack]);

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-8 font-sans relative overflow-hidden">
      {/* Back Button (Top Left outside slide) */}
      <button 
        onClick={onBack}
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
        <div className="absolute top-6 left-0 w-full px-8 flex justify-between text-white/50 text-sm font-medium z-50 tracking-tight pointer-events-none">
          <span>돈의 심리학</span>
          <SlidePageNumber current={currentSlide + 1} total={totalSlides} />
        </div>

        {currentSlide === 0 && (
          <SlideLayout variant="beige">
            <SlideTitle>돈의 심리학</SlideTitle>
          </SlideLayout>
        )}
      </div>
    </div>
  );
}
