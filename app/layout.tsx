import Footer from "./components/Footer/Footertsx";
import Gethup from "./components/Gethup/Gethup";
import Nav from "./components/Navbar/Nav";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed_Mansour",
  description: "I am Ahmed Mansour frontend developer I use ReactJS and Next.js in my work",
  keywords:"ahmed mansour , frontend dev , reactJS ,Nex js",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className=" min-h-screen" suppressHydrationWarning={true}>
      
          <Nav />
          {children}
          <Gethup />
          <Footer />
     
      </body>
    </html>
  );
}
