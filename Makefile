# The .env file should be filled or the next commands will fail
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

# It will deploy a Smart contract into the Scroll Sepolia blockchain
# make contract=Counter deploy-scroll-sepolia
deploy-scroll-sepolia:
	cd blockchain && forge create 'src/$(contract).sol:$(contract)' --rpc-url "https://sepolia-rpc.scroll.io/" --private-key $(PRIVATE_KEY) --legacy
.PHONY: deploy-scroll-sepolia

# It will verify a previous contract deployed to Scroll Sepolia
# make contract=Counter address=0x765656 verify-scroll-sepolia
verify-scroll-sepolia:
	cd blockchain && forge verify-contract $(address) 'src/$(contract).sol:$(contract)' --chain-id 534351  --verifier-url https://sepolia-blockscout.scroll.io/api? --verifier blockscout
.PHONY: verify-scroll-sepolia
