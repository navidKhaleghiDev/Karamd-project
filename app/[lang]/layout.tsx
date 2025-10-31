import type { Metadata } from "next";

import "../globals.css";
import { Navbar } from "../../components/templates/Navbar";
import { Footer } from "../../components/templates/Footer";

// Metadata object for the page
export const metadata: Metadata = {
  title: "نرم افزار آنلاین کارآمد",
  description:
    "کارآمد خیلی ساده و حرفه ای ، برای رفع مشکلات همیشه در کنار شما خواهد بود",
};

// Add the transition file to the project

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  return (
    <html lang={lang} dir="rtl">
      <body className="font-[kalameh]">
        <main className="size-full m-auto max-w-116 px-1.5 py-3">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
