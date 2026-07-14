export function SlideSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[36px] font-medium mt-[40px] tracking-[-1px]">
      {children}
    </h2>
  );
}

export function SlideDate({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[36px] font-normal mt-[10px] tracking-[-1px]">
      {children}
    </p>
  );
}

export function SlideListTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[80px] font-extrabold mb-[60px] tracking-[-2px]">
      {children}
    </h2>
  );
}

export function SlideList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-none p-0 m-0 flex flex-col gap-[20px]">
      {children}
    </ul>
  );
}

export function SlideListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-[40px] font-medium tracking-[-1px]">
      {children}
    </li>
  );
}
