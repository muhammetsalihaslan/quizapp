import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
