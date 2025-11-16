import { SanityLive } from '@/sanity/lib/live';
import { Nav, Footer } from '@/components';

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
      <SanityLive />
    </>
  );
}
