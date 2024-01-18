import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.scss";

export const metadata: Metadata = {
  title: "Sky careers",
  description: "Careers website for Sky",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
