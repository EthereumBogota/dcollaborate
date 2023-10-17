include .env


# It will generate the TypeScript types for a specific smart contract
# contrac=NameOfContract without the .sol extension
# Usage:
# 	make contract=Counter generate-types
generate-types:
	## npm i -g typechain
	typechain --target ethers-v5 --out-dir 'frontend/generated/contract-types' 'blockchain/out/$(contract).sol/$(contract).json'
.PHONY: generate-types


# It will deploy a contract on Sepolia
# usage:
# 	make contract=Counter deploy-sepolia
deploy-sepolia:
	cd blockchain && forge create 'src/$(contract).sol:$(contract)' --rpc-url 'https://eth-sepolia-public.unifra.io/' --private-key $(PRIVATE_KEY) --legacy --verify --etherscan-api-key $(ETHERSCAN_API_KEY)	
.PHONY: deploy-sepolia
