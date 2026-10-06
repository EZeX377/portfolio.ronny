import Navbar from "@/components/portfolio/Navbar";
import { PortfolioProvider } from "@/components/portfolio/PortfolioProvider";
import PortfolioDialogs from "@/components/portfolio/PortfolioDialogs";
import "./globals.css";
export const metadata = {
    title: "Ronny Das — Interface Theatre",
    description: "Ronny Das — Project Lead & UI/UX Developer. UI/UX and delivery for government and enterprise platforms.",
    icons: { icon: "/icon.svg" },
    openGraph: { title: "Ronny Das — Interface Theatre", description: "Project Lead & UI/UX Developer. Government systems, clear interfaces, and coordinated delivery.", type: "website" },
};
export const viewport = { themeColor: "#f3f2ed" };
// Initialize preferences before paint; the provider owns subsequent changes.
const preferences = `try{const t=localStorage.getItem('rd-theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');const m=localStorage.getItem('rd-motion');document.documentElement.dataset.motion=m==='on'||(m!=='off'&&!matchMedia('(prefers-reduced-motion: reduce)').matches)?'on':'off'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.motion=matchMedia('(prefers-reduced-motion: reduce)').matches?'off':'on'}`;
export default function RootLayout({ children }) {
    return <html lang="en" data-theme="light" suppressHydrationWarning>
    <head>
      <script dangerouslySetInnerHTML={{ __html: preferences }}/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;450;500;550;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    </head>
    <body><PortfolioProvider><a data-slot="skip-link" className={"fixed left-[20px] top-[-100px] [background:var(--ink)] text-bg p-[12px_20px] z-[100] [&:focus]:top-[10px]"} href="#main">Skip to content</a><Navbar />{children}<PortfolioDialogs /></PortfolioProvider></body>
  </html>;
}
