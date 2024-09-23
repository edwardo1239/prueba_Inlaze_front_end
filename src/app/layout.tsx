import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./UI/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
        </div>
        <div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}

