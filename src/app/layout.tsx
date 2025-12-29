import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost, Outfit, BBH_Hegarty } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
})

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campo Crowd",
  description: "Task automation and earning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jost.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
