import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cody the Coder | Software Engineer",
  description:
    "Homepage showcasing engineering expertise, core competencies, and featured projects for enterprise software engineering positions.",
  keywords: [
    "software engineer",
    "distributed systems",
    "cloud architecture",
    "backend development",
    "microservices",
    "kubernetes",
  ],
  authors: [{ name: "Cody the Coder" }],
  openGraph: {
    title: "Cody the Coder | Software Engineer",
    description:
      "Software engineer specializing in scalable distributed systems, cloud architecture, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
