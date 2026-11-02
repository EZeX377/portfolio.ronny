"use client";
import dynamic from "next/dynamic";
import { usePortfolio } from "./PortfolioProvider";

const PortfolioDialogs = dynamic(() => import("./PortfolioDialogs"), { ssr: false });

export default function DeferredPortfolioDialogs() {
  const { dialog } = usePortfolio();
  return dialog ? <PortfolioDialogs /> : null;
}
