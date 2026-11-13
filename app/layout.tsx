import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Crab Ceylon | The Epicurean Crown of Ceylon Seafood",
  description: "Experience world-renowned wild Ceylon lagoon mud crabs, giant freshwater prawns, and oceanic delicacies prepared with 21 aromatic spices. Dine in Colombo or order live for heated delivery with real-time tracking.",
  keywords: ["Crab Ceylon", "Ceylon Lagoon Crab", "Sri Lanka Seafood Restaurant", "Colombo Seafood", "Chili Crab", "Jaffna Crab Curry", "Seafood Delivery Colombo"],
  openGraph: {
    title: "Crab Ceylon | The Epicurean Crown of Ceylon Seafood",
    description: "Wild Ceylon lagoon mud crabs, giant prawns, and coastal delicacies. Order online with live tracking.",
    images: [{ url: "/images/hero-crab.jpg" }]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;0,6..96,800;0,6..96,900;1,6..96,400;1,6..96,700;1,6..96,800&family=Caveat:wght@600;700&family=Cinzel:wght@500;600;700;800;900&family=Manrope:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Prata&family=Italiana&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#ffffff] text-[#111827] antialiased selection:bg-[#dc2626] selection:text-white">
        {children}
      </body>
    </html>
  );
}
