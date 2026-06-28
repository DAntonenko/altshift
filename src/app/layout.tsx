import type { Metadata } from 'next';
import { fixel } from '@/assets/fonts';
import './globals.css';

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
      <body className="bg-background flex min-h-full justify-center">
        <div className="flex max-w-[1200px] flex-1 flex-col items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
