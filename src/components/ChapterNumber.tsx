interface ChapterNumberProps {
  number: string;
}

export function ChapterNumber({ number }: ChapterNumberProps) {
  return (
    <div
      className="absolute bottom-0 right-[60px] text-[450px] font-extrabold leading-[0.8] tracking-[-10px] opacity-[0.15]"
    >
      {number}
    </div>
  );
}
