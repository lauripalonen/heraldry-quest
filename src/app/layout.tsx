import type { Metadata } from "next";
import { Jacquard_24, Lato } from "next/font/google";
import "@/globals.css";
import Header from "@/components/Header";

const jacquard24 = Jacquard_24({
  weight: "400",
  variable: "--font-jacquard-24",
});

const lato = Lato({
  weight: "400",
  variable: "--font-lato"
})

export const metadata: Metadata = {
  title: "Heraldry Quest",
  description: "A coat of arms quiz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jacquard24.variable} ${lato.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
