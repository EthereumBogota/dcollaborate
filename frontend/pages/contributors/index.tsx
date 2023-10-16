
import ConnectWallet from '../../components/ConnectWallet';
import Container from '../../components/Container';
import Menu from '../../components/Menu'

const Contributors = () => {
    const connectProps = {label:'Connect Contributor Wallet '}
    return (
        <Container>
            <Menu />
            Contributors Page

            <ConnectWallet {...connectProps} />
        </Container>
    )
}

export default Contributors;
