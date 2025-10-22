import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    description: "Bacán: el juego de cartas que convierte cualquier mesa en pura risa y diversión. ¡Rápido, sencillo y con mucho jaleo! Descarta, espeja, utiliza poderes y canta lo menos posible... o estás fuera.",
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
        {/* <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TDV93XWV');
            `,
          }}
        /> */}
        <link rel="preload" href="/fonts/Montserrat/Montserrat-VariableFont_wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
