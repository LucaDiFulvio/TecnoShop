import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";
import { AuthProvider} from "../context/AuthContext"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TecnoShop",
  description: "the TecnoShop app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <Header />
          {children}
        <Footer />
      </AuthProvider>

      </body>
    </html>
  );
}
