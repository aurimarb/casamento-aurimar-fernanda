import type { Metadata } from 'next';
import './globals.css';

/**
 * Tipografia: Adobe Fonts (Typekit) — la-bohemienne (título) + trajan-pro-3 (corpo)
 * @see https://use.typekit.net/njv3ubd.css
 */

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
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/njv3ubd.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
