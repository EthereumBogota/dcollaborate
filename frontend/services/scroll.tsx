
import {Signer} from 'ethers'
import {ScrollPaymentBridge__factory} from '../generated/contract-types/factories/ScrollPaymentBridge__factory'


class ScrollPaymentBridgeService {
    
    // This method will call the ScrollPaymentBridge contract and will deposit ETH from L1 to L2
    // @param signer the signer of the transaction
    // @param contractAddres is the address where was deployed the ScrollPaymentBridge contract
    // @param recipientAddressL2 is the address where will be send the amount on L2
    DepositETHToScroll(signer:Signer, contractAddress:string, recipientAddressL2: string) {
        const client = ScrollPaymentBridge__factory.connect(contractAddress, signer)
        client.depositETHToScroll(recipientAddressL2, 100)
    }
   

}

export default ScrollPaymentBridgeService

