
import ScrollPaymentBridgeService from '../services/scroll';
import WalletService from '../services/wallet';
import Container from './Container'


const ScrollDeposit = () => {
    const CONTRACT_ADDRESS = '0x0B742FA6bC60F06b4d3D8743b43680b047b7c8f0';
    const L2_ADDRES = '0x5Cc7EDA15183E95EAd8EE8E7349b48F84aa71E99'

    const walletService = new WalletService()
    const scrollService = new ScrollPaymentBridgeService()
  
    const onClickDeposit = async () => {
        const signer = await walletService.getSigner()
        scrollService.DepositETHToScroll(signer, CONTRACT_ADDRESS, L2_ADDRES)
    }
    
    return (
        <Container>
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-semibold">Deposit Contribution</h1>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <label className="form-label">Amount</label>
                        <div className="form-control">
                            <input placeholder="Example: 1000 ETH" className="input max-w-full" />
                        </div>
                    </div>
                    <div className="form-field pt-5">
                        <div className="form-control justify-between">
                            <button onClick={onClickDeposit} type="button" className="btn btn-primary w-full">Deposit</button>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )    
}

export default ScrollDeposit;
