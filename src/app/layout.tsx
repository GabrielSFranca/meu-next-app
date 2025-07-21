import { Metadata } from "next";
import { Roboto } from 'next/font/google';
import './styles/globals.css';
import { inter, geistSans, geistMono} from "./styles/fonts";
import { Header } from '@/components/header';

/*const inter = Inter({
   subsets: ['latin'] 
});*/
const roboto = Roboto({ 
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: "Informática | ufsm",
  description: 'Portal oficial do Departamento de Informática da UFSM',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${roboto.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}