"use client";

import { Provider } from "react-redux";
import { store } from "@cleeng/mediastore-sdk";

export default function PaymentProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
