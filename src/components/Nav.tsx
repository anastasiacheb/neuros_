'use client';
import Link from 'next/link';
import { ThemeImage, Button } from '@/components';
import { useState } from 'react';

interface NavLinkProps {
  name: string;
  href: string;
}
function NavLink({ name, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300">
      {name}
    </Link>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="max-w-360 m-auto px-5 md:px-8 lg:px-[7.375rem]">
      <div className="flex justify-between py-1.5 md:py-2.5 lg:py-5 border-b border-primary-300 bg-primary-0 z-50 relative">
        <div className="flex gap-10 items-center lg:py-1.5 z-50">
          <Link href="/" className="block flex-none">
            <ThemeImage
              srcDark="/icons/Nimbus_logodark.svg"
              srcLight="/icons/Nimbus_logo.svg"
              alt="logo"
              className="w-28.5 h-auto"
            />
          </Link>
          <div
            className={`flex-col lg:flex-row lg:gap-8 absolute bg-primary-0 w-full lg:top-[67px] md:top-19.25 lg:static transition-all ease-linear duration-300 z-0 flex ${isOpen ? 'left-0' : '-left-full -translate-x-1/4'} top-19.25 lg:-top-16.25 lg:translate-none`}>
            <NavLink name="Features" href="/#features" />
            <NavLink name="Applications" href="/applications" />
            <NavLink name="Pricing" href="/#pricing" />
            <NavLink name="Contact" href="/#contact" />
          </div>
        </div>

        <div className="flex gap-2 flex-none items-center">
          <Button text="Get a demo" small blue style="hidden md:block" />
          <Button text="Start your free trial" small style="hidden md:block" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="open or close mobile menu"
            className="m-3 lg:hidden relative">
            <ThemeImage
              srcDark="/icons/closedark.svg"
              srcLight="/icons/close.svg"
              alt="logo"
              className={`${isOpen ? 'opacity-100' : 'opacity-0 '}transition-all absolute top-0 w-8 h-8 bg-primary-0`}
            />
            <ThemeImage srcDark="/icons/burgerdark.svg" srcLight="/icons/burger.svg" alt="logo" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}
