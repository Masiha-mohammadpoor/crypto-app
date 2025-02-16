import "../../styles/globals.css";

export const metadata = {
  title: "crypto",
  description: "crypto app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
