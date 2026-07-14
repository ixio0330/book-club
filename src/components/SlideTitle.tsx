interface SlideTitleProps {
  children: React.ReactNode;
}

export function SlideTitle({ children }: SlideTitleProps) {
  return (
    <h1 className="text-[100px] font-extrabold leading-[1.2] tracking-[-3px] m-0 whitespace-pre-line">
      {children}
    </h1>
  );
}
