"use client";
import "@adyen/adyen-web/dist/adyen.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Auth, Purchase, Config } from "@cleeng/mediastore-sdk";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    Config.setJWT(new URLSearchParams(location.search).get("jwt"));
    Config.setEnvironment("sandbox");
    Config.setPublisher("263253299");
    Config.setMyAccountUrl(`http://localhost:3000/account`);
    Config.setCheckoutPayPalUrls({
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/payment`,
      errorUrl: `http://localhost:3000/payment`,
    });
    Config.setVisibleAdyenPaymentMethods(["card", "googlepay", "applepay"]);
    setIsClient(true);
  }, []);

  return (
    <>
      {Auth.isLogged() && isClient ? (
        <Purchase offerId={"P709109459_QA"} />
      ) : (
        <div className="text-white text-center">Not Authorized.</div>
      )}
    </>
  );
}
