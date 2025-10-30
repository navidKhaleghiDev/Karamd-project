import type { Metadata } from "next";
import "../globals.css";

// Metadata object for the page
export const metadata: Metadata = {
  title: "نرم افزار آنلاین کارآمد",
  description:
    "کارآمد خیلی ساده و حرفه ای ، برای رفع مشکلات همیشه در کنار شما خواهد بود",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
