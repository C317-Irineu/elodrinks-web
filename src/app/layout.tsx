// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Minha Aplicação',
  description: 'Descrição aqui',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
