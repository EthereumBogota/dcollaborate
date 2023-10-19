
import { useState } from 'react';
import ConnectWallet from '../../components/ConnectWallet';
import Menu from '../../components/Menu'
import Sidebar from '../../components/Sidebar'

const DAO = () => {

    const [isConnected,setIsConnected] = useState<string>();
    const connectProps = {href:'dao', label:'Connect Wallet as DAO', setIsConnected:setIsConnected  }
    const connect = <ConnectWallet {...connectProps}/>
    const menuProps = {connectWallet:connect}
    const menu =  <Menu {...menuProps} />
    const sidebarProps = {topmenu: menu}

    return (
        <div>
            {!isConnected && 
                <div>
                    {menu}
                    <div>
                            Please connect your Wallet
                    </div>
                </div>
            }
            {isConnected && <Sidebar {...sidebarProps} />}
        </div>
    )
} 

export default DAO;
