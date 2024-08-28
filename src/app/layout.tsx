import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GSAPの学習',
  description: 'GSAPの学習用サイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
