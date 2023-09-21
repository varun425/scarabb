import { networkSettings } from "./chains";
import 'dotenv/config'
const DEFAULT_CHAINID = 1; // Use the BSC chain ID

export const networkSwitcher = async (
  desiredChainId = DEFAULT_CHAINID,
  reloadRequired
) => {
  const chainConfig = networkSettings[desiredChainId];

  const connectedWallet = localStorage.getItem("connectedWallet");
  if (connectedWallet === "metamask" || connectedWallet === "wallectConnect") {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainConfig.chainId }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                rpcUrls: chainConfig.rpcUrls,
                chainId: chainConfig.chainId,
                nativeCurrency: {
                  name: chainConfig.nativeCurrency.name,
                  symbol: chainConfig.nativeCurrency.symbol,
                  decimals: chainConfig.nativeCurrency.decimals,
                },
                chainName: chainConfig.chainName,
              },
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
    }
  }
};
