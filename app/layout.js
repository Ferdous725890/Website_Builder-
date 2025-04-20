import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";
import AuthProvider from "./providers/AuthProvider";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";
import ReactQueryProvider from "./providers/ReactQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "No-Code Website Builder",
  description: "Create websites easily with drag-and-drop — no coding needed!",
  keywords: ["No-code", "Website Builder", "Drag and Drop", "Next.js"],
  // openGraph: {
  //   title: "No-Code Website Builder",
  //   description: "Create websites easily with drag-and-drop — no coding needed!",
  //   url: "https://your-site.vercel.app",
  //   siteName: "Website Builder",
  //   images: [
  //     {
  //       url: "/og-image.png", // Put this image in the public/ folder
  //       width: 1200,
  //       height: 630,
  //       alt: "No-Code Website Builder",
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "No-Code Website Builder",
  //   description: "Create websites easily with drag-and-drop — no coding needed!",
  //   images: ["/og-image.png"],
  // },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <ReduxProvider>
          <ReactQueryProvider>
            <AuthProvider>
              <div className="sticky top-0 z-10">
                <Navbar />
              </div>
              <div className="min-h-[calc(100vh-8rem)] h-full">{children}</div>
              <Footer />
            </AuthProvider>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
