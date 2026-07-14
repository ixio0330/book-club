import { SlideLayout } from "./SlideLayout";
import { SlideListTitle, SlideList, SlideListItem } from "./Typography";

interface TableOfContentsSlideProps {
  items: string[];
  variant?: "beige" | "dark";
}

export function TableOfContentsSlide({ items, variant = "dark" }: TableOfContentsSlideProps) {
  return (
    <SlideLayout variant={variant}>
      <SlideListTitle>목차:</SlideListTitle>
      <div className="pl-40">
        <SlideList>
          {items.map((item, index) => (
            <SlideListItem key={index}>{item}</SlideListItem>
          ))}
        </SlideList>
      </div>
    </SlideLayout>
  );
}
