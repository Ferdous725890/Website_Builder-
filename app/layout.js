"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReduxProvider from "./providers/ReduxProvider";
import AuthProvider from "./providers/AuthProvider";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <div className="sticky top-0 z-10">
                <Navbar />
              </div>
              <div className="min-h-[calc(100vh-8rem)] h-full">{children}</div>
              <Footer />
            </AuthProvider>
          </QueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
