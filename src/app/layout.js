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

const siteUrl = "https://costa-eight.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cinthia Costa Beauty Studio",
  description:
    "Extensao de cilios, design de sobrancelhas e mentoria profissional com assinatura Cinthia Costa em Capivari de Baixo, Santa Catarina.",
  keywords: [
    "extensao de cilios",
    "lash designer",
    "design de sobrancelhas",
    "Capivari de Baixo",
    "Santa Catarina",
    "volume russo",
    "fio a fio",
    "lash lifting",
    "curso de cilios",
  ],
  authors: [{ name: "Cinthia Costa Beauty Studio" }],
  creator: "Cinthia Costa Beauty Studio",
  publisher: "Cinthia Costa Beauty Studio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Cinthia Costa Beauty Studio",
    title: "Cinthia Costa Beauty Studio | Lash Designer & Beauty Expert",
    description:
      "Extensao de cilios fio a fio, hibrido e mega volume. Design de sobrancelhas e mentoria para lash artists em Capivari de Baixo, SC.",
    images: [
      {
        url: `${siteUrl}/image/hero01.png`,
        width: 1200,
        height: 630,
        alt: "Cinthia Costa Beauty Studio - Extensao de Cilios",
      },
    ],
  },
  facebook: {
    appId: "",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cinthia_costalash",
    title: "Cinthia Costa Beauty Studio | Lash Designer & Beauty Expert",
    description:
      "Extensao de cilios fio a fio, hibrido e mega volume. Design de sobrancelhas e mentoria para lash artists.",
    images: [`${siteUrl}/image/hero01.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "",
    facebook: "",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
