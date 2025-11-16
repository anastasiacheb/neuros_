import { ThemeImage } from '@/components';
import Link from 'next/link';

const footerLinks = [
  { name: 'Company Overview', category: 'About Neuros' },
  { name: 'Careers', category: 'About Neuros' },
  { name: 'Press & Media', category: 'About Neuros' },
  { name: 'Testimonials', category: 'About Neuros' },
  { name: 'Blog', category: 'Resources' },
  { name: 'Help Center', category: 'Resources' },
  { name: 'Webinars & Events', category: 'Resources' },
  { name: 'Case Studies', category: 'Resources' },
  { name: 'Contact Us', category: 'Support & Contact' },
  { name: 'Technical Support', category: 'Support & Contact' },
  { name: 'Feedback', category: 'Support & Contact' },
  { name: 'Community Forum', category: 'Support & Contact' },
  {
    name: 'Instagram',
    category: 'Connect',
    srcDark: '/icons/instdark.svg',
    srcLight: '/icons/inst.svg',
    srcHoverDark: '/icons/insthoverdark.svg',
    srcHoverLight: '/icons/insthover.svg',
  },
  {
    name: 'Facebook',
    category: 'Connect',
    srcDark: '/icons/facedark.svg',
    srcLight: '/icons/face.svg',
    srcHoverDark: '/icons/facehoverdark.svg',
    srcHoverLight: '/icons/facehover.svg',
  },
  {
    name: 'Twitter / X',
    category: 'Connect',
    srcDark: '/icons/twitdark.svg',
    srcLight: '/icons/twit.svg',
    srcHoverDark: '/icons/twithoverdark.svg',
    srcHoverLight: '/icons/twithover.svg',
  },
  {
    name: 'Linkedin',
    category: 'Connect',
    srcDark: '/icons/linkdark.svg',
    srcLight: '/icons/link.svg',
    srcHoverDark: '/icons/linkhoverdark.svg',
    srcHoverLight: '/icons/linkhover.svg',
  },
];

interface FooterLinkProps {
  name: string;
  srcDark?: string;
  srcLight?: string;
  srcHoverDark?: string;
  srcHoverLight?: string;
}

function FooterLink({ name, srcDark, srcLight, srcHoverDark, srcHoverLight }: FooterLinkProps) {
  return (
    <Link
      href="#"
      className={`font-medium text-base text-primary-800 hover:text-accent-600 transition-all group ${srcDark && 'transition-all flex gap-1 items-center'}`}>
      {srcDark && srcLight && srcHoverDark && srcHoverLight && (
        <div className="relative">
          <ThemeImage
            srcDark={srcDark}
            srcLight={srcLight}
            alt="logo"
            className="w-4.5 h-4.5 group-hover:opacity-0 transition-all"
          />
          <ThemeImage
            srcDark={srcHoverDark}
            srcLight={srcHoverLight}
            alt="logo"
            className="w-4.5 h-4.5 absolute top-0 opacity-0 group-hover:opacity-100 transition-all"
          />
        </div>
      )}
      {name}
    </Link>
  );
}

function FooterGroup({ category }: { category: string }) {
  const Links = footerLinks.filter((footerLink) => footerLink.category === category);
  return (
    <div>
      <h2 className="font-DM font-bold text-base text-primary-900 mb-4">{category}</h2>
      <div className="flex flex-col gap-2">
        {Links.map((Link, index) => (
          <FooterLink key={index} {...Link} />
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const footerCategories = [...new Set(footerLinks.map((item) => item.category))];
  return (
    <footer className="px-5 max-w-360 m-auto pt-14 pb-10 md:pt-20 md:px-8 lg:px-28">
      <Link href="/" className="block flex-none">
        <ThemeImage
          srcDark="/icons/Nimbus_logodark.svg"
          srcLight="/icons/Nimbus_logo.svg"
          alt="logo"
          className="w-28.5 h-auto mb-14"
        />
      </Link>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-14 md:mb-28">
        {footerCategories.map((category, index) => (
          <FooterGroup key={index} category={category} />
        ))}
      </div>

      <div className="border-t border-primary-300 py-5 flex justify-between gap-6">
        <p className="text-sm text-primary-700 flex-initial">©2025 NEUROS · All rights reserved.</p>
        <div className="flex gap-6 flex-none">
          <button className="font-medium text-sm text-primary-800">Term of use</button>
          <button className="font-medium text-sm text-primary-800">Privacy policy</button>
          <button className="font-medium text-sm text-primary-800">Security</button>
        </div>
      </div>
    </footer>
  );
}
