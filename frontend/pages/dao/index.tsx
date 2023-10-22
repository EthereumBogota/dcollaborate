
import { useState } from 'react';
import ConnectWallet from '../../components/ConnectWallet';
import Menu from '../../components/Menu'
import Sidebar from '../../components/Sidebar'
import ScrollDeposit from '../../components/ScrollDeposit';
import CenteredContainer from '../../components/CenteredContainer'

const DAO = () => {
    const [isConnected, setIsConnected] = useState<string>();
    const connectProps = {
        href:'dao', 
        label:'Connect Wallet as DAO', 
        setIsConnected:setIsConnected ,
        isConnected: isConnected,
    }

    const connect = <ConnectWallet {...connectProps}/>
    const menuProps = {connectWallet:connect, isConnected: isConnected}
    const menu =  <Menu {...menuProps} />
    const sidebarProps = {topmenu: menu, isConnected: isConnected}

    return (
        <div>
            {!isConnected && 
                <div>
                    {menu}
                    <CenteredContainer>
                        <div className="alert alert-info">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 34C22.9 34 22 33.1 22 32V24C22 22.9 22.9 22 24 22C25.1 22 26 22.9 26 24V32C26 33.1 25.1 34 24 34ZM26 18H22V14H26V18Z" fill="#0085FF" />
	</svg>
                            <div className="flex flex-col text-center">
                                <span className="text-content2">Please connect your wallet</span>
                            </div>
                        </div>
                    </CenteredContainer>
                </div>
            }
            <Sidebar {...sidebarProps} >
                <ScrollDeposit />
            </Sidebar>
        </div>
    )
} 

export default DAO;
