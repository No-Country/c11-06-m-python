import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mochil-app",
  description: "por definir",
  keywords: ["Next.js", "Python", "No-Country"],
  authors: [
    {
      name: "",
      url: "",
    },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main className="pt-28 px-10 flex min-h-[calc(100vh-7rem)] flex-col items-center justify-between">{children}</main>
      </body>
    </html>
  );
}
