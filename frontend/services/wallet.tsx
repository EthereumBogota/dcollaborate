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
        return new Promise( (resolve, reject ) => {
            this.getProvider().then( provider => {
                if (provider != undefined) {
                    resolve(provider.getSigner())
                }
                reject('provider undefined')
            }).catch( err => {
                reject(err)
            })
        })
    }
}

export default WalletService
