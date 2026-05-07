import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexaali Agency",
  description: "Premium branding, web design, and digital growth for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
