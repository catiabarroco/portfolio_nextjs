import { ReactNode } from 'react';

type PageTitleProps = {
  children: ReactNode;
};
export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      {children}
    </h1>
  );
}
