import { useState } from 'react';
import Container from './Container'
import { ethers } from 'ethers'
import WalletService from '../services/wallet';


const ConnectWallet = (props:any) => {
    
    const walletService = new WalletService()
    const [address, setAddress] = useState<string>();
    const [balance, setBalance] = useState<string>();

    const  handleConnectWallet = async () => {
        const signer = await walletService.getSigner()
        setAddress(await signer.getAddress())
        setBalance(ethers.utils.formatEther(await signer.getBalance())) 
        props.setIsConnected(true);
    }

    return (
        <Container className={`flex w-full flex-col mt-4 ${
            props.align === "left" ? "" : "items-center justify-center text-center"
        }`}>
           {/** show the connect wallet button just if is not connect **/}
           {!address &&
            <button type="button" className="btn btn-primary w-full" onClick={handleConnectWallet}>{props.label}</button>

           } 

            <div className="ml-2 flex flex-col">
                <div className="leading-snug text-xs text-gray-600">{address}</div>
                <div className="leading-snug text-sm text-gray-600">{balance}</div>
            </div>
        </Container>
    );
}


export default ConnectWallet;

