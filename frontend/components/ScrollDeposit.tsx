
import React, { useState } from 'react';
import ScrollPaymentBridgeService from '../services/scroll';
import WalletService from '../services/wallet';
import Container from './Container'
import { ContractTransaction } from 'ethers';

const ScrollDeposit = () => {
    const [amount, setAmount] = useState<string>("")
    const [depositDone, setDepositDone] = useState<boolean>(false)
    const [transaction, setTransaction] = useState<ContractTransaction>()

    const walletService = new WalletService()
    const scrollService = new ScrollPaymentBridgeService()
 
    const onChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.currentTarget.value)
    }

    const onClickDeposit = async () => {
        const signer = await walletService.getSigner()
        scrollService.TransferL1L2(signer, amount).then(transaction => {
            console.log(transaction)
            setTransaction(transaction)
            setDepositDone(true)
        }).catch(err => {
            console.log(err)
            setDepositDone(false)
        })
    }
    
    return (
        <Container>
            <div className="mx-auto flex w-full flex-col gap-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-semibold">Contribution Deposit</h1>
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

                {depositDone && 
                    <div className="alert alert-success">
                        <div className="flex flex-col">
                            <span>Successful transaction</span>
                            <span className="text-content2">The deposit fund has been done.</span>
                            <span className="text-content2">Amount: {amount}</span>
                             <span className="text-content2">Hash: {transaction?.hash}</span>
                            <span className="text-content2">From: {transaction?.from}</span>
                            <span className="text-content2">To: {transaction?.to}</span>
                        </div>
                    </div>
                }

            </div>
        </Container>
    )    
}

export default ScrollDeposit;
