// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@scroll-tech/contracts/L1/gateways/IL1ETHGateway.sol";

// ETHToScrollPaymentBridge is a bridge from ETH blockchain and ScrollBlockchain
// NOTE: be sure to deploy this contract on ETH blockchains (Mainent, Sepolia)
//  this should NOT be deployed on Scroll. 
contract ETHToScrollPaymentBridge {

    // @notice this function will deposit ETH from L1 to L2
    // @param to the address of recipient's account on L2.
    // @param gasLimit to process the transaction 
    function depositETHToScroll(address to, uint gasLimit) public payable {
        IL1ETHGateway(to).depositETH(msg.sender, msg.value, gasLimit);
    }
}
