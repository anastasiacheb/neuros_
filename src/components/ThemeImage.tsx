'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ThemeImageProps {
  srcDark: string;
  srcLight: string;
  alt: string;
  className: string;
}

export default function ThemeImage({ srcDark, srcLight, alt, className }: ThemeImageProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDark(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const src = isDark ? srcDark : srcLight;

  return <Image src={src} alt={alt} width={0} height={0} sizes="100vw" quality={100} className={className} />;
}
