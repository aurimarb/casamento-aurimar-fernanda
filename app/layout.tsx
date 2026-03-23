import type { Metadata } from 'next';
import { Allura, Cinzel } from 'next/font/google';
import './globals.css';

/**
 * Fonte script para o título hero — substitui La Bohemienne do Figma
 * Allura é uma script elegante e fluida, muito similar
 */
const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
});

/**
 * Fonte display/body — substitui Trajan Pro 3 do Figma
 * Cinzel é inspirada em inscrições romanas, a mais próxima disponível
 */
const cinzel = Cinzel({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
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
    <html lang="pt-BR" className={`${allura.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
