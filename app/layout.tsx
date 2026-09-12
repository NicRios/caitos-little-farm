import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Caito’s Little Farm',
  description:
    'A warm, welcoming home for farm visits, seasonal updates, and simple days worth remembering.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
