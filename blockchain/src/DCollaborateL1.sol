// SPDX-License-Identifier: GPLv3
pragma solidity ^0.8.19;

import {DCollaborateBase} from "./DCollaborateBase.sol";
import {IWETH} from "./interfaces/IWETH.sol";
import {IUniswapV2Router02} from "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

contract DCollaborateL1 is DCollaborateBase {
    IUniswapV2Router02 public swapRouter;
    address public DAI;

    constructor(address uniRouter, address _weth, address dai) payable {
        swapRouter = IUniswapV2Router02(uniRouter);
        WETH = IWETH(_weth);
        DAI = dai;
    }

    function swapEthToDai(uint amountIn) external onlyOwner {
        address[] memory path = new address[](2);
        path[0] = swapRouter.WETH();
        path[1] = DAI;
        swapRouter.swapExactETHForTokens{value: amountIn}(
            0,
            path,
            owner,
            block.timestamp + 300
        );
    }
}
