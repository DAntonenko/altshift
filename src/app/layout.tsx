import type { Metadata } from 'next';
import { fixel } from '@/assets/fonts';
import './globals.css';

import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'AltShift',
  description: 'AltSift',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fixel.variable}>
      <body className="bg-background flex min-h-screen justify-center">
        <div className="text-gray flex max-w-[1264px] flex-1 flex-col items-center p-8">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
