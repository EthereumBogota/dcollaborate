
import { useState } from 'react';
import ConnectWallet from '../../components/ConnectWallet';
import Container from '../../components/Container'
import Menu from '../../components/Menu'
import SectionTitle from '../../components/SectionTitle';
import ScrollDeposit from '../../components/ScrollDeposit';

const DAO = () => {

    const [isConnected,setIsConnected] = useState<string>();
    const connectProps = {href:'dao', label:'Connect Wallet as DAO', setIsConnected:setIsConnected  }
    const connect = <ConnectWallet {...connectProps}/>
    const menuProps = {connectWallet:connect}

    return (
        <Container>
            <Menu {...menuProps}/>
            <SectionTitle>
                Dao Page
            </SectionTitle>
            {isConnected && <ScrollDeposit />}
        </Container>
    )
} 

export default DAO;
