// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@scroll-tech/contracts/L2/gateways/IL2ETHGateway.sol";

// ScrollToETHPaymentBridge is in charge to manage transaction from L2 to L1
// NOTE: this contract should be deployed on L2 Scroll, Scroll-Sepolia
contract ScrollToETHPaymentBridge {

    // @notice this function will withdraw ETH from L2 to L1
    // @param to the address of recipient's account on L1
    // @param gasLimit to process the transaction
    function withdrawETH(address to, uint gasLimit) public payable {
        IL2ETHGateway(to).withdrawETH(msg.sender, msg.value, gasLimit);
    }
}
