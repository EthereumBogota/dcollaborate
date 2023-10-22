// SPDX-License-Identifier: GPLv3
pragma solidity ^0.8.16;

import {IWETH} from "./interfaces/IWETH.sol";


abstract contract DCollaborateBase {
    address payable public owner;
    IWETH  public WETH;

    modifier onlyOwner() {
        require(msg.sender == owner, "caller is not owner");
        _;
    }

    event Deposit(address account, uint256 amount);
    event SentETH(
        address indexed sender,
        address indexed recipient,
        uint256 amount
    );
    event WithdrawETH(address indexed sender, uint256 amount);

    constructor() payable {
        owner = payable(msg.sender);
    }

    receive() external payable virtual {
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 _amount) external onlyOwner {
        require(_amount <= address(this).balance, "not enough balance");
        sendEth(owner, _amount);
        emit WithdrawETH(msg.sender, _amount);
    }

    function setOwner(address _owner) external onlyOwner {
        owner = payable(_owner);
    }

    function getEthBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getWETHBalance() public view returns (uint) {
        return WETH.balanceOf(address(this));
    }

    function send(address payable _to) public payable {
        sendEth(_to, msg.value);
    }

    function sendEth(address payable _to, uint256 _amount) internal {
        (bool sent, ) = _to.call{value: _amount}("");
        require(sent, "Failed to send Ether");
        emit SentETH(msg.sender, _to, _amount);
    }
}
