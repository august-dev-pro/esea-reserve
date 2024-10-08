import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RootLayout2 from "./layout2";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "easyreserve",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout2>
          <div>{children}</div>
        </RootLayout2>
      </body>
    </html>
  );
}
