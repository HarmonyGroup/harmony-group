import { Montserrat, Boogaloo } from "next/font/google";
import ".././globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const boogaloo = Boogaloo({
    variable: "--font-Boogaloo",
    subsets: ["latin"],
    weight: ["400"]
})

export const metadata = {
  title: "Harmony Group NG",
  description: "Expanding possibilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${boogaloo.className} antialiased`}>
        <main className="overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
