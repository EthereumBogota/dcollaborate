# It will generate the TypeScript types for a specific smart contract
# contrac=NameOfContract without the .sol extension
# Usage:
# 	make contract=Counter generate-types
generate-types:
	## npm i -g typechain
	typechain --target ethers-v5 --out-dir 'frontend/generated/contract-types' 'blockchain/out/$(contract).sol/$(contract).json'
.PHONY: generate-types



