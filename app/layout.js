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
  description: "BACAN - Lo más importante de este juego no es ganar, sino, no perder... Es coña, lo importante es ganarle a tus amigos, tu pareja e incluso a tus sobrinitos!",
  metadataBase: new URL("https://bacanplay.com/"),
  openGraph: {
    title: "BACAN",
    description: "BACAN - Lo más importante de este juego no es ganar, sino, no perder... Es coña, lo importante es ganarle a tus amigos, tu pareja e incluso a tus sobrinitos!",
    url: "https://bacanplay.com/og-image.jpg",
    images: [
      {
        url: 'https://bacanplay.com/og-image.jpg',
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
    description: "BACAN - Lo más importante de este juego no es ganar, sino, no perder... Es coña, lo importante es ganarle a tus amigos, tu pareja e incluso a tus sobrinitos!",
    images: ["https://bacanplay.com/og-image.jpg"],  
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bacanplay.com",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/fonts/Montserrat/Montserrat-VariableFont_wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
