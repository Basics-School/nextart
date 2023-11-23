import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/layouts/header";
import { Sheet } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {  jetBrains_Mono } from "@/lib/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          jetBrains_Mono.className,
          "min-h-screen overflow-hidden  flex flex-col bg-[url(https://grainy-gradients.vercel.app/noise.svg)] "
        )}
      >
        <ThemeProvider>
          <Sheet>
            <Header />
            <main className="h-full flex-1 from-0% bg-radient-circle-b from-yellow-500/70 flex items-center justify-center via-yellow-500/40 to-yellow-200/50 dark:from-yellow-950/60 dark:via-stone-950/90  dark:to-stone-950">
              {children}
            </main>
          </Sheet>
        </ThemeProvider>
      </body>
    </html>
  );
}
