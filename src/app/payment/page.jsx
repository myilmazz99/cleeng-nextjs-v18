"use client";
import "@adyen/adyen-web/dist/adyen.css";
import "react-loading-skeleton/dist/skeleton.css";
import dynamic from "next/dynamic";

const Purchase = dynamic(() => import("@/purchase"), { ssr: false });

export default function Page() {
  return <Purchase />;
}
