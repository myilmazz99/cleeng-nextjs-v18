import { Config } from "@cleeng/mediastore-sdk";

export const initCleengConfigs = () => {
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
};
