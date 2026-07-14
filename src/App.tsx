import { useState } from "react";
import { MoneyBook } from "./pages/MoneyBook";
import { DoItBook } from "./pages/DoItBook";

import { BOOKS } from "./constants/books";

function App() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  if (selectedBook === "money") {
    return <MoneyBook onBack={() => setSelectedBook(null)} />;
  }
  
  if (selectedBook === "doit") {
    return <DoItBook onBack={() => setSelectedBook(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#f4efea] flex flex-col items-center justify-center p-8 font-sans text-black relative overflow-hidden">
      {/* 전체 모눈종이(Grid) 배경 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* 부드러운 빛 번짐 효과 */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/60 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 text-black">
            도토리 독서모임
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {BOOKS.map((book) => (
            <div 
              key={book.id}
              onClick={() => setSelectedBook(book.id)}
              className="relative cursor-pointer aspect-[2.3/3.5] mx-auto w-full max-w-[280px]"
            >
              {/* 실물 책 질감 & 그림자 */}
              <div className="absolute inset-0 rounded-r-2xl rounded-l-md shadow-[-5px_5px_15px_rgba(0,0,0,0.05),15px_20px_40px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
                <img 
                  src={book.coverUrl} 
                  alt={book.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* 책등(Spine) 음영 효과 */}
                <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/40 via-black/10 to-transparent mix-blend-multiply pointer-events-none" />
                
                {/* 책 표지 광택/질감 */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/30 mix-blend-overlay pointer-events-none" />
                
                {/* 책등 접히는 선(Crease) 디테일 */}
                <div className="absolute inset-y-0 left-[2px] w-[1px] bg-white/40 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-y-0 left-[5px] w-[1px] bg-black/20 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
