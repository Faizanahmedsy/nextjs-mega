import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/lib/toolkit/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  //add a ' in the title
  title: "Next Mega by @Faizan",
  description: "Made with love by @Faizan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
