
"use client"
import PreSale from '@/components/preSale/PreSale'
import React, { useEffect } from 'react';
import Web3Context from "../../context/web3Context";
import useAutoRefresh from "../../hooks/useAutoRefresh";

const AutoConnectWrapper = ({ children }) => {
  const autoConnect = useAutoRefresh();
  return <>{children}</>;
};

const Page = React.memo(() => {

  return (
    <Web3Context>
      <AutoConnectWrapper>
        <div>
          <PreSale />
        </div>
      </AutoConnectWrapper>
    </Web3Context>

  )
})

export default Page