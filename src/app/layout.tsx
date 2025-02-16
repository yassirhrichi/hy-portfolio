import type { Metadata } from "next";
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
        <main className=" container mx-auto min-h-[calc(100vh-76px)] ">
          <div className="px-4 sm:px-8 md:px-10 lg:px-28 xl:px-52"> 
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
// -76px is the height of the header + footer
