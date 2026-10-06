"use client";
import { createContext, useContext, useEffect, useState } from "react";
const PortfolioContext = createContext(null);
const readPreference = (key) => { try {
    return localStorage.getItem(key);
}
catch {
    return null;
} };
const savePreference = (key, value) => { try {
    localStorage.setItem(key, value);
}
catch { /* Keep the choice for this visit. */ } };
export function PortfolioProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const [motionEnabled, setMotionEnabled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  const [dialog, setDialog] = useState(null);
  const [initialized, setInitialized] = useState(false);
    useEffect(() => {
        const dark = matchMedia("(prefers-color-scheme: dark)");
        const reduced = matchMedia("(prefers-reduced-motion: reduce)");
        const syncTheme = () => setTheme(readPreference("rd-theme") || (dark.matches ? "dark" : "light"));
        const syncMotion = () => {
            const preference = readPreference("rd-motion");
            setMotionEnabled(preference === "on" || (preference !== "off" && !reduced.matches));
        };
        const syncStorage = () => { syncTheme(); syncMotion(); };
    syncStorage();
    setInitialized(true);
        dark.addEventListener("change", syncTheme);
        reduced.addEventListener("change", syncMotion);
        window.addEventListener("storage", syncStorage);
        return () => {
            dark.removeEventListener("change", syncTheme);
            reduced.removeEventListener("change", syncMotion);
            window.removeEventListener("storage", syncStorage);
        };
    }, []);
  useEffect(() => {
    if (!initialized) return;
    document.documentElement.dataset.theme = theme;
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#131b20" : "#f3f2ed");
  }, [theme, initialized]);
  useEffect(() => {
    if (!initialized) return;
    document.documentElement.dataset.motion = motionEnabled ? "on" : "off";
  }, [motionEnabled, initialized]);
    useEffect(() => {
        if (!menuOpen && !dialog)
            return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = previous; };
    }, [menuOpen, dialog]);
    useEffect(() => {
        const mobile = matchMedia("(max-width: 800px)");
        const sync = () => { if (!mobile.matches)
            setMenuOpen(false); };
        mobile.addEventListener("change", sync);
        return () => mobile.removeEventListener("change", sync);
    }, []);
    const value = {
        theme, motionEnabled, initialized, menuOpen, dialog,
        toggleTheme: () => { const next = theme === "dark" ? "light" : "dark"; savePreference("rd-theme", next); setTheme(next); },
        toggleMotion: () => { savePreference("rd-motion", motionEnabled ? "off" : "on"); setMotionEnabled(!motionEnabled); },
        openMenu: () => setMenuOpen(true), closeMenu: () => setMenuOpen(false),
        openProject: (id) => { setMenuOpen(false); setDialog({ type: "project", id }); },
        openContact: () => { setMenuOpen(false); setDialog({ type: "contact" }); },
        closeDialog: () => setDialog(null),
    };
    return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}
export const usePortfolio = () => useContext(PortfolioContext);
