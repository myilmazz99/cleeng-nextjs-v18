import dynamic from "next/dynamic";

const PaymentProvider = dynamic(() => import("@/provider"), { ssr: false });

export default function PaymentLayout({ children }) {
  return <PaymentProvider>{children}</PaymentProvider>;
}
