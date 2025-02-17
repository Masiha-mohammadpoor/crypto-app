import "../../styles/globals.css";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export const metadata = {
  title: "crypto",
  description: "crypto app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className}`}>{children}</body>
    </html>
  );
}
