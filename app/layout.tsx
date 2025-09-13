import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import ReduxProvider from "@/redux/ReduxProvider/ReduxProvider";
import CartInitializer from "@/redux/CartInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELIF Tech",
  description: "ELIF Tech Test Assignment Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <CartInitializer/>
          <SidebarProvider>
            <AppSidebar />
            <div className="grow">
              <Header />
              {children}
            </div>
            <Toaster richColors />
          </SidebarProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
