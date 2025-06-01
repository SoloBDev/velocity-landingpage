import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { 
  Poppins, 
  Roboto, 
  Montserrat, 
  Oleo_Script 
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const oleoScript = Oleo_Script({
  variable: "--font-oleo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Velocity Landing Page",
  description: "velocity is a landing page, a modern and responsive design showcasing services like social media management, video editing, graphical design, advertising, and consulting. It features a clean layout with sections for services, contact information, and social media links. The page is built using Next.js and styled with Tailwind CSS for a sleek user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`
      ${geistSans.variable} 
      ${geistMono.variable}
      ${poppins.variable}
      ${roboto.variable}
      ${montserrat.variable}
      ${oleoScript.variable}
    `}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}