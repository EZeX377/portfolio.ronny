import Navbar from "@/components/portfolio/Navbar";
import "./globals.css";

export const metadata = {
  title: "Ronny Das | UI/UX Developer and Project Lead for Government Systems",
  description:
    "Ronny Das is a UI/UX Developer and Project Lead building Government Systems, Web Applications, and Dashboard Systems with a focus on delivery, usability, and frontend execution.",
  icons: {
    icon: "/icon.svg",
  },
  keywords: [
    "UI/UX Developer",
    "Project Lead",
    "Government Systems",
    "Web Applications",
    "Dashboard Systems",
    "Frontend Development",
    "Portfolio"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/harabara" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="page-shell min-h-screen tracking-wide overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}