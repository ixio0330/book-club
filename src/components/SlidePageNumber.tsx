interface SlidePageNumberProps {
  current: number;
  total: number;
}

export function SlidePageNumber({ current, total }: SlidePageNumberProps) {
  return (
    <span className="tracking-widest">
      {current} / {total}
    </span>
  );
}
