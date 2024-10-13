import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Link } from "@nextui-org/link";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const currentYear = new Date().getFullYear();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center gap-20 my-10">
              <Link
                isExternal
                className="flex items-center gap-2 text-current"
                href="https://google.com"
                title="apaya company homepage"
              >
                <span className="text-default-600">Copyright</span>
                <p className="text-primary hover:text-customColor-300">
                  Apaya Company
                </p>
                <span className="text-default-600">{currentYear}</span>
              </Link>
              <div className="flex items-center gap-2">
                <Link>
                  <FaLinkedin className="text-customColor-300" size={24} />
                </Link>
                <Link>
                  <FaInstagramSquare
                    className="text-customColor-300"
                    size={24}
                  />
                </Link>
                <Link>
                  <FaWhatsappSquare
                    className="text-customColor-300"
                    size={24}
                  />
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
