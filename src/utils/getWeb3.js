import Web3 from "web3";
import UniversalProvider from "@walletconnect/universal-provider";

const projectId = "254ea5241e76b17f3ae64e978cc97b3c";


const getWeb3 = async (provider, chainId) => {
  let web3;
  const connectedWallet = localStorage.getItem("connectedWallet");

  if (connectedWallet === "walletConnectV2") {
    try {
      const ethereumProvider = await UniversalProvider.init({
        projectId: projectId,
        logger: "debug",
        relayUrl: "wss://relay.walletconnect.com",
        metadata: {
          name: "React App",
          description: "React App for WalletConnect",
          url: "https://walletconnect.com/",
          icons: ["https://avatars.githubusercontent.com/u/37784886"],
        },
      });

      await ethereumProvider.enable({
        namespaces: {
          eip155: {
            methods: [
              "eth_sendTransaction",
              "eth_signTransaction",
              "eth_sign",
              "personal_sign",
              "eth_signTypedData",
            ],
            chains: ["eip155:1"],
            optionalChains: ["eip155:4002", "eip155:42161"],

            events: ["chainChanged", "accountsChanged"],
            rpcMap: {
              56: `https://rpc.walletconnect.com/v1/?chainId=eip155:56&projectId=${projectId}`,
              97: `https://rpc.walletconnect.com/v1/?chainId=eip155:97&projectId=${projectId}`,
              1: `https://rpc.walletconnect.com/v1/?chainId=eip155:97&projectId=${projectId}`,
            },
          },
        },
        skipPairing: false,
      });

      ethereumProvider.setDefaultChain(`eip155:${chainId}`);
      web3 = new Web3(ethereumProvider);
      
    } catch (err) {
      throw err;
    }
  } else if (connectedWallet === "metamask") {
    let mprovider = provider.provider;
    await mprovider.enable();
    web3 = new Web3(mprovider);
  }

  // console.log("web3", web3);
  return web3;
};

export default getWeb3;
