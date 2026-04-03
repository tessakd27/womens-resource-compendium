import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { BackgroundSparkles } from "@/components/BackgroundSparkles";

const fontHeading = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontSans = Nunito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Women's Resource Compendium",
  description: "A cozy and inviting compendium for women's health, rights, and resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground retro-bg pattern-dots selection:bg-primary selection:text-primary-foreground relative`}>
        <BackgroundSparkles />
        <Navigation />
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
