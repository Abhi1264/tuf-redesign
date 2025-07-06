import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "TUF+ | TakeUForward Plus - Your One Stop DSA & System Design Learning Platform",
  description:
    "Master Data Structures & Algorithms, System Design, and coding interviews with TakeUForward Plus. Join thousands of developers who have cracked top tech companies.",
  keywords:
    "DSA, System Design, Coding Interview, Data Structures, Algorithms, TakeUForward, TUF, TUF+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
