"use client";
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import getWeb3 from "../utils/getWeb3";
import { networkSwitcher } from "../utils/networkSwitcher";

import connectors from "../utils/connectors";

const injected = connectors[0][0];
const walletConnectv2 = connectors[1][0];

const useAutoRefresh = () => {
  const { connector, chainId, account, provider } = useWeb3React();

  useEffect(() => {
    const connectedWallet = localStorage.getItem("connectedWallet");

    if (connectedWallet === 'walletConnectV2') {
      if (walletConnectv2.connectEagerly) {
        console.log("eager");
        walletConnectv2.connectEagerly().catch((error) => {
          console.log("Failed to connect eagerly to connector", error);
        });
      } else {
        walletConnectv2.activate().catch()((error) => {
          console.log("Failed to connect catch to connector", error);
        });
      }
    } else if (connectedWallet === 'metamask') {
      if (connector.connectEagerly) {
        connector.connectEagerly().catch((error) => {
          console.log("Failed to connect eagerly to connector", error);
        });
      } else {
        connector.activate().catch()((error) => {
          console.log("Failed to connect catch to connector", error);
        });
      }
    }
  }, []);

  useEffect(() => {
    const assignWeb3 = async () => {
      window.web3 = await getWeb3(provider, chainId);
    };
    if (account && provider) {
      assignWeb3();
    }
  }, [account, provider]);

  useEffect(() => {
    if (
      ((chainId === 1 ||
        chainId === 1) &&
        account) ||
      typeof chainId === "undefined"
    ) {
      // do nothing
    } else {
      alert("Scarab only Supports only ETH network");
      networkSwitcher();
    }
  }, [chainId]);
};

export default useAutoRefresh;
