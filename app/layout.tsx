import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script"; // Import the Script component
import "./globals.css";
import Sidebar from "./(pages)/navbar/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tomer Amitai",
  description: "Created by Tomer Amitai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NPP63W3TLK"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NPP63W3TLK');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8 relative">
            <div className="absolute inset-0">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
            {children}
          </main>
        </div>

        <div className="flex justify-center items-center mb-2">
          <footer className="footerf inline-block text-center font-serif bg-black bg-opacity-25 text-white px-3 py-1">
            ©️ Tomer Amitai | 2024 All Rights Reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
