// Original license: SPDX_License_Identifier: GPLv3
pragma solidity ^0.8.19;

import {DCollaborateBase} from "./DCollaborateBase.sol";
import "@scroll-tech/contracts/L2/gateways/IL2ETHGateway.sol";

import {IWETH} from "./interfaces/IWETH.sol";

contract DCollaborateL2 is DCollaborateBase {
    IL2ETHGateway public l2Gateway;
    address public l1Contract;
    uint256 public withdrawGasLimit = 500000;
    event WithdrawETHToL2(address indexed sender, uint256 amount);

    receive() external payable override {
        WETH.deposit{value: msg.value}();
        emit Deposit(msg.sender, msg.value);
    }

    constructor(address gateway, address _l1Contract, address _weth) payable {
        l2Gateway = IL2ETHGateway(gateway);
        l1Contract = _l1Contract;
        WETH = IWETH(_weth);
    }

    function setWithdrawGasLimit(uint256 _gasLimit) external onlyOwner {
        withdrawGasLimit = _gasLimit;
    }

    function gatewayWithdraw(uint256 _amount) external onlyOwner {
        uint256 wethBalance = getWETHBalance();

        // convert eth to weth
        if (wethBalance > 0) {
            WETH.withdraw(wethBalance);
        }

        l2Gateway.withdrawETH(l1Contract, _amount, withdrawGasLimit);
        emit WithdrawETHToL2(owner, _amount);
    }
}
