import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atheer — Your Bridge to Professional Property Services",
  description:
    "Atheer connects property owners with trusted, vetted service providers in cleaning, maintenance, security and more.",
  metadataBase: new URL("https://atheer.example"),
  openGraph: {
    title: "Atheer — Property Services Platform",
    description:
      "Smart solutions for property management & services. Connecting owners with verified providers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" className={inter.variable}>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
