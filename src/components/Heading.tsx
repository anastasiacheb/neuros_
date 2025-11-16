import { ThemeImage } from '@/components';
import { ReactNode } from 'react';

interface HeadingProps {
  text?: string;
  children?: ReactNode;
}

export default function Heading({ text, children }: HeadingProps) {
  return (
    <h2 className="rounded-full border border-primary-400 flex py-2 px-3 gap-2 w-auto max-w-max shadow text-base items-center justify-center font-medium mx-auto mb-5 text-primary-800">
      <ThemeImage srcDark="/icons/AIdark.svg" srcLight="/icons/AI.svg" alt="decoration" className="w-5 h-5" />
      {/* Generative <span className="hidden md:block">Business</span> Intelligence for Analysts */}
      {children}
      {text}
    </h2>
  );
}
