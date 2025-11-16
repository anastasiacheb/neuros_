import { ThemeImage } from '@/components';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  light?: boolean;
  blue?: boolean;
  small?: boolean;
  srcLight?: string;
  srcDark?: string;
  style?: string;
  href?: string;
}

export default function Button({ text, light, blue, small, srcLight, srcDark, style, href }: ButtonProps) {
  const className = `font-DM font-bold py-3 px-5 rounded-xl w-full md:max-w-max transition flex items-center justify-center gap-2
        ${light ? 'border border-primary-400 text-primary-800 hover:border-primary-700 active:border-primary-900' : blue ? 'border border-accent-300 text-accent-600 hover:border-accent-700 active:border-accent-900' : 'text-primary-0 bg-accent-600 hover:bg-accent-700 active:bg-accent-800'} ${small ? 'text-sm' : ''} ${style ?? ''}`;

  const content = (
    <>
      {srcLight && srcDark && <ThemeImage srcDark={srcDark} srcLight={srcLight} alt="icon" className="w-5 h-5" />}
      {text}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <button className={className}>{content}</button>;
}
