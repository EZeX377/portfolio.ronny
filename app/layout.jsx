import Navbar from "@/components/portfolio/Navbar";
import { PortfolioProvider } from "@/components/portfolio/PortfolioProvider";
import DeferredPortfolioDialogs from "@/components/portfolio/DeferredPortfolioDialogs";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";
const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const displayFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
export const metadata = {
    metadataBase: new URL(siteUrl),
    title: "Ronny Das — Interface Theatre",
    description: "Ronny Das — Project Lead & UI/UX Developer. UI/UX and delivery for government and enterprise platforms.",
    icons: { icon: "/icon.svg" },
    openGraph: { title: "Ronny Das — Interface Theatre", description: "Project Lead & UI/UX Developer. Government systems, clear interfaces, and coordinated delivery.", type: "website", siteName: "Ronny Das — Interface Theatre", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "Ronny Das — Interface Theatre", description: "Project Lead & UI/UX Developer. Government systems, clear interfaces, and coordinated delivery.", images: [{ url: "/opengraph-image", alt: "Ronny Das — Project Lead & UI/UX Developer" }] },
};
export const viewport = { themeColor: "#f3f2ed" };
// Initialize preferences before paint; the provider owns subsequent changes.
const preferences = `try{const t=localStorage.getItem('rd-theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');const m=localStorage.getItem('rd-motion');document.documentElement.dataset.motion=m==='on'||(m!=='off'&&!matchMedia('(prefers-reduced-motion: reduce)').matches)?'on':'off'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.motion=matchMedia('(prefers-reduced-motion: reduce)').matches?'off':'on'}`;
export default function RootLayout({ children }) {
    return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`} data-theme="light" suppressHydrationWarning>
    <head>
      <script dangerouslySetInnerHTML={{ __html: preferences }}/>
    </head>
    <body><PortfolioProvider><a data-slot="skip-link" className={"fixed left-[20px] top-[-100px] [background:var(--ink)] text-bg p-[12px_20px] z-[100] [&:focus]:top-[10px]"} href="#main">Skip to content</a><Navbar />{children}<DeferredPortfolioDialogs /></PortfolioProvider></body>
  </html>;
}
