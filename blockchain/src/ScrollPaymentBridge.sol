// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@scroll-tech/contracts/L1/gateways/IL1ETHGateway.sol";

contract ScrollPaymentBridge {

    // @notice this function will deposit ETH from L1 to L2
    // @param scrollBrige the address of recipient's account on L2.
    // @param gasLimit to process the transaction
    function depositETHToScroll(address scrollBrige, uint gasLimit) public payable {
        IL1ETHGateway(scrollBrige).depositETH(msg.sender, msg.value, gasLimit);
    }
}
