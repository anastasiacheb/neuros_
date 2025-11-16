import { ThemeImage } from '@/components';
import { PAGE_QUERYResult } from '@/sanity/types';

const LOGOS = [
  { srcLight: '/icons/Logo.svg', srcDark: '/icons/Logodark.svg' },
  { srcLight: '/icons/Logo-1.svg', srcDark: '/icons/Logo-1dark.svg' },
  { srcLight: '/icons/Logo-2.svg', srcDark: '/icons/Logo-2dark.svg' },
  { srcLight: '/icons/Logo-3.svg', srcDark: '/icons/Logo-3dark.svg' },
  { srcLight: '/icons/Logo-4.svg', srcDark: '/icons/Logo-4dark.svg' },
  { srcLight: '/icons/Logo-5.svg', srcDark: '/icons/Logo-5dark.svg' },
  { srcLight: '/icons/Logo-6.svg', srcDark: '/icons/Logo-6dark.svg' },
  { srcLight: '/icons/Logo-7.svg', srcDark: '/icons/Logo-7dark.svg' },
  { srcLight: '/icons/Logo-8.svg', srcDark: '/icons/Logo-8dark.svg' },
  { srcLight: '/icons/Logo-9.svg', srcDark: '/icons/Logo-9dark.svg' },
];

type LogosProps = Extract<NonNullable<NonNullable<PAGE_QUERYResult>['content']>[number], { _type: 'logos' }>;

export function Logos({ title }: LogosProps) {
  return (
    <div className="px-5 pt-5 pb-14 md:px-8 md:pt-10 overflow-hidden items-center justify-center flex flex-col">
      <p className="text-primary-800 text-base text-center mb-5">
        {title}
        {/* 160,000+ customers in over 120 countries grow their businesses with Neuros */}
      </p>
      <div className="grid grid-cols-5 gap-10 w-280">
        {LOGOS.map((logo, index) => (
          <ThemeImage key={index} srcDark={logo.srcDark} srcLight={logo.srcLight} alt="logo" className="h-12 w-48" />
        ))}
      </div>
    </div>
  );
}
