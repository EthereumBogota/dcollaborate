import { Signer, ethers } from 'ethers'

declare let window:any;

class WalletService {

    // TODO: handle errors
    async getProvider() {
        if (window.ethereum) { 
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            return provider
        } else {
            alert("Please Install Metamask!!!");
        }
    }

    // TODO: handle errors
    async getSigner() : Promise<Signer> {
        const provider = await this.getProvider()
        const signer = provider.getSigner()
        return signer
    }
}

export default WalletService
