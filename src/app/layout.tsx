import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: {
    template: "Hrichi Yassir | %s ",
    default: "Hrichi Yassir | Portfolio",
  },
  description: `"It's all fun and games until the bugs eat my a-live code", get it?, bugs on the code that is "live", like you know, in production..., you know what, just welcome to my portfolio  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className=" container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
