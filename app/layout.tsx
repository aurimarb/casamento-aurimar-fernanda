import type { Metadata } from 'next';
import { Cormorant_Garamond, Crimson_Text } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-display',
});

const crimson = Crimson_Text({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Aurimar e Fernanda - Casamento',
  description:
    'Bem-vindos ao nosso cantinho! O grande dia está chegando. 08.08.2026 - Eco Espaço Eventos, Santa Isabel - SP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  );
}
