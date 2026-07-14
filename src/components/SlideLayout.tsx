interface SlideLayoutProps {
  variant?: "beige" | "dark";
  children: React.ReactNode;
}

export function SlideLayout({ variant = "beige", children }: SlideLayoutProps) {
  return (
    <div className="w-full max-w-[1280px] aspect-video bg-black relative overflow-hidden flex flex-col shadow-2xl mx-auto">
      <div
        className={`flex-1 relative flex flex-col justify-center ${
          variant === "beige"
            ? "bg-[#f4efea] mt-16 mx-8 mb-8 rounded-2xl p-20 text-black"
            : "mt-16 p-20 text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
