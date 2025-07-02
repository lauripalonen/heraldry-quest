import type { Metadata } from "next";
import { Jacquard_24, Lato } from "next/font/google";
import "@/globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const jacquard24 = Jacquard_24({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jacquard-24",
});

const lato = Lato({
  subsets: ["latin"],
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
    <html lang="en" className="h-full">
      <body className={`${jacquard24.variable} ${lato.variable} antialiased h-full`}>
        <Header />
        <main className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height)] h-full">
          {children}
          <Toaster position="bottom-right" duration={2500} />
        </main>
      </body>
    </html>
  );
}
