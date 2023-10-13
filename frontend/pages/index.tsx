import { useState } from 'react';
import Head from "next/head";
import SectionTitle from "../components/SectionTitle";
import ConnectWallet from "../components/ConnectWallet";
import Navbar from "../components/Navbar";
import { ethers } from "ethers";

declare let window:any;

const Home = () => {
    const items = [
        "Product",
        "Features",
        "Pricing",
        "Company",
        "Blog",
    ];

    const [address, setAddress] = useState<string>();
    const [balance, setBalance] = useState<string>();
    
    const  handleConnectWallet = async () => {
        if (window.ethereum) { 
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send('eth_requestAccounts', [])
            const signer = provider.getSigner()
            setAddress(await signer.getAddress())
            setBalance(ethers.utils.formatEther(await signer.getBalance())) 
        } else {
            alert("Please Install Metamask!!!");
        }
     }

    return (
        <>
            <Head>
            <title>DCollaborate</title>
            <meta
                name="description"
                content="DCollaborate"
            />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Navbar  
                items={items} 
                rightContent={
                    <ConnectWallet
                        handleClick={handleConnectWallet}
                        address={address}
                        balance={balance}
                    />
                } 
            />

            <SectionTitle
                title=" DCollaborate">
                Tool with which a DAO can grant part of the collateral for the loans of its most reputable members while the treasury earns a percentage. Receive funds from the DAO, funds from members, open Collateral position in e.g. compound and also the remaining treasury left by the DAO to be rented until more members opt for this option of having loans with less collateral than what the market is.  
            </SectionTitle>

        </>
    );
}

export default Home;
