import { useState } from "react";
import { SlideLayout } from "./SlideLayout";
import { MONEY_QUESTIONS } from "../constants/moneyQuestions";

interface RandomDrawBoardProps {
  questions?: string[];
}

export function RandomDrawBoard({ questions = MONEY_QUESTIONS }: RandomDrawBoardProps) {
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  
  const totalNumbers = questions.length;
  const numbers = Array.from({ length: totalNumbers }, (_, i) => i + 1);

  const handleDraw = (number: number) => {
    if (drawnNumbers.includes(number)) {
      setSelectedNumber(number);
      return;
    }
    if (drawnNumbers.length >= 5) {
      alert("이미 5개를 모두 뽑았습니다!");
      return;
    }
    setDrawnNumbers([...drawnNumbers, number]);
    setSelectedNumber(number);
  };

  return (
    <SlideLayout variant="beige">
      <div className="flex flex-col items-center justify-center h-full w-full px-8 relative">
        {/* Modern Board Background */}
        <div className="bg-white w-full max-w-5xl p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-black/5 relative">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
                랜덤 질문
              </h2>
              <div className="flex items-center gap-2 bg-neutral-100 px-4 py-1.5 rounded-full">
                <span className="text-sm font-bold text-neutral-500">선택 완료</span>
                <span className="text-sm font-extrabold text-neutral-900">{drawnNumbers.length} / 5</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={() => { setDrawnNumbers([]); setSelectedNumber(null); }}
                disabled={drawnNumbers.length === 0}
                className={`text-[13px] px-4 py-2 rounded-full font-bold transition-colors ${
                  drawnNumbers.length === 0
                    ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                    : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 cursor-pointer"
                }`}
              >
                다시 뽑기
              </button>
              <button
                onClick={() => setShowAllQuestions(true)}
                className="text-[13px] bg-neutral-900 text-white px-4 py-2 rounded-full font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                전체 질문 보기
              </button>
            </div>
          </div>

          {/* Minimalist Grid */}
          <div className="grid grid-cols-10 gap-3">
            {numbers.map((num) => {
              const isDrawn = drawnNumbers.includes(num);
              const isSelected = selectedNumber === num;
              
              return (
                <button
                  key={num}
                  onClick={() => handleDraw(num)}
                  className={`
                    relative aspect-square flex flex-col items-center justify-center rounded-2xl
                    transition-all duration-300 transform font-bold text-lg
                    ${
                      isSelected
                        ? "bg-neutral-900 text-white shadow-lg scale-105"
                        : isDrawn
                          ? "bg-neutral-100 text-neutral-400 border-2 border-transparent"
                          : "bg-white text-neutral-700 border-2 border-neutral-100 hover:border-neutral-300 hover:shadow-md hover:-translate-y-1"
                    }
                  `}
                >
                  {isDrawn && !isSelected ? (
                    <span className="text-neutral-300">✓</span>
                  ) : (
                    <span>{String(num).padStart(2, '0')}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Drawn Question Display */}
          <div className="mt-8 bg-neutral-50 rounded-2xl p-6 border border-black/5 relative overflow-hidden min-h-[140px] flex flex-col justify-center transition-all duration-300">
            <div className={`absolute top-0 left-0 w-1.5 h-full transition-colors duration-300 ${selectedNumber ? 'bg-neutral-900' : 'bg-neutral-200'}`} />
            
            <div className="transition-all duration-300 w-full">
              {selectedNumber ? (
                <div key={selectedNumber} className="animate-[fadeIn_0.5s_ease-out]">
                  <p className="text-sm text-neutral-400 font-extrabold mb-2 tracking-widest">QUESTION {String(selectedNumber).padStart(2, '0')}</p>
                  <p className="text-xl text-neutral-900 font-bold leading-relaxed break-keep">
                    {questions[selectedNumber - 1]}
                  </p>
                </div>
              ) : (
                <div className="text-center text-neutral-400 font-medium flex flex-col items-center justify-center gap-2">
                  <span className="text-2xl">👆</span>
                  <span>위에서 카드를 선택하면 질문이 나타납니다</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* All Questions Modal */}
        {showAllQuestions && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-8 transition-all">
            <div className="bg-[#f4efea] w-full max-w-4xl max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden relative border border-white/20">
              <div className="px-8 py-6 flex justify-between items-center border-b border-black/10 shrink-0 bg-white/50 backdrop-blur-sm">
                <h3 className="text-3xl font-extrabold text-neutral-900 tracking-tight">전체 질문 목록</h3>
                <button 
                  onClick={() => setShowAllQuestions(false)}
                  className="text-neutral-500 hover:text-neutral-900 bg-black/5 hover:bg-black/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer text-xl"
                >
                  ✕
                </button>
              </div>
              <div className="p-8 overflow-y-auto grow custom-scrollbar">
                <div className="flex flex-col gap-4">
                  {questions.map((q, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
                      <span className="text-sm font-extrabold text-neutral-400 mb-2 block">Question {String(idx + 1).padStart(2, '0')}</span>
                      <p className="text-neutral-800 font-semibold text-[15px] leading-relaxed break-keep">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SlideLayout>
  );
}
