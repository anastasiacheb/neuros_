import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Nav, Footer } from '@/components';

const inter = localFont({
  src: [
    {
      path: './fonts/inter-v18-latin-200.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/inter-v18-latin-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/inter-v18-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/inter-v18-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/inter-v18-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/inter-v18-latin-800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/inter-v18-latin-900.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/inter-v18-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});

const DM = localFont({
  src: [
    {
      path: './fonts/dm-sans-v15-latin-200.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans-v15-latin-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans-v15-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans-v15-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans-v15-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans-v15-latin-800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans-v15-latin-900.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans-v15-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-DM',
});

export const metadata: Metadata = {
  title: 'Neuros',
  description:
    'Neuros - Revolutionizing Business Decisions with AI-Powered Analytics. Harness the power of artificial intelligence to transform your business data into actionable insights, propelling you to new heights of success.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${DM.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
