import type { Metadata } from "next";
import { Sansita_Swashed, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Organisms/navbar";

const sansita = Sansita_Swashed({
  variable: "--font-sansita",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "KEITHSTON",
  description:
    "Your cozy spot for expertly brewed coffee, fresh pastries, and a welcoming atmosphere. Taste, relax, and enjoy every cup!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansita.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
