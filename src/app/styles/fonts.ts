import { Inter, Geist, Geist_Mono} from "next/font/google"; // Importando o pacote de fontes do Next.js

// Configura as fontes

export const inter = Inter({ 
    subsets: ['latin'], 
    variable: '--font-inter-body'
});

export const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
export const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });