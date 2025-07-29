import { Inter } from 'next/font/google'
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, SemiBold
  variable: "--font-inter",
});

export const myFont = localFont({ src: "./fonts/pricedown/Pricedown-Black.woff2" });
