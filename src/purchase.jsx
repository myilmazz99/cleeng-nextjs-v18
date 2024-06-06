"use client";
import "@adyen/adyen-web/dist/adyen.css";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { Purchase, Config, Auth } from "@cleeng/mediastore-sdk";

export default function TODPurchase() {
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
