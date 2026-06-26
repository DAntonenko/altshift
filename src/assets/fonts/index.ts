import localFont from 'next/font/local';

export const fixel = localFont({
  src: [
    {
      path: './FixelText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './FixelText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './FixelDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],

  variable: '--font-fixel',

  display: 'swap',

  preload: true,

  fallback: ['system-ui', 'sans-serif'],
});
