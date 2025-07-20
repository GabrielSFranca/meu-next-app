import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './styles/globals.css';
import { Header } from '@/components/header';

const inter = Inter({
   subsets: ['latin'] 
});
const roboto = Roboto({ 
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'Departamento de Informática - UFSM',
  description: 'Portal oficial do Departamento de Informática da UFSM',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${roboto.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}