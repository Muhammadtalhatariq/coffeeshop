// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";
import { Lobster_Two } from "next/font/google";

const Lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["700"],
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CoffeeShop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={Lobster.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
