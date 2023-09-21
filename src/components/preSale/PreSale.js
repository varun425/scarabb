"use client"
require('dotenv').config()
import React, { useState, useEffect, useRef } from 'react'
import MetaMaskOnboarding from "@metamask/onboarding";
import { useWeb3React } from "@web3-react/core";
import NavLanding from '../navLanding/NavLanding'
import connectors from "../../utils/connectors";
import Link from 'next/link';
import './PreSale.css';
import getWeb3 from '../../utils/getWeb3'; // Import your getWeb3 function
import Web3 from "web3";
import abi from '../../abi/scarab.json';
const injected = connectors[0][0];
const walletConnectv2 = connectors[1][0];

// const DEFAULT_CHAINID = process.env.DEFAULT_CHAINID;
const DEFAULT_CHAINID =1
const contractAddress = "0xb309c3BffB599068D2bc57F443C1F7683010a8d9"

//local
const PreSale = React.memo(() => {

  const [active, setActive] = useState(false)
  const [backgroundPositionBG, setBackgroundPositionBG] = useState('50% 50%')
  const [activatingConnector, setActivatingConnector] = useState();
  const [contributedAmount, setContributedAmount] = useState(0);
  const [investorContribution, setInvestorContribution] = useState(0);
  const [forSaleTotalSupply, setForSaleTotalSupply] = useState(0);
  const [icoTarget, setIcoTarget] = useState(0);
  const [userTier, setUserTier] = useState(0);
  const [saleStatusMsg, setSaleStatusMsg] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [round, setRound] = useState(null);
  const [saleStatustTime, setSaleStatusTime] = useState(0);
  const [claimToken, setClaimToken] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  // const [investorCount, setInvestorCount] = useState(0);
  const [whitelistAddress, setWhitelistAddress] = useState(null);
  const [tier1Max, setTier1Max] = useState(0);
  const [tier2Max, setTier2Max] = useState(0);
  const [investorBalEth, setInvestorEthBal] = useState(0);
  const [whitelistedBool, setWhiteListedBool] = useState(0);
  const [remainingContribution, setUserRemainingContribution] = useState(0);
  const [claimStatus, setClaimEnabledStatus] = useState(false);
  const onboarding = useRef();
  const { connector, account } = useWeb3React(); // Remove chainId
  const [web3, setWeb3] = useState(null); // Initialize a state variable for Web3.js instance
  const [contract, setContract] = useState(null); // Initialize a state variable for the contract instance


  const onConnectToMetamask = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      setActivatingConnector(injected);
      Promise.resolve(injected.activate(DEFAULT_CHAINID))
        .then(() => {
          setActive(false);
          localStorage.setItem("connectedWallet", "metamask");
        })
        .catch((e) => {
          injected.resetState();
          setActivatingConnector();
          setActive(true);
          localStorage.removeItem("connectedWallet");
          console.debug("Failed to connect to metamask");
        });
    } else {
      onboarding.current.startOnboarding();
    }
  };


  const onConnectWithWalletConnect = () => {
    setActivatingConnector(walletConnectv2);
    Promise.resolve(walletConnectv2.activate()).catch((e) => {
      walletConnectv2.resetState();
      setActivatingConnector();
      localStorage.removeItem("connectedWallet");
      console.debug("Failed to connect to walletConnectV2");
    });
    setActive(false);
    localStorage.setItem("connectedWallet", "walletConnectV2");
  };

  const handleWhitelistCheck = async () => {

    try {
      const rpc = "https://rpc.ankr.com/eth/69a7eb125182bc356a0add8f3709336eb402d4bbca3a2cd4b1183004ff794e18/"
      const _web3 = new Web3(rpc);
      const _contract = new _web3.eth.Contract(abi, contractAddress);
      const _isWhitelisted = await _contract.methods.checkWhitelist(whitelistAddress).call();
      if (_isWhitelisted) {
        alert(`${whitelistAddress} is whitelisted`);
      } else {
        alert(`${whitelistAddress} is not whitelisted`);
      }
    } catch (error) {
      console.log("err", error);
    }
  }

  const handleContribute = async () => {
    try {

      if (!web3 || !contract) {
        console.error('Web3 or contract instance not available');
        return;
      }
      const amountInWei = web3.utils.toWei(contributedAmount.toString(), 'ether');
      const isICOActive = await contract.methods.investingenabled().call();
      if (!isICOActive) {
        alert('ICO is not active');
        return;
      }
      if (remainingContribution == 0) {
        alert("Max Investment reached")
        return;
      }
      const data = await contract.methods.Investing();
      const transaction = await web3.eth.sendTransaction({
        from: account,
        to: contractAddress,
        data: data.encodeABI(),
        value: amountInWei
      });

      console.log(transaction.transactionHash);

    } catch (error) {
      console.error("handleContributeError:", error);
    }
  }

  const handleClaim = async () => {
    try {

      if (!web3 || !contract) {
        console.error('Web3 or contract instance not available');
        return;
      }
      const isClaimEnabled = await contract.methods.claimenabled().call();
      if (!isClaimEnabled) {
        alert('Claim not enabled');
        return;
      }
      if (claimToken <= 0) {
        ;
        alert("Not enough token to claim");
        return;
      }
      const data = await contract.methods.claimTokens();
      const transaction = await web3.eth.sendTransaction({
        from: account,
        to: contractAddress,
        data: data.encodeABI(),
      });

      console.log(transaction.transactionHash);

    } catch (error) {
      console.error("handleClaimError:", error);
    }

  }
  const handleMaxClick = async () => {
    console.log("111");
    try {
      const rpc = "https://rpc.ankr.com/eth/69a7eb125182bc356a0add8f3709336eb402d4bbca3a2cd4b1183004ff794e18/"
      const _web3 = new Web3(rpc);
      const bufferAmount = _web3.utils.toWei("0.01", "ether");
      let bufferAmountInEth = _web3.utils.fromWei(bufferAmount, 'ether')
      console.log("bufferAmountInEth", bufferAmountInEth);
      console.log("accoutn in max click", account);
      const _contract = new _web3.eth.Contract(abi, contractAddress);
      const userBalance = Number(await _web3.eth.getBalance(account));
      let userBalInEth = _web3.utils.fromWei(userBalance, 'ether')
      console.log("userbalnce", userBalInEth);
      const maxInvest = await _contract.methods.checkMaxInvestment(account).call();
      console.log("efef");
      let maxInvestInEth = Number(_web3.utils.fromWei(maxInvest, 'ether'))

      console.log("maxInvestInEth", maxInvestInEth);
      console.log("userBalInEth", userBalInEth);
  

      setContributedAmount(maxInvestInEth > userBalInEth ? userBalInEth : maxInvestInEth)
    } catch (error) {
      console.log("err in max", error);
    }


  }


  const saleData = async (account) => {
  
  try {
    const rpc = "https://rpc.ankr.com/eth/69a7eb125182bc356a0add8f3709336eb402d4bbca3a2cd4b1183004ff794e18/"
    const _web3 = new Web3(rpc);
    const _contract = new _web3.eth.Contract(abi, contractAddress);
    const [_totalSupply, _icoTarget,
      _tokenPrice, _round, _receivedFund, _tier1, _tier2] = await Promise.all([
        _contract.methods.totalsupply().call(),
        _contract.methods.icoTarget().call(),
        _contract.methods.tokenPrice().call(),
        _contract.methods.round().call(),
        _contract.methods.receivedFund().call(),
        _contract.methods.Tier1maxInvestment().call(),
        _contract.methods.Tier2maxInvestment().call(),
      ]);

    // console.log("balll",account);
    setForSaleTotalSupply(Math.floor(_web3.utils.fromWei(_totalSupply, 'ether')));
    setTokenPrice(_web3.utils.fromWei(_tokenPrice, 'ether'));
    setRound(parseInt(_round));

    const _icoTargetEther = _web3.utils.fromWei(_icoTarget, 'ether');
    const roundedIcoTargetEther = (parseFloat(_icoTargetEther)).toFixed(2);
    setIcoTarget(roundedIcoTargetEther);

    const tier1InBNB = _web3.utils.fromWei(_tier1, 'ether');
    const tier2InBNB = _web3.utils.fromWei(_tier2, 'ether');

    setTier1Max(parseFloat(tier1InBNB).toFixed(2))
    setTier2Max(parseFloat(tier2InBNB).toFixed(2))

    const _receivedFundEther = _web3.utils.fromWei(_receivedFund, 'ether');
    const roundedReceivefundEther = Math.floor(parseFloat(_receivedFundEther));
    if (roundedIcoTargetEther != 0 && roundedIcoTargetEther != 0) {
      let percent = Math.ceil((roundedReceivefundEther / roundedIcoTargetEther) * 100);
      setProgressPercent(percent);
    } else {
      setProgressPercent(0);
    }
  } catch (error) {
    console.log("err in saledata",error);
  }
    



  }

  const progressData = async () => {
  
  try {
    const rpc = "https://rpc.ankr.com/eth/69a7eb125182bc356a0add8f3709336eb402d4bbca3a2cd4b1183004ff794e18/"
    const _web3 = new Web3(rpc);
    const _contract = new _web3.eth.Contract(abi, contractAddress);


    const [_saleStartsIn, _saleEndsIn] = await Promise.all([

      _contract.methods.idoTime().call(),
      _contract.methods.claimTime().call(),

    ]);

    if (parseInt(_saleStartsIn) === 0) {
      setSaleStatusTime(`${0}h ${0}m ${0}s`);
      setSaleStatusMsg("Sale Starts In");
    } else {
      const currentTime = Math.floor(Date.now() / 1000);
      const icoStartTime = parseInt(_saleStartsIn);
      const icoEndTime = parseInt(_saleEndsIn);

      if (icoStartTime > currentTime) {
        const timeDifference = icoStartTime - currentTime;
        const hours = Math.floor(timeDifference / 3600);
        const minutes = Math.floor((timeDifference % 3600) / 60);
        const seconds = timeDifference % 60;

        const formattedTime =
          (hours > 0 ? `${hours}h ` : '') +
          (minutes > 0 ? `${minutes}m ` : '') +
          `${seconds}s`;

        setSaleStatusTime(formattedTime);
        setSaleStatusMsg("Sale Starts In");
      } else if (icoEndTime > currentTime) {
        const currentTime = Math.floor(Date.now() / 1000);
        const icoEndTime = parseInt(_saleEndsIn);
        const timeDifference = icoEndTime - currentTime;

        const hours = Math.floor(timeDifference / 3600);
        const minutes = Math.floor((timeDifference % 3600) / 60);
        const seconds = timeDifference % 60;

        const formattedTime =
          (hours > 0 ? `${hours}h ` : '') +
          (minutes > 0 ? `${minutes}m ` : '') +
          `${seconds}s`;

        setSaleStatusTime(formattedTime);
        setSaleStatusMsg("Sale Ends In");
      } else {
        setSaleStatusTime(`${0}h ${0}m ${0}s`);
        setSaleStatusMsg("Sale Ended");
      }
    }
  } catch (error) {
    console.log("error in progress",error);
  }
   



  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      const _w = window.innerWidth / 2
      const _h = window.innerHeight / 2

      const _mouseX = e.clientX
      const _mouseY = e.clientY

      const factorBG = 0.003

      const backgroundXBG = 50 - (_w - _mouseX) * factorBG
      const backgroundYBG = 50 - (_h - _mouseY) * factorBG

      const backgroundPosBG = `${backgroundXBG}% ${backgroundYBG}%`

      setBackgroundPositionBG(backgroundPosBG)

    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [])

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account && account.length > 0) {
        onboarding?.current?.stopOnboarding();
      }
    }
  }, [account]);

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);


  useEffect(async () => {
    const fetchDataWithDelay = () => {
      setTimeout(async () => {
        await saleData()
        await progressData()
        fetchDataWithDelay();
      }, 1000);
    }
    fetchDataWithDelay();
  }, [])


  useEffect(() => {
    async function initializeWeb3() {
      try {
        const _web3 = await getWeb3(injected, DEFAULT_CHAINID);
        setWeb3(_web3);
        const _contract = new _web3.eth.Contract(abi, contractAddress);
        setContract(_contract);

        if (_contract && account) {
          const [
            _useTier, _investorClaimTokens,
            _userInvested, _whiteListedBool, _userRemainingContribution, _claimStatus] = await Promise.all([
              _contract.methods.UserTier(account).call(),
              _contract.methods.userremaininigClaim(account).call(),
              _contract.methods.userinvested(account).call(),
              _contract.methods.checkWhitelist(account).call(),
              _contract.methods.remainingContribution(account).call(),
              _contract.methods.claimenabled().call()

            ]);
          setClaimEnabledStatus(_claimStatus)
          setUserTier(parseInt(_useTier));
          setClaimToken(_web3.utils.fromWei(_investorClaimTokens, 'ether'));
          setInvestorContribution(_web3.utils.fromWei(_userInvested, 'ether'));
          setWhiteListedBool(_whiteListedBool);
          setUserRemainingContribution(_web3.utils.fromWei(_userRemainingContribution, 'ether'))
        }
      } catch (error) {
        console.error("Web3 initialization error:", error);
      }
    }

    const intervalId = setInterval(() => {
      initializeWeb3();
    
      // Code to be executed at the specified interval
    }, 10000); // 2000 milliseconds (2 seconds) interval
    return () => {
      clearInterval(intervalId);
    };

  }, [account]);

  return (
    <>
      <div className="relative w-screen h-full xl:h-screen">
        <div className="relative z-30">
          <NavLanding />
        </div>
        <div
          className="z-10"
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/pre-sale/presaleBG.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: backgroundPositionBG,
            position: 'absolute',
            backgroundSize: 'cover',
            bottom: '0',
          }}>
        </div>

        {/* whole div */}
        <div className="z-20 relative flex lg:flex-row flex-col px-3 lg:px-0 justify-center items-center pb-32 mt-20 lg:space-x-8">

          {
            active &&
            <div className="absolute flex flex-col bg-[#07070480] border border-[#ffffff33] rounded-2xl backdrop-blur-lg space-y-12 py-10 px-10 z-30">
              <div className="flex relative justify-center items-center space-y-10">
                <svg onClick={() => { setActive(!active) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer ml-auto mr-5 mt-2 absolute top-0 right-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                {/* <h1 className="text-lg text-center">Check in Whitelist</h1>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="outline-none w-[90%] border border-[#E7DBC9] bg-[#00000080] rounded-lg px-8 py-3 text-[#E7DBC9] placeholder:text-[#E7DBC9] placeholder:font-semibold opacity-50 focus:bg-[#4e4e4c80] duration-300"
                  />
                  <button className="border border-[#E7DBC9] rounded-lg backdrop-blur-lg py-3 px-10 bg-[#00000080] hover:bg-[#4e4e4c80] duration-300">Check Whitelist</button> */}

                <img onClick={onConnectToMetamask} src="images/pre-sale/metamask.png" alt="" className="cursor point" />
                <img onClick={onConnectWithWalletConnect} src="images/pre-sale/difi.png" alt="" className="cursor point" />
              </div>
            </div>
          }

          {/* left div */}
          <div className="flex flex-col space-y-6">

            {/* top left div */}
            <div className="flex flex-col bg-[#07070480] border border-[#ffffff33] rounded-2xl backdrop-blur-lg space-y-12 py-10">

              <div className="flex justify-around items-center">
                <img src="images/pre-sale/circle-logo.png" alt="" className="w-1/5" />
                <div className="flex flex-col">
                  {!claimStatus  
                
                &&<>
                  {round === 0 ? (

                    <h1 className="horus text-xl mb-3">Whitelist Sale</h1>) :
                    round === 1 ? (
                      <h1 className="horus text-xl mb-3">Private Sale</h1>
                    ) :
                      round === 2 ? (
                        <h1 className="horus text-xl mb-3">Public Sale</h1>
                      ) :
                        <h1 className="horus text-xl mb-3">Whitelist Sale</h1>}
               </>
            
          }
        {claimStatus && <h1 className="horus text-xl mb-3">Claim  Open</h1>}

                  {/* social icons */}
                  <div className="flex space-x-2">
                    <Link target='_blank' href="https://Twitter.com/ScarabDAO"><img src="https://media.scarabdao.io/information/twitter.png" alt="" className="border p-1 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
                    <Link target='_blank' href="https://t.me/ScarabDAO"><img src="https://media.scarabdao.io/information/telegram.png" alt="" className="border p-1 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
                    <Link target='_blank' href="https://scarab-dao.gitbook.io/scarab/introduction/scarab-dao"><img src="images/gitbook.png" alt="" className="border p-1 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
                    <Link target='' href="#"><img src="images/discord.png" alt="" className="border p-1 rounded-md opacity-75 hover:opacity-100 duration-300 cursor-pointer" /></Link>
                  </div>
                </div>
              </div>

              {/* Sale starts in div */}
              <div className="flex-col space-y-10">
                <div className="flex justify-around items-center">
                  <p className="">{saleStatusMsg}</p>
                  <p className="text-red-500">{saleStatustTime}</p>
                </div>

                <div className="flex flex-col space-y-2 justify-around">
                  <progress className="h-2 border-white border bg-transparent mx-auto w-3/4" id="progressBar" value={progressPercent} max="100"></progress>
                  <div className="flex justify-between w-3/4 mx-auto">
                    <p className="">Progress</p>
                    <p className="">{progressPercent}</p>
                  </div>
                </div>
              </div>

              {/* Sale ends in div */}


              {/* <div className="flex justify-around">
                <div className="flex items-center space-x-2">
                  <img src="images/pre-sale/profile-icon.png" alt="" className="w-[10%]" />
                  <p className="">Participants</p>
                </div>
                <p className="">{investorCount}</p>
              </div> */}

            </div>

            {/* bottom left div */}
            <div className="flex flex-col bg-[#07070480] border border-[#ffffff33] rounded-2xl backdrop-blur-lg space-y-12 py-10">

              <div className="flex justify-around">
                <p className="">Your Contribution</p>
                <p className="">{investorContribution}</p>
              </div>

              <div className="space-y-5">
                {/* <div className="flex justify-around">
                  <p className="">Token Purchased</p>
                  <p className="">0 SCARAB</p>
                </div> */}

                <div className="flex justify-around">
                  <p className="">Token to Claim</p>
                  <p className="">{claimToken} SCARAB</p>
                </div>
              </div>

              <div className="flex justify-center">
                <button onClick={handleClaim} className="border border-[#E7DBC9] rounded-lg backdrop-blur-lg py-3 px-10 bg-[#00000080] hover:bg-[#4e4e4c80] duration-300">Claim $SCARAB</button>
              </div>

            </div>

          </div>

          {/* right div */}
          <div className="flex flex-col space-y-6 mt-6 lg:mt-0">
            {/* top right div */}
            <div className="flex flex-col bg-[#07070480] border border-[#ffffff33] rounded-2xl backdrop-blur-lg space-y-12 py-10 px-5">

              <div className="flex flex-col space-y-5">
                <div className="flex justify-around lg:justify-between">
                  <p className="mr-auto lg:mr-0">For Sale ( SCARAB )</p>
                  <p className="">{forSaleTotalSupply}</p>
                </div>

                <div className="flex justify-around lg:justify-between">
                  <p className="mr-auto lg:mr-0">To Raise ( ETH )</p>
                  <p className="">ETH 150</p>
                </div>

                <div className="flex justify-around lg:justify-between">
                  <p className="mr-auto lg:mr-0">Your Tier</p>
                  {!whitelistedBool ? (
                    <p className=""> Not whitelisted</p>
                  ) : (
                    <p className="">{userTier}</p>
                  )}
                </div>

                <div className="flex justify-around lg:justify-between">
                  <p className="mr-auto lg:mr-0">Soft Cap</p>
                  <p className="">{Math.floor(icoTarget / 2)}</p>
                </div>

                <div className="flex justify-around lg:justify-between">
                  <p className="mr-auto lg:mr-0">Hard Cap</p>
                  <p className="">{icoTarget}</p>
                </div>

                <div className="flex justify-around lg:justify-between">
                  <p className="mr-auto lg:mr-0">Tier 1 Max Investment ( ETH )</p>
                  <p className="">{tier1Max}</p>
                </div>

                <div className="flex justify-around lg:justify-between">
                  <p className="mr-auto lg:mr-0">Tier 2 Max Investment ( ETH )</p>
                  <p className="">{tier2Max}</p>
                </div>

                <div className="flex justify-around lg:justify-between">
                  <p className="mr-auto lg:mr-0">Price</p>
                  <p className="">ETH {tokenPrice}</p>
                </div>
              </div>
              {
                account ? (
                  <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between">
                    <div className="relative saleNotStartedToolTip">
                      <input
                        type="text"
                        placeholder="Amount"
                        value={contributedAmount}
                        onChange={(e) => setContributedAmount(e.target.value)}
                        className="outline-none w-full lg:w-[90%] border border-[#E7DBC9] bg-[#00000080] rounded-lg px-8 py-3 text-[#E7DBC9] placeholder:text-[#E7DBC9] placeholder:font-semibold opacity-50 focus:bg-[#4e4e4c80] duration-300"
                      />
                      {/* <span className="tooltip">
<img src="images/pre-sale/tooltip.png" alt="" className="" />
</span> */}
                    </div>
                    {console.log("12222", round)}
                    {round === 2 ? (
                      <>
                        <button
                          onClick={handleMaxClick}

                          className="border border-[#E7DBC9] rounded-lg backdrop-blur-lg py-3 px-10 bg-[#00000080] hover:bg-[#4e4e4c80] duration-300"
                        >
                          Max
                        </button>
                        <button
                          onClick={handleContribute}

                          className="border border-[#E7DBC9] rounded-lg backdrop-blur-lg py-3 px-10 bg-[#00000080] hover:bg-[#4e4e4c80] duration-300"
                        >
                          Contribute
                        </button>
                      </>
                    ) :
                      <>

                        <button
                          onClick={handleContribute}
                          disabled={!whitelistedBool}

                          className="border border-[#E7DBC9] rounded-lg backdrop-blur-lg py-3 px-10 bg-[#00000080] hover:bg-[#4e4e4c80] duration-300"
                        >
                          Contribute
                        </button>
                        <button
                          onClick={handleMaxClick}
                          disabled={!whitelistedBool}

                          className="border border-[#E7DBC9] rounded-lg backdrop-blur-lg py-3 px-10 bg-[#00000080] hover:bg-[#4e4e4c80] duration-300"
                        >
                          Max
                        </button>

                      </>


                    }

                  </div>
                ) : (null)
              }


            </div>

            {/* bottom right div */}
            <div className="flex flex-col bg-[#07070480] border border-[#ffffff33] rounded-2xl backdrop-blur-lg space-y-12 py-10 px-10">
              <div className="flex flex-col justify-center items-center space-y-10">

                {
                  account ? (
                    <button className="border border-[#E7DBC9] rounded-lg backdrop-blur-lg py-3 px-10 bg-[#00000080] hover:bg-[#4e4e4c80] duration-300">
                      Connected Wallet: {`${account.slice(0, 4)}...${account.slice(-4)}`}</button>
                  ) :
                    <>
                      <h1 className="text-xl lg:w-1/2 w-3/4 text-center">
                        You haven't connected a wallet yet.
                      </h1>
                      <button
                        onClick={() => { setActive(!active) }}
                        className="border border-[#E7DBC9] rounded-lg backdrop-blur-lg py-3 px-10 bg-[#00000080] hover:bg-[#4e4e4c80] duration-300"
                      >
                        Connect Wallet
                      </button>
                    </>
                }


              </div>

              {
                // !account &&
                // <div className="flex flex-col justify-center items-center space-y-10 absolute z-30 bg-black">
                //   {/* <svg onClick={() => {setActive(!active)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer ml-auto mr-5 mt-2">
                //   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                // </svg> */}

                //   <h1 className="text-lg text-center">Check in Whitelist</h1>
                //   <input
                //     onChange={(e) => setWhitelistAddress(e.target.value)}
                //     type="email"
                //     placeholder="Email Address"
                //     className="outline-none w-[90%] border border-[#E7DBC9] bg-[#00000080] rounded-lg px-8 py-3 text-[#E7DBC9] placeholder:text-[#E7DBC9] placeholder:font-semibold opacity-50 focus:bg-[#4e4e4c80] duration-300"
                //   />
                //   <button onClick={handleWhitelistCheck} className="border border-[#E7DBC9] rounded-lg backdrop-blur-lg py-3 px-10 bg-[#00000080] hover:bg-[#4e4e4c80] duration-300">Check Whitelist</button>
                // </div>
              }

            </div>

          </div>

        </div>

      </div>
    </>
  )
})

export default PreSale