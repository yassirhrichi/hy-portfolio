import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hrichi Yassir - Portfolio",
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
        <header className="bg-retro-gray py-4 w-full fixed z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="font-bold text-2xl ">H.YASSIR</div>
            <ul className="flex space-x-4">
              <li className="hover:text-retro-red">
                <Link href="#about-me">About me</Link>
              </li>
              <li className="hover:text-retro-red">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="hover:text-retro-red">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-retro-red text-retro-white">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Hrichi Yassir
          </p>
        </footer>
      </body>
    </html>
  );
}
