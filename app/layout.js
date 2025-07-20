import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BACAN",
  description: "Bacan, jugar, reir, bacan",
  metadataBase: new URL("https://bacan-romancastro.vercel.app/"),
  openGraph: {
    title: "BACAN",
    description: "Bacan, jugar, reir, bacan",
    url: "https://bacan-romancastro.vercel.app/",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,  
        alt: "Captura de pantalla del sitio",  
      }
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BACAN",
    description: "Bacan, jugar, reir, bacan",
    images: ["/og-image.jpg"],  
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
