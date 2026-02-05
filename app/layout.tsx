import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { Navigation } from "@/components/navigation";
import { AuthModal } from "@/components/auth-modal";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Branex - Find Your Perfect Marketing Agency",
  description: "Match with marketing agencies that think like you. Discover agencies aligned with your goals, budget, and thinking style.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          <Navigation />
          <AuthModal />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
