import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../scss/main.scss";
import PageRender from "./PageRender";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Themefisher App",
  description: "Generated by themefisher app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, interactive-widget=resizes-content"
        />
      </Head>

      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <PageRender>{children}</PageRender>
      </body>
    </html>
  );
}
