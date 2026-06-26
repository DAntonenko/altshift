import type { Metadata } from 'next';
import { fixel } from '@/assets/fonts';
import './globals.css';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
