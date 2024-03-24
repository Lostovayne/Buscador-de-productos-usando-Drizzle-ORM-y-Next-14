import { Icons } from "@/components/Icons";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative border-gray-200 bg-white border-b min-h-screen text-slate-900 overflow-hidden isolate">
          <svg
            className="[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] -z-10 absolute inset-0 w-full h-full stroke-gray-200"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            />
          </svg>

          <div className="lg:flex gap-16 mx-auto px-6 lg:px-8 lg:py-24 pt-10 pb-24 sm:pb-32 max-w-7xl">
            <div className="flex flex-col items-center gap-4 w-full h-full">
              <Icons.Sparkles className="w-16 h-16" />
              <h1 className="font-bold text-4xl sm:text-6xl tracking-tight">MagicSearch</h1>
              <p className="max-w-xl text-center text-lg text-slate-700">
                A beautifully designed, hybrid search engine that enhances search accuracy by querying
                semantically related results.
              </p>
              <div className="flex flex-col mx-auto mt-16 w-full max-w-2xl">
                <SearchBar />
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}