import type { Metadata } from "next";
import { Orbitron } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AllianceBook',
  description: 'Search, filter, and explore Star Wars characters.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={` ${orbitron.variable} antialiased`}>{children}</body>
    </html>
  );
}
