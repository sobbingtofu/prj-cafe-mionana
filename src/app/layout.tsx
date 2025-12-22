import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cafe Mio&Nana",
  description: "따뜻한 시간이 시작되는 곳",
  icons: {
    icon: "/logo/original-color/logo-imageOnly.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
