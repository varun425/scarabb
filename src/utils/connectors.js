import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";

const metamask = initializeConnector((actions) => new MetaMask({ actions }));
const projectId = "254ea5241e76b17f3ae64e978cc97b3c";
const SUPPORTED_CHAINS = {

  56: {
    urls: ["https://bsc-dataseed.binance.org"],
    name: "BSC Mainnet",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://bscscan.com"],
  },
  97: {
    urls: ["https://morning-omniscient-paper.bsc-testnet.discover.quiknode.pro/90d58ed07a0838901e4a85a5cd150a5611dddc33/"],
    name: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "tBNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },
  1: {
    name: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'ETHEREUM',
      symbol: 'ETH',
      decimals: 18,
    },
    urls: ['https://rpc.ankr.com/eth/69a7eb125182bc356a0add8f3709336eb402d4bbca3a2cd4b1183004ff794e18/'],
    blockExplorerUrls: ['https://etherscan.io/'],
  }
};

const [mainnet, ...optionalChains] = Object.keys(SUPPORTED_CHAINS).map(Number);

const walletConnectV2 = initializeConnector(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: projectId,
        chains: [mainnet],
        rpcMap: {
          56: `https://rpc.walletconnect.com/v1/?chainId=eip155:56&projectId=${projectId}`,
          97: `https://rpc.walletconnect.com/v1/?chainId=eip155:97&projectId=${projectId}`,
          1: `https://rpc.walletconnect.com/v1/?chainId=eip155:97&projectId=${projectId}`,
        },
        rpc: {
          56: `https://bsc-dataseed.binance.org`,
          97: `https://morning-omniscient-paper.bsc-testnet.discover.quiknode.pro/90d58ed07a0838901e4a85a5cd150a5611dddc33/`,
          1: `https://rpc.ankr.com/eth/69a7eb125182bc356a0add8f3709336eb402d4bbca3a2cd4b1183004ff794e18`,
        },
        optionalChains,
        showQrModal: true,
      },
    })
);

const connectors = [metamask, walletConnectV2];

export default connectors;