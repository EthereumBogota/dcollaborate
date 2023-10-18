
import { useState } from 'react';
import ScrollPaymentBridgeService from '../services/scroll';
import WalletService from '../services/wallet';
import Container from './Container'
import {ethers} from 'ethers'


const ScrollDeposit = () => {
    const [amount, setAmount] = useState<string>("")
    const walletService = new WalletService()
    const scrollService = new ScrollPaymentBridgeService()
 
    const onChangeAmount = (event) => {
        setAmount(event.target.value)
    }

    const onClickDeposit = async () => {
        const signer = await walletService.getSigner()
        scrollService.TransferL1L2(signer, amount)
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
                            <input value={amount} onChange={onChangeAmount} placeholder="Example: 1000 ETH" className="input max-w-full" />
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
