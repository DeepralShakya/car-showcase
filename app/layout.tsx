import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "AutoVista",
  description: "Discover the latest models, compare features, and explore the world of automobiles at AutoSpot - the premier online showcase for car enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
