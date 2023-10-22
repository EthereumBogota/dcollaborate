
import {Signer} from 'ethers'
import {ETHToScrollPaymentBridge__factory} from '../generated/contract-types/factories/ETHToScrollPaymentBridge__factory'
import {ethers} from 'ethers'
import { ScrollToETHPaymentBridge__factory } from '../generated/contract-types'


// this contract was de ployed on L2
// const CONTRACT_ETH_TO_SCROLL='0xc4452AA4F2D467c521c2681D31C7b36e2BC07ac7'
// this contract was deployed on L1
const CONTRACT_ETH_TO_SCROLL='0x59c15e01306Ad26192AbF66E67bD4b6b99d61b70'
// this contract was deployed on L2
const CONTRACT_SCROLL_TO_ETH='0x55613Bd48BD902e0A72584F7dE9D2581557f372b'

const MASTER_WALLET_ETH     ='0x5Cc7EDA15183E95EAd8EE8E7349b48F84aa71E99'
const MASTER_WALLET_SCROLL  ='0x5Cc7EDA15183E95EAd8EE8E7349b48F84aa71E99'

class ScrollPaymentBridgeService {

    // This method will deposit ETH from L1 to L2
    // @param signer the signer of the transaction
    // @param recipientAddressL2 is the address where will be send the amount on L2
    TransferL1L2(signer:Signer, amount: string) {
        alert(amount)
        const contract = ETHToScrollPaymentBridge__factory.connect(CONTRACT_ETH_TO_SCROLL, signer)
        const gas=ethers.utils.parseUnits("5000", "ether") // gas in wei
        const options = {value: ethers.utils.parseUnits(amount, "ether")} // amount in wei 

        contract.depositETHToScroll(MASTER_WALLET_SCROLL, gas, options).then( tx => {
            console.log("L1L2: all is ok")
            console.log(tx)
        })
    }

    // This method will withdrae ETH from L2 to L1
    // @param signer the signer of the transaction
    // @param recipientAddressL2 is the address where will be send the amount on L2
    TransferL2L1(signer:Signer, amount: string) {
        alert(amount)
        const contract =  ScrollToETHPaymentBridge__factory.connect(CONTRACT_SCROLL_TO_ETH, signer)
        const gas=ethers.utils.parseUnits("5000", "ether") //gas  in wei
        const options = {value: ethers.utils.parseUnits(amount, "ether")}// amount in  wei
        
        contract.withdrawETH(MASTER_WALLET_ETH, gas, options).then(tx => {
            console.log("L2L1: alls is ok")
            console.log(tx)
        })
    } 
}

export default ScrollPaymentBridgeService

