import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Md Jannatun Naim | Full Stack Developer",
  description: "Portfolio of Md Jannatun Naim — Full Stack Developer & CSE Graduate from AIUB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}