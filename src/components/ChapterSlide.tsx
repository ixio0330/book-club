import { SlideLayout } from "./SlideLayout";
import { SlideTitle } from "./SlideTitle";
import { ChapterNumber } from "./ChapterNumber";

interface ChapterSlideProps {
  title: string | React.ReactNode;
  chapterNumber: string;
  variant?: "beige" | "dark";
}

export function ChapterSlide({ title, chapterNumber, variant = "beige" }: ChapterSlideProps) {
  return (
    <SlideLayout variant={variant}>
      <SlideTitle>{title}</SlideTitle>
      <ChapterNumber number={chapterNumber} />
    </SlideLayout>
  );
}
